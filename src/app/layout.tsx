import type { Metadata } from "next";
import { Poppins, Montserrat, Syne, Aladin, Marcellus } from "next/font/google";
import { VideoProvider } from "@/provider/VideoProvider";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import "swiper/css/bundle";
import "./globals.scss";

// Local font
const gellery = localFont({
  src: [
    { path: "../../public/assets/fonts/gallerymodern-webfont.ttf", weight: "400", style: "normal" },
    { path: "../../public/assets/fonts/gallerymodern-webfont.woff", weight: "400", style: "normal" },
    { path: "../../public/assets/fonts/gallerymodern-webfont.woff2", weight: "400", style: "normal" },
  ],
  variable: "--tp-ff-gallery",
});

// Google fonts
const aladin = Aladin({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--tp-ff-aladin",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--tp-ff-poppins",
});

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--tp-ff-montserrat",
});

const syne_body = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-body",
});

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

// Metadata
export const metadata: Metadata = {
  title: "Arif Textile",
  description: "Decades of expertise shaping exceptional fabrics.",
};

// Root layout
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        id="body"
        className={`${gellery.variable} ${aladin.variable} ${syne_body.variable} ${syne_heading.variable} ${syne_p.variable} ${syne.variable} ${marcellus.variable} ${poppins.variable} ${montserrat.variable}`}
      >
        <ThemeProvider defaultTheme="light">
          <VideoProvider>{children}</VideoProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
