import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiz POO — ENADE",
  description:
    "Quiz de Programação Orientada a Objetos com questões do ENADE (2005–2023).",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif" }}>{children}</body>
    </html>
  );
}
