"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProviders from "@/components/ReduxProviders";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" suppressHydrationWarning={true}>
      <head>
          <title>Portfolio</title>
          <meta name="description" content="Portfolio"/>
          <meta name="keywords" content="Portfolio"/>
          <meta name="author" content="Portfolio"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <link rel="icon" href="/favicon.ico"/>
          <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
      </head>
      <body className={inter.className}>
      <ReduxProviders>
          {children}
      </ReduxProviders>
      </body>
      </html>
  );
}
