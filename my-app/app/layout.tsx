import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";

type Props = {
  children: ReactNode
  params: { locale: string }
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bicycle Store - Dashboard",
  description: "Bicycle store inventory management system",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<Props>) {
  return (
    <html lang={params.locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider>
          <SidebarProvider>
            <AppSidebar />
            <main className="flex-1">
              {children}
            </main>
          </SidebarProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
