import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Improves font loading
});

export const metadata = {
  title: "Eminence Lead International | Transformative Change in Africa",
  description:
    "EMINENCE LEAD INTERNATIONAL is a registered NGO in Ghana with a mission to ignite transformative change in Africa and beyond. Join our initiatives in education, healthcare, and community development.",
  metadataBase: new URL("https://eminencelead.org"), // Replace with your actual domain
  openGraph: {
    title: "Eminence Lead International | Transformative Change in Africa",
    description:
      "EMINENCE LEAD INTERNATIONAL is a registered NGO in Ghana with a mission to ignite transformative change in Africa and beyond.",
    url: "https://eminencelead.org", // Replace with your actual domain
    siteName: "Eminence Lead International",
    images: [
      {
        url: "/EMINECE LOGO22.png", // Update path to your logo
        width: 1200,
        height: 630,
        alt: "Eminence Lead International logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eminence Lead International | Transformative Change in Africa",
    description:
      "EMINENCE LEAD INTERNATIONAL is a registered NGO in Ghana with a mission to ignite transformative change in Africa and beyond.",
    images: ["/EMINECE LOGO22.png"], // Update path to your logo
  },
  alternates: {
    canonical: "https://eminencelead.org", // Replace with your actual domain
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://eminencelead.org" />{" "}
        {/* Replace with your actual domain */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
