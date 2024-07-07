import "@radix-ui/themes/styles.css";
import "./theme-config.css";
import "./globals.css";
import { Inter } from "next/font/google";
import { Theme } from "@radix-ui/themes";
import NavBar from "./NavBar";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Theme appearance="light" accentColor="crimson" radius="large">
          <NavBar />
          <main className="p-5">{children}</main>
        </Theme>
      </body>
    </html>
  );
}
