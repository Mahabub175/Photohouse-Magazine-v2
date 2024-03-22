import type { Metadata } from "next";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import ReduxProvider from "@/provider/ReduxProvider";
import NavBar from "@/components/shared/Navbar/NavBar";
import Footer from "@/components/shared/Footer/Footer";
import { useRouter } from "next/router";

export const metadata: Metadata = {
  title: "Photohouse",
  description: "A Magazine Showcasing the Best Photos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <NavBar />
          {children}
          <Footer />
          <Toaster />
        </ReduxProvider>
      </body>
    </html>
  );
}
