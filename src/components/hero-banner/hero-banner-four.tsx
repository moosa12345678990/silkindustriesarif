'use client';
import React from "react";
import { ArrowBg, RightArrowTwo } from "../svg";
import Link from "next/link";

export default function HeroBannerFour() {
  return (
    <div className="tp-hero-3-area tp-hero-3-ptb fix">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-hero-3-content-box text-center p-relative">
              <div className="tp-hero-3-circle-shape">
                <span></span>
              </div>
              <h4 className="tp-hero-3-title tp_reveal_anim">
                <span className="tp-reveal-line" style={{ color: '#b5d334' }}>
                  {"We're"} Crafting Silk
                </span>
                <span className="tp-reveal-line" style={{ color: '#b5d334' }}>
                  {" "}& Stories Since 1982
                </span>
              </h4>
              <span className="tp-hero-3-category tp_reveal_anim">
                Decades of expertise shaping exceptional fabrics.
              </span>
              <Link 
                className="tp-btn-black-2" 
                href="/contact"
                style={{
                  backgroundColor: '#b5d334',
                  color: '#000',
                  borderColor: '#b5d334'
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
      
      {/* Add custom styles for a cohesive green theme */}
      <style jsx>{`
        .tp-btn-black-2:hover {
          background-color: #9cbb2d !important;
          border-color: #9cbb2d !important;
          transform: translateY(-2px);
          transition: all 0.3s ease;
        }
        
        .tp-hero-3-circle-shape span {
          background: rgba(181, 211, 52, 0.1);
        }
        
        .tp-hero-3-category {
          color: #666;
        }
      `}</style>
    </div>
  );
}