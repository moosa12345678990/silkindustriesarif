"use client";
import { gsap } from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderFour from "@/layouts/headers/header-four";
import FooterTwo from "@/layouts/footers/footer-two";
import Social from "@/components/social/social";
import { Dots } from "@/components/svg";
import polyster from "@/assets/img/whitesatin.jpg";
// animation
import {charAnimation,titleAnimation} from "@/utils/title-animation";
import Link from "next/link";
import FooterOne from "@/layouts/footers/footer-one";

const PortfolioDetailsTwoMain = () => {
  
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderFour />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* fabric product showcase area */}
            <div className="fabric-product-showcase-area pt-80">
               <div className="container container-1430">
                  {/* Single Product Image */}
                  <div className="row">
                     <div className="col-xl-12  pt-80" >
                        <div className="fabric-product-image-wrap">
                           <div className="fabric-product-image ">
                             <img 
                               src={polyster.src || "/assets/img/whitesatin.jpg"} 
                               alt="White Poly Satin Fabric"
                               style={{ 
                                 width: '100%', 
                                 height: '100%', 
                                 objectFit: 'cover',
                                 display: 'block'
                               }}
                               loading="lazy"
                             />
                           </div>
                           
                           {/* Product Badge Overlay */}
                           <div className="fabric-product-badge">
                             <span className="badge-text">Premium Fabric</span>
                             <span className="badge-subtext">100% Polyester</span>
                           </div>
                        </div>
                     </div>
                  </div>
                  
                  {/* Product Information Section */}
                  <div className="row">
                     <div className="col-xl-12">
                        <div className="fabric-product-info-style">
                           <div className="row align-items-start">
                              <div className="col-xl-6">
                                 <div className="fabric-product-title-box pb-50">
                                    <span className="fabric-product-subtitle">
                                      <i className="fabric-icon">🎯</i>
                                      Premium Quality
                                    </span>
                                    <h1 className="fabric-product-title">Poly Satin (100% Polyester)</h1>
                                    <div className="product-rating mb-30">
                                      <div className="stars">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star-half-stroke"></i>
                                      </div>
                                      <span className="rating-text">4.7/5 based on 128 reviews</span>
                                    </div>
                                    <p className="fabric-product-description">
                                      Poly Satin is a luxurious, smooth, and glossy polyester-based fabric 
                                      widely used in home textiles, fashion apparel, and decorative purposes. 
                                      Known for its elegant sheen and durability, it offers a premium look 
                                      and feel at an affordable price point. Our Poly Satin undergoes rigorous 
                                      quality checks to ensure consistent texture and color vibrancy.
                                    </p>
                                    
                                    {/* Key Features */}
                                    <div className="fabric-features mt-40">
                                      <h5 className="features-title">
                                        <i className="fa-solid fa-star" style={{color: '#b5d334', marginRight: '10px'}}></i>
                                        Key Features:
                                      </h5>
                                      <ul className="features-list">
                                        <li><i className="fa-solid fa-check"></i> Luxurious silky feel with elegant drape</li>
                                        <li><i className="fa-solid fa-check"></i> High color retention and vibrancy</li>
                                        <li><i className="fa-solid fa-check"></i> Wrinkle and shrink resistant</li>
                                        <li><i className="fa-solid fa-check"></i> Easy to care for and maintain</li>
                                        <li><i className="fa-solid fa-check"></i> Suitable for various applications</li>
                                        <li><i className="fa-solid fa-check"></i> Excellent durability and longevity</li>
                                      </ul>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-xl-6">
                                 <div className="fabric-product-specifications">
                                    {/* Technical Specifications Table */}
                                    <div className="specifications-table mb-40">
                                       <h4 className="specifications-title">
                                         <i className="fa-solid fa-clipboard-list" style={{color: '#b5d334', marginRight: '10px'}}></i>
                                         Technical Specifications
                                       </h4>
                                       <div className="table-responsive">
                                          <table className="spec-table">
                                            <thead>
                                              <tr>
                                                <th>Specification</th>
                                                <th>Details</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <td>Fabric Type</td>
                                                <td><strong>Poly Satin (100% Polyester)</strong></td>
                                              </tr>
                                              <tr>
                                                <td>GSM Range</td>
                                                <td><span className="spec-value">80–120 GSM</span></td>
                                              </tr>
                                              <tr>
                                                <td>Texture</td>
                                                <td>Smooth, glossy, soft</td>
                                              </tr>
                                              <tr>
                                                <td>Width Options</td>
                                                <td>54" / 58" / 60" (Customizable)</td>
                                              </tr>
                                              <tr>
                                                <td>Weight Category</td>
                                                <td>Lightweight</td>
                                              </tr>
                                              <tr>
                                                <td>Dyeing Quality</td>
                                                <td>High-quality colorfast dye</td>
                                              </tr>
                                              <tr>
                                                <td>Fabric Feel</td>
                                                <td>Silky with a flowing drape</td>
                                              </tr>
                                              <tr>
                                                <td>Color Options</td>
                                                <td><span className="">Wide range available</span></td>
                                              </tr>
                                              <tr>
                                                <td>Minimum Order</td>
                                                <td><strong>1000 Meters</strong></td>
                                              </tr>
                                            </tbody>
                                          </table>
                                       </div>
                                    </div>
                                    
                                    {/* CTA Button */}
                                    <div className="product-cta mt-40">
                                      <a href="/contact" className="cta-button">
                                        <i className="fa-solid fa-envelope" style={{marginRight: '10px'}}></i>
                                        Request Sample & Quote
                                      </a>
                                      <a href="tel:+922132480006" className="cta-button secondary">
                                        <i className="fa-solid fa-phone" style={{marginRight: '10px'}}></i>
                                        Call for Inquiry
                                      </a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           
                           {/* Additional Information */}
                           <div className="fabric-additional-info mt-60">
                             <div className="row">
                               <div className="col-xl-12">
                                 <h4 className="additional-title">
                                   <i className="fa-solid fa-th-large" style={{color: '#b5d334', marginRight: '15px'}}></i>
                                   Applications & Uses
                                 </h4>
                                 <p className="additional-subtitle">Discover the versatility of our premium Poly Satin fabric</p>
                                 <div className="applications-grid">
                                   <div className="application-item">
                                     <div className="app-icon">🛏️</div>
                                     <h5>Bedding & Linens</h5>
                                     <p>Bed sheets, pillowcases, duvet covers, bed skirts</p>
                                     <span className="app-count">4+ products</span>
                                   </div>
                                   <div className="application-item">
                                     <div className="app-icon">👗</div>
                                     <h5>Fashion Apparel</h5>
                                     <p>Evening wear, dresses, scarves, blouses, accessories</p>
                                     <span className="app-count">10+ products</span>
                                   </div>
                                   <div className="application-item">
                                     <div className="app-icon">🏠</div>
                                     <h5>Home Decor</h5>
                                     <p>Curtains, upholstery, cushion covers, table runners</p>
                                     <span className="app-count">8+ products</span>
                                   </div>
                                   <div className="application-item">
                                     <div className="app-icon">🎁</div>
                                     <h5>Gift & Packaging</h5>
                                     <p>Gift wrapping, luxury packaging, ribbons, bows</p>
                                     <span className="app-count">6+ products</span>
                                   </div>
                                 </div>
                               </div>
                             </div>
                           </div>
                           
                           {/* Quality Assurance Section */}
                           <div className="quality-assurance mt-60">
                             <div className="row">
                               <div className="col-xl-12">
                                 <h4 className="quality-title">
                                   <i className="fa-solid fa-shield-alt" style={{color: '#b5d334', marginRight: '15px'}}></i>
                                   Quality Assurance
                                 </h4>
                                 <p className="quality-subtitle">Every meter meets our highest standards</p>
                                 <div className="quality-grid">
                                   <div className="quality-item">
                                     <div className="quality-icon">✅</div>
                                     <h5>Tested & Certified</h5>
                                     <p>Rigorous quality testing for durability and colorfastness</p>
                                   </div>
                                   <div className="quality-item">
                                     <div className="quality-icon">🏆</div>
                                     <h5>Premium Grade</h5>
                                     <p>Only highest quality materials used in production</p>
                                   </div>
                                   <div className="quality-item">
                                     <div className="quality-icon">🌿</div>
                                     <h5>Eco-Friendly</h5>
                                     <p>Manufactured with sustainable practices</p>
                                   </div>
                                   <div className="quality-item">
                                     <div className="quality-icon">⚡</div>
                                     <h5>Quick Delivery</h5>
                                     <p>Reliable and timely delivery worldwide</p>
                                   </div>
                                 </div>
                               </div>
                             </div>
                           </div>
                           
                           {/* Navigation */}
                           {/* <div className="fabric-product-navigation d-flex justify-content-between align-items-center mt-60">
                              <Link className="product-nav-prev" href="/portfolio-details-1">
                                 <i className="fa-sharp fa-regular fa-arrow-left"></i>
                                 <span>Shafoon Fabric</span>
                              </Link>
                              <Link href="/products" className="back-to-products">
                                 <span>
                                    <Dots/>
                                 </span>
                                 <span className="nav-text">View All Products</span>
                              </Link>
                              <Link className="product-nav-next" href="/portfolio-details-3">
                                 <span>Warp Knit Fabric</span>
                                 <i className="fa-sharp fa-regular fa-arrow-right"></i>
                              </Link>
                           </div> */}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* fabric product showcase area */}
          </main>

          {/* footer area */}
          <FooterOne />
          {/* footer area */}
        </div>
      </div>
      
      {/* Custom Styles */}
      <style jsx>{`
        .fabric-product-showcase-area {
          background: #f9fafb;
          padding-top: 180px; /* Increased top padding for desktop */
        }
        
        /* Single Product Image Styles */
        .fabric-product-image-wrap {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
          margin-bottom: 60px;
        }
        
        .fabric-product-image {
          position: relative;
          height: 600px;
        }
        
        .fabric-product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .fabric-product-badge {
          position: absolute;
          top: 30px;
          left: 30px;
          z-index: 10;
          background: rgba(181, 211, 52, 0.95);
          padding: 15px 25px;
          border-radius: 10px;
          color: #000;
          font-weight: 700;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: 0 8px 25px rgba(181, 211, 52, 0.3);
        }
        
        .badge-text {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 5px;
        }
        
        .badge-subtext {
          font-size: 14px;
          opacity: 0.9;
        }
        
        /* Product Information Styles */
        .fabric-product-info-style {
          padding: 60px 0;
        }
        
        .fabric-product-subtitle {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #b5d334;
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 20px;
          padding: 10px 25px;
          background: rgba(181, 211, 52, 0.1);
          border-radius: 30px;
        }
        
        .fabric-product-title {
          font-size: 52px;
          font-weight: 800;
          color: #1f2937;
          margin-bottom: 20px;
          line-height: 1.2;
        }
        
        .product-rating {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 25px;
        }
        
        .stars {
          display: flex;
          gap: 5px;
        }
        
        .stars i {
          color: #b5d334;
          font-size: 18px;
        }
        
        .rating-text {
          color: #6b7280;
          font-size: 14px;
        }
        
        .fabric-product-description {
          color: #6b7280;
          font-size: 18px;
          line-height: 1.8;
          margin-bottom: 30px;
        }
        
        /* Features List */
        .fabric-features {
          background: white;
          padding: 35px;
          border-radius: 16px;
          border-left: 5px solid #b5d334;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
        }
        
        .features-title {
          color: #000;
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 25px;
          display: flex;
          align-items: center;
        }
        
        .features-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
        }
        
        .features-list li {
          color: #4b5563;
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 16px;
          padding: 10px 0;
        }
        
        .features-list li i {
          color: #b5d334;
          font-size: 16px;
          background: rgba(181, 211, 52, 0.1);
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        /* Specifications Table */
        .specifications-table {
          background: white;
          padding: 40px;
          border-radius: 16px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
        }
        
        .specifications-title {
          color: #000;
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 30px;
          padding-bottom: 20px;
          border-bottom: 3px solid #f0f0f0;
          position: relative;
          display: flex;
          align-items: center;
        }
        
        .spec-table {
          width: 100%;
          border-collapse: collapse;
        }
        
        .spec-table th {
          background: rgba(181, 211, 52, 0.1);
          color: #000;
          font-weight: 700;
          padding: 18px;
          text-align: left;
          border: 1px solid #e5e7eb;
          font-size: 16px;
        }
        
        .spec-table td {
          padding: 18px;
          border: 1px solid #e5e7eb;
          color: #4b5563;
          font-size: 16px;
        }
        
        .spec-value {
          color: #b5d334;
          font-weight: 600;
          background: rgba(181, 211, 52, 0.1);
          padding: 4px 12px;
          border-radius: 20px;
        }
        
        .color-badge {
          background: linear-gradient(45deg, #b5d334, #8bad28);
          color: white;
          padding: 6px 15px;
          border-radius: 20px;
          font-weight: 600;
        }
        
        .spec-table tr:hover {
          background: rgba(181, 211, 52, 0.05);
        }
        
        /* CTA Buttons */
        .product-cta {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-top: 30px;
        }
        
        .cta-button {
          background: #b5d334;
          color: #000;
          padding: 18px 25px;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 700;
          font-size: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          border: 2px solid #b5d334;
        }
        
        .cta-button:hover {
          background: #000;
          color: #b5d334;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(181, 211, 52, 0.3);
        }
        
        .cta-button.secondary {
          background: white;
          color: #000;
          border: 2px solid #000;
        }
        
        .cta-button.secondary:hover {
          background: #000;
          color: white;
        }
        
        /* Applications Grid */
        .applications-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }
        
        .application-item {
          background: white;
          padding: 35px 30px;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
          transition: all 0.3s ease;
          border: 2px solid transparent;
          position: relative;
          overflow: hidden;
        }
        
        .application-item:before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: #b5d334;
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }
        
        .application-item:hover:before {
          transform: scaleX(1);
        }
        
        .application-item:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
        }
        
        .app-icon {
          font-size: 48px;
          margin-bottom: 20px;
        }
        
        .application-item h5 {
          color: #000;
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 15px;
        }
        
        .application-item p {
          color: #6b7280;
          font-size: 15px;
          line-height: 1.6;
          margin-bottom: 15px;
        }
        
        .app-count {
          display: inline-block;
          background: rgba(181, 211, 52, 0.1);
          color: #b5d334;
          padding: 6px 15px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
        }
        
        /* Additional Titles */
        .additional-title {
          color: #000;
          font-size: 36px;
          font-weight: 800;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
        }
        
        .additional-subtitle,
        .quality-subtitle {
          color: #6b7280;
          font-size: 18px;
          margin-bottom: 40px;
          max-width: 700px;
        }
        
        /* Quality Assurance */
        .quality-assurance {
          background: white;
          padding: 50px;
          border-radius: 16px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
        }
        
        .quality-title {
          color: #000;
          font-size: 36px;
          font-weight: 800;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
        }
        
        .quality-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }
        
        .quality-item {
          text-align: center;
          padding: 25px;
          background: #f9fafb;
          border-radius: 12px;
          transition: all 0.3s ease;
        }
        
        .quality-item:hover {
          background: white;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
        }
        
        .quality-icon {
          font-size: 40px;
          margin-bottom: 20px;
        }
        
        .quality-item h5 {
          color: #000;
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 10px;
        }
        
        .quality-item p {
          color: #6b7280;
          font-size: 15px;
          line-height: 1.6;
          margin: 0;
        }
        
        /* Navigation Styles */
        .fabric-product-navigation {
          padding: 40px 0;
          border-top: 2px solid #f0f0f0;
          border-bottom: 2px solid #f0f0f0;
        }
        
        .product-nav-prev,
        .product-nav-next,
        .back-to-products {
          display: flex;
          align-items: center;
          gap: 15px;
          color: #4b5563;
          text-decoration: none;
          font-weight: 600;
          font-size: 16px;
          transition: all 0.3s ease;
          padding: 15px 30px;
          border-radius: 12px;
          background: white;
          border: 2px solid #f0f0f0;
        }
        
        .product-nav-prev:hover,
        .product-nav-next:hover,
        .back-to-products:hover {
          color: #b5d334;
          background: rgba(181, 211, 52, 0.05);
          border-color: #b5d334;
          transform: translateY(-3px);
        }
        
        .nav-text {
          margin-left: 10px;
        }
        
        /* Responsive Styles */
        @media (max-width: 1200px) {
          .fabric-product-image {
            height: 500px;
          }
          
          .fabric-product-title {
            font-size: 42px;
          }
          
          .features-list {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width: 992px) {
          .fabric-product-showcase-area {
            padding-top: 150px !important;
          }
          
          .fabric-product-image {
            height: 450px;
          }
          
          .fabric-product-title {
            font-size: 36px;
          }
          
          .applications-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .product-cta {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width: 768px) {
          .fabric-product-showcase-area {
            padding-top: 120px !important;
          }
          
          .fabric-product-image {
            height: 400px;
          }
          
          .fabric-product-title {
            font-size: 32px;
          }
          
          .additional-title,
          .quality-title {
            font-size: 28px;
          }
          
          .applications-grid {
            grid-template-columns: 1fr;
          }
          
          .fabric-product-navigation {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }
          
          .specifications-table,
          .fabric-features,
          .quality-assurance {
            padding: 25px;
          }
        }
        
        @media (max-width: 576px) {
          .fabric-product-showcase-area {
            padding-top: 100px !important;
          }
          
          .fabric-product-image {
            height: 350px;
          }
          
          .fabric-product-title {
            font-size: 28px;
          }
          
          .additional-title,
          .quality-title {
            font-size: 24px;
          }
          
          .fabric-product-badge {
            padding: 10px 18px;
          }
          
          .badge-text {
            font-size: 16px;
          }
          
          .spec-table th,
          .spec-table td {
            padding: 12px;
            font-size: 14px;
          }
        }
        
        @media (max-width: 400px) {
          .fabric-product-showcase-area {
            padding-top: 80px !important;
          }
          
          .fabric-product-image {
            height: 300px;
          }
          
          .fabric-product-title {
            font-size: 24px;
          }
          
          .additional-title,
          .quality-title {
            font-size: 20px;
          }
        }
      `}</style>
    </Wrapper>
  );
};

export default PortfolioDetailsTwoMain;