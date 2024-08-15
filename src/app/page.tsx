import RoastForm from "@/components/RoastForm";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  return (
    <main className="bg-gray-200 min-h-screen flex flex-col">
      <header className="flex-grow flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-center mb-8">
          Tiktok Roasting
        </h1>
        <p className="text-lg text-center mb-6">
          Jangan dicoba kalo gamau sakit hati!
        </p>
        <RoastForm />
      </header>
      <footer className="text-center m-8 p-4">
        <p>
          Developed by{" "}
          <a
            href="https://www.tiktok.com/@yogardkaa"
            className="text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            @yogardkaa
          </a>
        </p>
      </footer>
      <Analytics />
      <SpeedInsights />
    </main>
  );
}