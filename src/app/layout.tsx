import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import Jumbotron from "@/components/common/Jumbotron";
import Footer from "@/components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fososo-fe-test",
  description: "xuan-quang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <div className={`w-screen h-auto bg-body`}>
          <BreadCrumb/>
          {children}
        </div>
        <Jumbotron/> 
        <Footer/>
      </body>
    </html>
  );
}
