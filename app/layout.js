import { Inter } from "next/font/google";
import NavMenu from "@/components/NavMenu";
import "./globals.css";
import AuthProvider from "./AuthProvider";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Social",
  description: "Mini social app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.ico" />
        </head>
        <body className={inter.className}>
          <NavMenu />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
