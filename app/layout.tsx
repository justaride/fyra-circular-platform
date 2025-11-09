import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fyra Circular Platform | Swedish Hotel Renovation Intelligence",
  description: "Internal knowledge platform for Fyra - Swedish circular economy hotel renovation resources, suppliers, consultants, and regulatory guidance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-gray-900 text-white py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-gray-400">
              Fyra Circular Platform | Nordic Circular Construction Partnership | Internal Use Only
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Data compiled from NCC Research Project 2025
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
