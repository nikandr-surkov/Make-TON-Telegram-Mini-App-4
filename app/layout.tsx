"use client";

import "./globals.css";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>TON Connect</title>
      </head>
      <body>
        <TonConnectUIProvider manifestUrl="https://olive-ready-swordfish-983.mypinata.cloud/ipfs/bafkreibfqzycaxylzw6t2bqguzgjc4aqkddcp6ug2lqfysz26aal63ik3q">
          {children}
        </TonConnectUIProvider>
      </body>
    </html>
  );
}
