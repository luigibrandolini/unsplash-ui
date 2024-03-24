import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Unsplash UI Demo ",
  description:
    "Created by Luigi Brandolini for 'Dipartimento della Trasformazione Digitale'",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body>
        <Navbar />
        <br />
        <main className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">{children}</main>
      </body>
    </html>
  );
}
