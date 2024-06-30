import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import 'bootstrap/dist/css/bootstrap.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Электронный журнал",
  description: "Это неофицильный клиент электронного журнала Кировской области",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className} data-bs-theme="dark">
        <div className="container">
          <Header />
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
