import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "InvoiceAuto – Auto-generate invoices from time tracking",
  description:
    "Connect Toggl, Harvest, or Clockify and automatically generate invoices, send payment reminders, and track payments. Built for freelancers and consultants."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="8b37bdc0-eed9-4c68-a9c4-e8da6577deda"
        />
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
