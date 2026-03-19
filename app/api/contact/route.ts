import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const LOGO_URL = "https://www.mgh-drc.com/logo/momentum.png";
const MOMENTUM_BLUE = "#0A1F44";
const MOMENTUM_RED = "#E31B1B";

function sanitize(text: string) {
  return text.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, email, message, activePole, honeypot, startTime } = body;

    if (honeypot) return NextResponse.json({ success: true });

    const data = {
      name: sanitize(fullName),
      email: sanitize(email.toLowerCase()),
      pole: sanitize(activePole),
      msg: sanitize(message)
    };

    // --- EMAIL AU PATRON (ADMIN) ---
    const { error: adminError } = await resend.emails.send({
      from: 'MGH Alert <contact@mgh-drc.com>',
      to: ['contact@mgh-drc.com'],
      replyTo: data.email,
      subject: `🏛️ [${data.pole.toUpperCase()}] Contact : ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #334155; line-height: 1.6; padding: 20px;">
          <div style="max-width: 600px; margin: 0 auto; border: 1px solid #f1f5f9; padding: 30px; border-radius: 8px;">
            <p style="font-size: 12px; color: ${MOMENTUM_RED}; font-weight: bold; text-transform: uppercase; margin-bottom: 5px;">Nouvelle Requête Client</p>
            <h2 style="color: ${MOMENTUM_BLUE}; margin-top: 0;">Détails du contact</h2>
            <hr style="border: 0; border-top: 1px solid #f1f5f9; margin: 20px 0;">
            
            <p><strong>Pôle :</strong> ${data.pole}</p>
            <p><strong>Nom :</strong> ${data.name}</p>
            <p><strong>Email :</strong> ${data.email}</p>
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin-top: 20px; border-left: 4px solid ${MOMENTUM_BLUE};">
              <p style="margin: 0; font-style: italic;">"${data.msg}"</p>
            </div>

            <div style="margin-top: 50px; padding-top: 20px; border-top: 2px solid ${MOMENTUM_BLUE};">
              <img src="${LOGO_URL}" alt="Momentum Logo" style="height: 35px; margin-bottom: 10px;">
              <p style="margin: 0; font-size: 11px; font-weight: bold; color: ${MOMENTUM_BLUE}; text-transform: uppercase; letter-spacing: 1px;">Momentum Group Holdings</p>
              <p style="margin: 0; font-size: 10px; color: #94a3b8;">Automated System Notification</p>
            </div>
          </div>
        </div>
      `
    });

    if (adminError) throw adminError;

    // --- EMAIL AU CLIENT (CONFIRMATION) ---
    const { error: clientError } = await resend.emails.send({
      from: 'Momentum Group <contact@mgh-drc.com>',
      to: [data.email],
      subject: "Confirmation de votre demande | Momentum Group",
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; color: #1e293b; line-height: 1.8; padding: 20px;">
          <div style="max-width: 600px; margin: 0 auto;">
            <p style="font-size: 16px;">Bonjour <strong>${data.name}</strong>,</p>
            <p style="font-size: 16px;">Nous avons bien reçu votre message adressé au pôle <strong>${data.pole}</strong>.</p>
            <p style="font-size: 16px;">Nos équipes reviendront vers vous sous peu pour donner suite à votre demande.</p>
            
            <p style="font-size: 16px; margin-top: 30px;">Cordialement,</p>

            <table style="margin-top: 40px; border-collapse: collapse;">
              <tr>
                <td style="padding-right: 20px; border-right: 2px solid ${MOMENTUM_RED};">
                  <img src="${LOGO_URL}" alt="Momentum Logo" style="height: 50px; width: auto; display: block;">
                </td>
                <td style="padding-left: 20px;">
                  <p style="margin: 0; font-size: 14px; font-weight: 900; color: ${MOMENTUM_BLUE}; text-transform: uppercase; letter-spacing: 1px;">Momentum Group Holdings</p>
                  <p style="margin: 0; font-size: 12px; color: ${MOMENTUM_RED}; font-weight: bold;">Direction Institutionnelle</p>
                  <p style="margin: 0; font-size: 11px; color: #94a3b8; margin-top: 4px;">Kinshasa, Gombe | RD Congo</p>
                  <p style="margin: 0; font-size: 11px; color: #94a3b8;"><a href="https://www.mgh-drc.com" style="color: #94a3b8; text-decoration: none;">www.mgh-drc.com</a></p>
                </td>
              </tr>
            </table>
          </div>
        </div>
      `
    });

    if (clientError) throw clientError;

    return NextResponse.json({ success: true });

  } catch (err: any) {
    console.error("❌ API Error:", err);
    return NextResponse.json({ error: "Erreur de transmission." }, { status: 500 });
  }
}