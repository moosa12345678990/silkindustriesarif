import type { Metadata } from "next";
import {
  Poppins,
  Montserrat,
  Syne,
  Aladin,
  Marcellus,
} from "next/font/google";
import { VideoProvider } from "@/provider/VideoProvider";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import "swiper/css/bundle";
import "./globals.scss";

const gellery = localFont({
  src: [
    {
      path: "../../public/assets/fonts/gallerymodern-webfont.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/gallerymodern-webfont.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/gallerymodern-webfont.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--tp-ff-gallery",
});

const aladin = Aladin({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--tp-ff-aladin",
});

// Poppins for headings - clean, modern, professional
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--tp-ff-poppins",
});

// Montserrat for subheadings - elegant, versatile
const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--tp-ff-montserrat",
});

// Keep existing fonts for body text
const syne_body = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-body",
});

// Use Montserrat for headings instead of Syne
const syne_heading = Montserrat({
  weight: ["600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--tp-ff-heading",
});

const syne_p = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-p",
});

const syne = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-syne",
});

const marcellus = Marcellus({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--tp-ff-marcellus",
});

export const metadata: Metadata = {
  title: "Arif Textile",
  description: "Decades of expertise shaping exceptional fabrics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        id="body"
        suppressHydrationWarning={true}
        className={`${gellery.variable} ${aladin.variable}
         ${syne_body.variable} ${syne_heading.variable} ${syne_p.variable}
          ${syne.variable} ${marcellus.variable} ${poppins.variable} ${montserrat.variable}`}
      >
        <ThemeProvider defaultTheme="light">
          <VideoProvider>
            {children}
          </VideoProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}