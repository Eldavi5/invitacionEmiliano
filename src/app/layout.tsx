import type { Metadata } from "next";
import { Dancing_Script, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body"
});

const displayFont = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "700"]
});

export const metadata: Metadata = {
  title: "Bautizo y Primer Año | Emiliano",
  description: "Invitación digital interactiva para el bautizo y primer cumpleaños de Emiliano con temática de Un Jefe en Pañales (The Boss Baby).",
  metadataBase: new URL("http://localhost:3000")
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>{children}</body>
    </html>
  );
}
