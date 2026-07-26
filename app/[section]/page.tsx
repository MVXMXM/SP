import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Gallery from "../Gallery";
import { sections } from "../data";

export function generateStaticParams() {
  return sections.map((s) => ({ section: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ section: string }>;
}): Promise<Metadata> {
  const { section } = await params;
  const data = sections.find((s) => s.slug === section);
  if (!data) return {};
  return { title: `${data.title} — Sebastian Piras` };
}

export default async function SectionPage({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  const data = sections.find((s) => s.slug === section);
  if (!data) notFound();

  return (
    <div>
      <h1
        className="mb-8 text-4xl tracking-wide sm:text-5xl"
        style={{ fontFamily: "var(--font-cormorant), serif" }}
      >
        {data.title}
      </h1>
      <Gallery photos={data.photos} />
    </div>
  );
}
