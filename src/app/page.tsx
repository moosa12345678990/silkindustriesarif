import { Metadata } from "next";
import HomeOnePage from "./(homes)/home-1/page";
import HomeFourMain from "@/pages/homes/home-4";
export const metadata: Metadata = {
  title: "Arif Textile - Excellence in Fabric Craftsmanship Since 1982",
};

export default function Home() {
  return (
    <>
      <HomeFourMain />
    </>
  );
}
