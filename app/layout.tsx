import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthContextProvider } from "./context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Applicant-Tracking-System",
  description: "United we stand divided we fall",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <header>
            <nav>
            </nav>
          </header>
          <AuthContextProvider>
          {children}
          </AuthContextProvider>
        </main>
      </body>
    </html>
  );
}
