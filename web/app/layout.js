"use client";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { CartContext } from "./_context/CartContext";
import { useState } from "react";

import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

import { ClerkProvider } from "@clerk/nextjs";

// export const metadata = {
//   title: "CalitosBoss",
//   description: "Find or sell your old/new best tennis rackets",
// };

export default function RootLayout({ children }) {
  const [cart, setCart] = useState([]);

  return (
    <ClerkProvider>
      <CartContext.Provider value={{ cart, setCart }}>
        <html lang="en">
          <body className={inter.className}>
            <Header />
            {children}
            <Footer />
          </body>
        </html>
      </CartContext.Provider>
    </ClerkProvider>
  );
}
