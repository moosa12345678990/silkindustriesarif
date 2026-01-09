import React from "react";
import { Metadata } from "next";
import PortfolioDetailsOneMain from "@/pages/portfolio/details/portfolio-details-1-main";


export const metadata: Metadata = {
  title: "Arif Silk Industries - Portfolio Details",
};

const PortfolioDetailsOnePage = () => {
  return (
    <PortfolioDetailsOneMain/>
  );
};

export default PortfolioDetailsOnePage;
