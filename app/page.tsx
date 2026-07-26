import Link from "next/link";
import { sections, thumbUrl } from "./data";

export default function SebastianHome() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3">
        {sections.map((s) => (
          <Link key={s.slug} href={`/${s.slug}`} className="group block">
            <div className="overflow-hidden">
              <img
                src={thumbUrl(s.thumb)}
                alt={s.title}
                loading="lazy"
                className="aspect-[190/223] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <h2
              className="mt-3 text-xl text-neutral-800 transition-colors group-hover:text-black"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              {s.title}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
