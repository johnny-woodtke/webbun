import "globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

import { cn } from "@webbun/lib";
import "@webbun/ui/globals.css";

import Providers from "@/components/providers";
import { ModeToggle } from "@/components/theme-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

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
      <body className={cn(geistSans.variable, geistMono.variable)}>
        <Providers>
          <div className="p-4">
            <div className="flex h-12 items-center justify-end">
              <ModeToggle />
            </div>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
