import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/dist/css/explorer-1.min.css";
import { Footer, Nav } from "@/modules";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <Nav />
        <div>{children}</div>
        <Footer />
        {/* <!-- JavaScript -->
        <script src="explorer-1.min.js" async></script> */}
      </body>
    </html>
  );
}
