// components/home/DirectionCard.tsx
import Link from 'next/link';

interface Props { title: string; desc: string; href: string; color: string; tag: string; }

export default function DirectionCard({ title, desc, href, color, tag }: Props) {
  return (
    <div className="group relative bg-white border border-gray-100 p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between h-full">
      <div>
        <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-6 inline-block bg-${color}-50 text-${color}-600`}>
          {tag}
        </span>
        <h3 className="text-2xl font-bold text-momentum-blue mb-4 group-hover:text-momentum-red transition-colors italic uppercase tracking-tighter">
          {title}
        </h3>
        <p className="text-gray-500 leading-relaxed mb-8">{desc}</p>
      </div>
      <Link href={href} className="flex items-center gap-2 font-bold text-momentum-blue group-hover:gap-4 transition-all">
        Découvrir <span className="text-xl">→</span>
      </Link>
    </div>
  );
}