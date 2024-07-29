import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import GlobalContextProvider from "@/context/GlobalContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Douglas sales - Desenvolvedor",
  description: "Desenvolvedor Front-end & mobile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </body>
    </html>
  );
}
