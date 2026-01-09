import React from "react";
import { ArrowBg, RightArrowTwo } from "../svg";
import Link from "next/link";
import bg from "@/assets/img/sa.png";

export default function HeroBannerFour() {
  return (
    <div
      className="tp-hero-3-area tp-hero-3-ptb fix"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      {/* Dark overlay for better text readability */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(135, 137, 134, 0.73)", // premium textile overlay
          zIndex: 1,
        }}
      ></div>

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-hero-3-content-box text-center p-relative">
              <h4 className="tp-hero-3-title tp_reveal_anim">
                <span className="tp-reveal-line" style={{ color: "#b5d334" }}>
                  {"We're"} Crafting Silk
                </span>
                <span className="tp-reveal-line" style={{ color: "#b5d334" }}>
                  {" "}& Stories Since 1982
                </span>
              </h4>

              <span
                className="tp-hero-3-category tp_reveal_anim"
                style={{ color: "#f1f1f1" }}
              >
                Decades of expertise shaping exceptional fabrics.
              </span>

              <Link
                className="tp-btn-black-2"
                href="/contact"
                style={{
                  backgroundColor: "#b5d334",
                  color: "#000",
                  borderColor: "#b5d334",
                }}
              >
                Say Hello{" "}
                <span className="p-relative">
                  <RightArrowTwo />
                  <ArrowBg />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
