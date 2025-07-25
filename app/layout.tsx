import "@/styles/globals.css";
import "@/styles/scss/main.scss";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import Navbar from "@/components/navbar";
import TopBar from "@/components/topbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget/WhatsAppWidget";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: "AGGFM",
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    // { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col h-screen">
            <TopBar />
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <WhatsAppWidget />
        </Providers>
      </body>
    </html>
  );
}
