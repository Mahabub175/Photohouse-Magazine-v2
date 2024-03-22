"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "PhotoHouse Magazine",
//   description: "A Magazine Showcasing the Best Photos",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body className={inter.className}>{children}</body>
        <Toaster />
      </Provider>
    </html>
  );
}
