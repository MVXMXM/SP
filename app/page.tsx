import type { Metadata } from "next";
import Link from "next/link";
import { sections, thumbUrl } from "./data";

export const metadata: Metadata = {
  title: "Photography by Sebastian Piras",
};

// Prefer 3 cols when the count divides evenly; otherwise 2 so even
// totals (e.g. 4) don't leave a single orphan on the last row.
const smCols =
  sections.length % 3 === 0 ? "sm:grid-cols-3" : "sm:grid-cols-2";

export default function SebastianHome() {
  return (
    <div>
      <h1
        className="mb-8 text-4xl tracking-wide sm:text-5xl"
        style={{ fontFamily: "var(--font-cormorant), serif" }}
      >
        Photography by Sebastian Piras
      </h1>
      <div className={`grid grid-cols-2 gap-x-6 gap-y-10 ${smCols}`}>
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
