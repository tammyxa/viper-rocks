import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./dist/css/explorer-1.min.css";
// import "./dist/js/explorer-1.min.js";
import { Nav } from "./(components)/Nav";
import { MobileNav } from "./(components)/MobileNav";
import { Footer } from "./(components)/Footer";
import SessionProvider from "./(components)/SessionProvider/SessionProvider"; //next SessionProvider imported
import { getServerSession } from "next-auth";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <head></head>
      <body>
        <Nav />
        <MobileNav />
        <SessionProvider session={session}>{children}</SessionProvider>
        <Footer />
        {/* <!-- JavaScript --> */}
        <Script
          src="./dist/js/explorer-1.min.js"
          strategy="beforeInteractive"
        />
      </body>
      {/* <!-- JavaScript --> */}
    </html>
  );
}
