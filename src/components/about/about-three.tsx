import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal imports
import shape from '@/assets/img/ceoimg.png';
import { ArrowBg, RightArrowTwo, FirstBracket, FirstBracketTwo } from "../svg";

export default function AboutThree() {
  return (
    <div className="tp-about-3-area pt-120 pb-110 green-about-section">
      <div className="container">
        <div className="row"> 
          <div className="col-xl-11">
            <div className="tp-about-3-title-box">
              <span className="tp-section-subtitle-2 tp_fade_bottom green-subtitle">
                <span>
                  <FirstBracket />
                </span>
                <span className="tp-subtitle-text tp_text_invert green-subtitle-text">
                  Our Journey
                </span>
                <span>
                  <FirstBracketTwo />
                </span>
              </span>
              <h4 className="tp-section-title-90 tp_text_invert tp_fade_bottom green-about-title">
               Everything is possible when you work with us{" "}
                <span className="green-accent">
                  {" "}
                  <br />
                </span>
              </h4>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-4">
            <div className=" text-lg-end">
              <Image 
                src={shape} 
                alt="shape" 
                style={{ 
                  height: "auto",
             
                }} 
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-8">
            <div className="tp-about-3-content">
              <p className="mb-30 tp_fade_bottom green-about-text">
                Founded in 1982 by Mr. Arif, our company is a testament to determination, vision, and innovation in the textile industry. What began as a humble journey of starting as a labourer has grown into Arif Silk Industries, a trusted name known for quality and progress.
              </p>
              <p className="mb-45 tp_fade_bottom green-about-text">
                Today, we operate a state-of-the-art production facility that blends traditional craftsmanship with modern technology. With integrated weaving and knitting capabilities, we deliver premium fabrics that meet global standards, serving both local and international markets.
              </p>
              <Link 
                className="tp-btn-black-2 tp_fade_bottom green-about-btn" 
                href="/about-us"
              >
                Discover Our Story
                <span className="p-relative">
                  <RightArrowTwo />
                  <ArrowBg />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom styles for green theme */}
      <style jsx>{`
        .green-about-section {
          background: linear-gradient(135deg, #f8f9f8 0%, #f0f4eb 100%);
          position: relative;
          overflow: hidden;
        }
        
        .green-about-section::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(181, 211, 52, 0.1) 0%, rgba(181, 211, 52, 0) 70%);
          border-radius: 50%;
          z-index: 0;
        }
        
        .green-about-section::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(181, 211, 52, 0.08) 0%, rgba(181, 211, 52, 0) 70%);
          border-radius: 50%;
          z-index: 0;
        }
        
        .green-about-section > .container {
          position: relative;
          z-index: 1;
        }
        
        .green-subtitle {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(181, 211, 52, 0.1);
          padding: 8px 20px;
          border-radius: 30px;
          margin-bottom: 20px;
        }
        
        .green-subtitle-text {
          color: #b5d334 !important;
          font-weight: 600;
          font-size: 16px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        
        .green-about-title {
          color: #000 !important;
          font-size: 48px;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 40px;
        }
        
        .green-about-title .green-accent {
          color: #b5d334 !important;
          font-weight: 800;
          position: relative;
          display: inline-block;
        }
        
        .green-about-title .green-accent::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #b5d334 0%, rgba(181, 211, 52, 0.3) 100%);
          border-radius: 2px;
        }
        
        .green-about-text {
          color: #444 !important;
          font-size: 18px;
          line-height: 1.8;
          position: relative;
          padding-left: 20px;
          border-left: 3px solid rgba(181, 211, 52, 0.3);
        }
        
        .green-about-text:first-of-type {
          margin-top: 20px;
        }
        
        .green-about-btn {
          background-color: #b5d334 !important;
          color: #000 !important;
          border: 2px solid #b5d334 !important;
          padding: 16px 35px !important;
          font-weight: 700 !important;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 15px;
          border-radius: 8px !important;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease !important;
          position: relative;
          overflow: hidden;
        }
        
        .green-about-btn:hover {
          background-color: #000 !important;
          color: #b5d334 !important;
          border-color: #000 !important;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(181, 211, 52, 0.3);
        }
        
        .green-about-btn::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.2);
          transform: translate(-50%, -50%);
          transition: width 0.6s ease, height 0.6s ease;
        }
        
        .green-about-btn:hover::before {
          width: 300px;
          height: 300px;
        }
        
        .green-about-btn span {
          position: relative;
          z-index: 1;
        }
        
        .green-about-btn span svg {
          transition: transform 0.3s ease;
        }
        
        .green-about-btn:hover span svg {
          transform: translateX(5px);
        }
        
        .tp-about-3-shape img {
          max-width: 100%;
          transition: transform 0.5s ease;
        }
        
        .tp-about-3-shape:hover img {
          transform: rotate(5deg) scale(1.05);
        }
        
        /* Responsive adjustments */
        @media (max-width: 1200px) {
          .green-about-title {
            font-size: 42px;
          }
        }
        
        @media (max-width: 992px) {
          .green-about-title {
            font-size: 36px;
          }
          
          .green-about-text {
            font-size: 16px;
          }
          
          .tp-about-3-shape {
            margin-bottom: 40px;
            text-align: center !important;
          }
        }
        
        @media (max-width: 768px) {
          .green-about-title {
            font-size: 32px;
          }
          
          .green-about-btn {
            padding: 14px 30px !important;
            font-size: 14px;
          }
          
          .green-about-section {
            padding-top: 80px !important;
            padding-bottom: 80px !important;
          }
        }
        
        @media (max-width: 576px) {
          .green-about-title {
            font-size: 28px;
          }
          
          .green-subtitle {
            padding: 6px 15px;
          }
          
          .green-subtitle-text {
            font-size: 14px;
          }
          
          .green-about-text {
            padding-left: 15px;
            font-size: 15px;
          }
        }
      `}</style>
    </div>
  );
}