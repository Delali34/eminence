import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eminence Lead International",
  description:
    " EMINENCE LEAD INTERNATIONAL is a registered NGO in Ghana,established in August 2023 with a mission to ignite transformative change in Africa and beyond.",
  logo: "../public/EMINENCE.jpg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
