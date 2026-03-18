import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const SECURITY_CONFIG = {
  MIN_SUBMISSION_TIME: 3000,
  MAX_FIELD_LENGTH: { fullName: 100, email: 100, phone: 20, message: 2000 },
  RATE_LIMIT: { maxRequests: 3, windowMs: 60000 }
};

const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

function isValidEmail(email: string) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email) && email.length <= SECURITY_CONFIG.MAX_FIELD_LENGTH.email;
}

function isValidPhone(phone: string) {
  const phoneRegex = /^[\d\s\-\+\(\)]{8,20}$/;
  return phoneRegex.test(phone) && phone.length <= SECURITY_CONFIG.MAX_FIELD_LENGTH.phone;
}

function isValidName(name: string) {
  const nameRegex = /^[a-zA-ZÀ-ÿ\s\-']{2,100}$/;
  return nameRegex.test(name) && name.length <= SECURITY_CONFIG.MAX_FIELD_LENGTH.fullName;
}

function containsMaliciousContent(text: string) {
  const maliciousPatterns = [/<script/i, /javascript:/i, /on\w+\s*=/i, /<iframe/i, /eval\(/i, /expression\(/i, /<object/i, /<embed/i];
  return maliciousPatterns.some(pattern => pattern.test(text));
}

function sanitizeInput(input: string) {
  return input.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2F;');
}

function checkRateLimit(ip: string) {
  const now = Date.now();
  const record = rateLimitStore.get(ip);
  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + SECURITY_CONFIG.RATE_LIMIT.windowMs });
    return true;
  }
  if (record.count >= SECURITY_CONFIG.RATE_LIMIT.maxRequests) return false;
  record.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    
    if (!checkRateLimit(ip)) {
      return NextResponse.json({ error: "Trop de tentatives. Veuillez réessayer dans 1 minute." }, { status: 429 });
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: "Configuration serveur invalide" }, { status: 500 });
    }

    const body = await request.json();
    const { fullName, email, phone, message, honeypot, startTime } = body;

    if (honeypot) return NextResponse.json({ success: true });

    const submissionTime = Date.now() - startTime;
    if (submissionTime < SECURITY_CONFIG.MIN_SUBMISSION_TIME) {
      return NextResponse.json({ error: "Veuillez prendre le temps de remplir le formulaire." }, { status: 400 });
    }

    if (!fullName || !email || !phone || !message) return NextResponse.json({ error: "Tous les champs sont requis." }, { status: 400 });

    if (!isValidName(fullName) || !isValidEmail(email) || !isValidPhone(phone)) {
      return NextResponse.json({ error: "Certaines informations sont invalides." }, { status: 400 });
    }

    if (containsMaliciousContent(fullName) || containsMaliciousContent(email) || containsMaliciousContent(phone) || containsMaliciousContent(message)) {
      return NextResponse.json({ error: "Contenu non autorisé détecté." }, { status: 400 });
    }

    const data = {
      fullName: sanitizeInput(fullName.trim()),
      email: sanitizeInput(email.trim().toLowerCase()),
      phone: sanitizeInput(phone.trim()),
      message: sanitizeInput(message.trim())
    };

    const fromEmail = "Aquila Novaro <contact@aquilanovaro.com>";

    // 1️⃣ Mail au support
    const { error: supportError } = await resend.emails.send({
      from: fromEmail,
      to: ['contact@aquilanovaro.com'],
      replyTo: data.email,
      subject: `🚀 Nouveau projet : ${data.fullName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin:0; background:#f4f7f9; color:#333; }
            .container { max-width: 600px; margin: 30px auto; background:white; border-radius:12px; overflow:hidden; box-shadow:0 4px 16px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #800000, #E31B1B); color:white; padding: 25px; text-align:center; font-size:22px; }
            .content { padding:30px; }
            .field { margin-bottom:20px; }
            .label { font-weight:bold; color:#E31B1B; text-transform:uppercase; font-size:12px; }
            .value { margin-top:5px; padding:12px; background:#f9f9f9; border-left:4px solid #E31B1B; border-radius:6px; word-break:break-word; }
            .footer { text-align:center; margin-top:20px; color:#666; font-size:12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">Nouveau Contact Aquila Novaro</div>
            <div class="content">
              <div class="field"><div class="label">Nom complet</div><div class="value">${data.fullName}</div></div>
              <div class="field"><div class="label">Email</div><div class="value"><a href="mailto:${data.email}">${data.email}</a></div></div>
              <div class="field"><div class="label">Téléphone</div><div class="value"><a href="tel:${data.phone}">${data.phone}</a></div></div>
              <div class="field"><div class="label">Message</div><div class="value">${data.message}</div></div>
              <div class="footer">Reçu le ${new Date().toLocaleString('fr-FR')} | IP: ${ip}</div>
            </div>
          </div>
        </body>
        </html>
      `
    });

    if (supportError) throw supportError;

    // 2️⃣ Mail de confirmation au client
    const { error: clientError } = await resend.emails.send({
      from: fromEmail,
      to: [data.email],
      subject: "✅ Confirmation de réception de votre message Aquila Novaro",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <style>
            body { font-family: 'Segoe UI', Tahoma, Verdana, sans-serif; margin:0; background:#f4f7f9; color:#333; }
            .container { max-width: 600px; margin: 30px auto; background:white; border-radius:12px; overflow:hidden; box-shadow:0 4px 16px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #800000, #E31B1B); color:white; padding:25px; text-align:center; font-size:22px; }
            .content { padding:30px; line-height:1.6; }
            .highlight { color:#E31B1B; font-weight:bold; }
            .footer { text-align:center; margin-top:20px; color:#666; font-size:12px; }
            ul { padding-left: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">Merci pour votre message !</div>
            <div class="content">
              <p>Bonjour <span class="highlight">${data.fullName}</span>,</p>
              <p>Nous avons bien reçu votre message concernant votre projet.</p>
              <p>Notre équipe reviendra vers vous dans les plus brefs délais.</p>
              <p>Résumé de votre demande :</p>
              <ul>
                <li><strong>Email :</strong> ${data.email}</li>
                <li><strong>Téléphone :</strong> ${data.phone}</li>
                <li><strong>Message :</strong> ${data.message}</li>
              </ul>
              <p>Merci de votre confiance,<br>L’équipe Aquila Novaro</p>
            </div>
            <div class="footer">Aquila Novaro © ${new Date().getFullYear()}</div>
          </div>
        </body>
        </html>
      `
    });

    if (clientError) throw clientError;

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("❌ Erreur API Contact:", err);
    return NextResponse.json({ error: "Une erreur est survenue. Veuillez réessayer." }, { status: 500 });
  }
}