import type { Metadata } from "next";
import { contact } from "../data";

export const metadata: Metadata = {
  title: "Contact Sebastian Piras",
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl">
      <h1
        className="mb-8 text-4xl tracking-wide sm:text-5xl"
        style={{ fontFamily: "var(--font-cormorant), serif" }}
      >
        Contact Sebastian Piras
      </h1>
      <p className="text-[15px] leading-relaxed text-neutral-700">
        {contact.intro}
        <a
          href={`mailto:${contact.email}`}
          className="underline underline-offset-4 hover:text-black"
        >
          {contact.email}
        </a>
        .
      </p>
      <p className="mt-10 text-[15px] leading-relaxed text-neutral-700">
        {contact.redux.prefix}
        <a
          href={contact.redux.url}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-black"
        >
          {contact.redux.linkText}
        </a>
        .
      </p>
    </div>
  );
}
