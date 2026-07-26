import type { Metadata } from "next";
import { clients, logoUrl } from "../data";

export const metadata: Metadata = {
  title: "Clients of Sebastian Piras",
};

export default function ClientsPage() {
  return (
    <div>
      <h1
        className="mb-8 text-4xl tracking-wide sm:text-5xl"
        style={{ fontFamily: "var(--font-cormorant), serif" }}
      >
        Clients of Sebastian Piras
      </h1>
      <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
        {clients.map((client) => (
          <div
            key={client.uri}
            className="flex aspect-square items-center justify-center p-4"
          >
            <img
              src={logoUrl(client.uri)}
              alt={client.title}
              title={client.title}
              loading="lazy"
              className="max-h-full max-w-full object-contain opacity-80 transition-opacity hover:opacity-100"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
