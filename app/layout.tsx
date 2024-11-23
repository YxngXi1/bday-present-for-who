import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Nathan Tsegaye",
  description: "Grade 11 AP Student at John Fraser Secondary School",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
