import type { Metadata } from "next";
// @ts-expect-error - CSS side-effect import
import "@/styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
        <Header />
        <div className="page-content">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
