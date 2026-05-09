import type { Metadata } from "next";
// @ts-expect-error - CSS side-effect import
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "TaskFlow | Página Inicial",
  description: "Seu gerenciador de tarefas online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
