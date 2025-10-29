import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./context/CartContext";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Dark Cotton - Authentic Handmade Bags",
  description: "Discover vintage-inspired, handcrafted bags made from premium materials. Each piece tells a unique story.",
  keywords: ["handmade bags", "vintage bags", "canvas bags", "leather bags", "cotton bags"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="bg-white text-brand-charcoal font-body antialiased">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
