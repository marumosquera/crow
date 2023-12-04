import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";
import Navbar from "@/components/Navbar/Navbar";

export const metadata: Metadata = {
  title: "Crow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <body>
        <Navbar />
        <div className="mt-20 ">{children}</div>
      </body>
    </html>
  );
}
