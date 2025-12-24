import type { Metadata } from "next";
import { Nunito_Sans, Chivo_Mono } from "next/font/google";
import "./globals.css";
import { TRPCReactProvider } from "@/trpc/client";

const nunitoSans = Nunito_Sans({
  variable: "--font-overpass-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const chivoMono = Chivo_Mono({
  variable: "--font-overpass-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Treeflow",
  description:
    "Treeflow is a platform for syncing data between different systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.variable} ${chivoMono.variable} antialiased`}
      >
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
