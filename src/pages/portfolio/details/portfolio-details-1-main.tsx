"use client";
import { gsap } from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import FooterTwo from "@/layouts/footers/footer-two";
import Social from "@/components/social/social";
import { Dots } from "@/components/svg";
import warpnit from "@/assets/img/warp.jpg";
import Link from "next/link";
// animation
import { charAnimation, titleAnimation } from "@/utils/title-animation";
import HeaderFour from "@/layouts/headers/header-four";
import FooterOne from "@/layouts/footers/footer-one";

const PortfolioDetailsOneMain = () => {
  
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
            <div className="fabric-product-showcase-area">
               <div className="container container-1430">
                  {/* Single Product Image */}
                  <div className="row">
                     <div className="col-xl-12">
                        <div className="fabric-product-image-wrap">
                           <div className="fabric-product-image">
                             <img 
                               src={warpnit.src || "/assets/img/warp.jpg"} 
                               alt="Warp Knit Fabric"
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
                             <span className="badge-subtext">Warp Knit</span>
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
                                      <i className="fabric-icon">🧶</i>
                                      Stretch & Comfort
                                    </span>
                                    <h1 className="fabric-product-title">Warp Knit Fabric</h1>
                                    <div className="product-rating mb-30">
                                      <div className="stars">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                      </div>
                                      <span className="rating-text">4.9/5 based on 142 reviews</span>
                                    </div>
                                    <p className="fabric-product-description">
                                      Warp Knit Fabric is a specialized textile known for its excellent stretch 
                                      properties, lightweight structure, and smooth finish. Perfect for fitted 
                                      bedding and applications requiring elasticity, this fabric combines comfort 
                                      with durability for superior performance in various textile applications.
                                    </p>
                                    
                                    {/* Key Features */}
                                    <div className="fabric-features mt-40">
                                      <h5 className="features-title">
                                        <i className="fa-solid fa-star" style={{color: '#b5d334', marginRight: '10px'}}></i>
                                        Key Features:
                                      </h5>
                                      <ul className="features-list">
                                        <li><i className="fa-solid fa-check"></i> Excellent stretch and recovery</li>
                                        <li><i className="fa-solid fa-check"></i> Smooth, non-creasing surface</li>
                                        <li><i className="fa-solid fa-check"></i> Very lightweight and breathable</li>
                                        <li><i className="fa-solid fa-check"></i> Perfect fit for bedding applications</li>
                                        <li><i className="fa-solid fa-check"></i> Durable and long-lasting</li>
                                        <li><i className="fa-solid fa-check"></i> Easy care and maintenance</li>
                                      </ul>
                                    </div>
                                    
                                    {/* Stretch Options */}
                                    <div className="stretch-options mt-40">
                                      <h5 className="stretch-title">
                                        <i className="fa-solid fa-expand-alt" style={{color: '#b5d334', marginRight: '10px'}}></i>
                                        Stretch Options Available:
                                      </h5>
                                      <div className="stretch-cards">
                                        <div className="stretch-card one-way">
                                          <h6>One-Way Stretch</h6>
                                          <div className="stretch-percentage">2–4%</div>
                                          <p>Spandex Content</p>
                                          <span className="stretch-desc">Ideal for basic elastic applications</span>
                                        </div>
                                        <div className="stretch-card two-way">
                                          <h6>Two-Way Stretch</h6>
                                          <div className="stretch-percentage">4–8%</div>
                                          <p>Spandex Content</p>
                                          <span className="stretch-desc">Perfect for premium fitted products</span>
                                        </div>
                                      </div>
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
                                                <td><strong>Warp Knit Fabric</strong></td>
                                              </tr>
                                              <tr>
                                                <td>GSM Range</td>
                                                <td><span className="spec-value">70 -100 GSM</span></td>
                                              </tr>
                                              <tr>
                                                <td>Primary Use</td>
                                                <td><span className="use-badge">Fitted Bedding</span></td>
                                              </tr>
                                              <tr>
                                                <td>Best Applications</td>
                                                <td>Fitted bedsheets, elastic sheets, mattress covers</td>
                                              </tr>
                                              <tr>
                                                <td>One-Way Stretch</td>
                                                <td>2–4% Spandex content</td>
                                              </tr>
                                              <tr>
                                                <td>Two-Way Stretch</td>
                                                <td>4–8% Spandex content</td>
                                              </tr>
                                              <tr>
                                                <td>Weight Category</td>
                                                <td>Very lightweight</td>
                                              </tr>
                                              <tr>
                                                <td>Dyeing Quality</td>
                                                <td>High-quality colorfast dye</td>
                                              </tr>
                                              <tr>
                                                <td>Fabric Feel</td>
                                                <td>Smooth, non-creasing feel</td>
                                              </tr>
                                              <tr>
                                                <td>Minimum Order</td>
                                                <td><strong>1200 Meters</strong></td>
                                              </tr>
                                            </tbody>
                                          </table>
                                       </div>
                                    </div>
                                    
                                    {/* Best For Section */}
                                    <div className="best-for-section mb-40">
                                      <h5 className="best-for-title">
                                        <i className="fa-solid fa-bed" style={{color: '#b5d334', marginRight: '10px'}}></i>
                                        Ideal For:
                                      </h5>
                                      <div className="applications-icons">
                                        <div className="app-icon-item">
                                          <div className="app-icon-circle">🛏️</div>
                                          <span>Fitted Bedsheets</span>
                                        </div>
                                        <div className="app-icon-item">
                                          <div className="app-icon-circle">📏</div>
                                          <span>Elastic Sheets</span>
                                        </div>
                                        <div className="app-icon-item">
                                          <div className="app-icon-circle">🛌</div>
                                          <span>Mattress Covers</span>
                                        </div>
                                        <div className="app-icon-item">
                                          <div className="app-icon-circle">👕</div>
                                          <span>Sportswear</span>
                                        </div>
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
                           
                           {/* Applications & Uses */}
                           <div className="fabric-additional-info mt-60">
                             <div className="row">
                               <div className="col-xl-12">
                                 <h4 className="additional-title">
                                   <i className="fa-solid fa-th-large" style={{color: '#b5d334', marginRight: '15px'}}></i>
                                   Applications & Benefits
                                 </h4>
                                 <p className="additional-subtitle">Discover the versatility of Warp Knit fabric across various industries</p>
                                 <div className="applications-grid">
                                   <div className="application-item">
                                     <div className="app-icon">🛏️</div>
                                     <h5>Bedding Industry</h5>
                                     <p>Fitted sheets, mattress protectors, pillow covers with perfect stretch fit</p>
                                     <span className="app-count">15+ products</span>
                                   </div>
                                   <div className="application-item">
                                     <div className="app-icon">👕</div>
                                     <h5>Active Wear</h5>
                                     <p>Sports clothing, yoga wear, athletic apparel requiring flexibility</p>
                                     <span className="app-count">20+ products</span>
                                   </div>
                                   <div className="application-item">
                                     <div className="app-icon">🏥</div>
                                     <h5>Medical Textiles</h5>
                                     <p>Surgical drapes, medical garments, compression bandages</p>
                                     <span className="app-count">8+ products</span>
                                   </div>
                                   <div className="application-item">
                                     <div className="app-icon">👶</div>
                                     <h5>Infant Wear</h5>
                                     <p>Baby clothes, diaper covers, infant bedding with comfort stretch</p>
                                     <span className="app-count">12+ products</span>
                                   </div>
                                 </div>
                               </div>
                             </div>
                           </div>
                           
                           {/* Technical Advantages */}
                           <div className="technical-advantages mt-60">
                             <div className="row">
                               <div className="col-xl-12">
                                 <h4 className="technical-title">
                                   <i className="fa-solid fa-cogs" style={{color: '#b5d334', marginRight: '15px'}}></i>
                                   Technical Advantages
                                 </h4>
                                 <div className="advantages-grid">
                                   <div className="advantage-item">
                                     <div className="advantage-icon">⚡</div>
                                     <h5>Superior Stretch</h5>
                                     <p>Excellent elasticity with memory retention for perfect fit</p>
                                   </div>
                                   <div className="advantage-item">
                                     <div className="advantage-icon">🔄</div>
                                     <h5>Shape Recovery</h5>
                                     <p>Returns to original shape after stretching, maintains form</p>
                                   </div>
                                   <div className="advantage-item">
                                     <div className="advantage-icon">🌬️</div>
                                     <h5>Breathability</h5>
                                     <p>Allows air circulation, prevents moisture buildup</p>
                                   </div>
                                   <div className="advantage-item">
                                     <div className="advantage-icon">⚖️</div>
                                     <h5>Lightweight</h5>
                                     <p>Extremely light yet durable, ideal for layered applications</p>
                                   </div>
                                 </div>
                               </div>
                             </div>
                           </div>
                           
                           {/* Fabric Care Instructions */}
                           <div className="fabric-care mt-60">
                             <div className="row">
                               <div className="col-xl-12">
                                 <h4 className="care-title">
                                   <i className="fa-solid fa-hand-holding-heart" style={{color: '#b5d334', marginRight: '15px'}}></i>
                                   Care & Maintenance
                                 </h4>
                                 <div className="care-instructions">
                                   <div className="care-item">
                                     <i className="fa-solid fa-temperature-low"></i>
                                     <h5>Washing</h5>
                                     <p>Machine wash cold, gentle cycle. Avoid bleach</p>
                                   </div>
                                   <div className="care-item">
                                     <i className="fa-solid fa-tint"></i>
                                     <h5>Drying</h5>
                                     <p>Tumble dry low or air dry. Do not over-dry</p>
                                   </div>
                                   <div className="care-item">
                                     <i className="fa-solid fa-tshirt"></i>
                                     <h5>Ironing</h5>
                                     <p>Low heat ironing if needed. Use pressing cloth</p>
                                   </div>
                                   <div className="care-item">
                                     <i className="fa-solid fa-ban"></i>
                                     <h5>Avoid</h5>
                                     <p>No chlorine bleach, no fabric softeners</p>
                                   </div>
                                 </div>
                               </div>
                             </div>
                           </div>
                           
                              {/* Navigation
                              <div className="fabric-product-navigation d-flex justify-content-between align-items-center mt-60">
                                 <Link className="product-nav-prev" href="/portfolio-details-3">
                                    <i className="fa-sharp fa-regular fa-arrow-left"></i>
                                    <span>Shafoon Fabric</span>
                                 </Link>
                                 <Link href="/products" className="back-to-products">
                                    <span>
                                       <Dots/>
                                    </span>
                                    <span className="nav-text">View All Products</span>
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
          padding-top: 180px;
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
        
        /* Stretch Options */
        .stretch-options {
          background: white;
          padding: 30px;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          border: 1px solid #e0e0e0;
        }
        
        .stretch-title {
          color: #000;
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
        }
        
        .stretch-cards {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        
        .stretch-card {
          background: #f9fafb;
          padding: 25px;
          border-radius: 12px;
          text-align: center;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }
        
        .stretch-card:hover {
          background: white;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
        }
        
        .stretch-card.one-way {
          border-color: #b5d334;
        }
        
        .stretch-card.two-way {
          border-color: #4CAF50;
        }
        
        .stretch-card h6 {
          color: #000;
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 15px;
        }
        
        .stretch-percentage {
          font-size: 32px;
          font-weight: 800;
          color: #b5d334;
          margin-bottom: 5px;
        }
        
        .stretch-card p {
          color: #6b7280;
          font-size: 14px;
          margin-bottom: 10px;
        }
        
        .stretch-desc {
          color: #666;
          font-size: 12px;
          font-style: italic;
        }
        
        /* Best For Section */
        .best-for-section {
          background: white;
          padding: 30px;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        }
        
        .best-for-title {
          color: #000;
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 25px;
          display: flex;
          align-items: center;
        }
        
        .applications-icons {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        
        .app-icon-item {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 15px;
          background: #f9fafb;
          border-radius: 10px;
          transition: all 0.3s ease;
        }
        
        .app-icon-item:hover {
          background: white;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }
        
        .app-icon-circle {
          width: 50px;
          height: 50px;
          background: #b5d334;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
        }
        
        .app-icon-item span {
          color: #000;
          font-weight: 600;
          font-size: 15px;
        }
        
        /* Use Badge */
        .use-badge {
          background: linear-gradient(45deg, #2196F3, #0D47A1);
          color: white;
          padding: 6px 15px;
          border-radius: 20px;
          font-weight: 600;
          font-size: 14px;
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
        
        /* Technical Advantages */
        .technical-advantages {
          background: white;
          padding: 50px;
          border-radius: 16px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
        }
        
        .technical-title {
          color: #000;
          font-size: 36px;
          font-weight: 800;
          margin-bottom: 40px;
          display: flex;
          align-items: center;
        }
        
        .advantages-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }
        
        .advantage-item {
          text-align: center;
          padding: 25px;
          background: #f9fafb;
          border-radius: 12px;
          transition: all 0.3s ease;
        }
        
        .advantage-item:hover {
          background: white;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
        }
        
        .advantage-icon {
          font-size: 40px;
          margin-bottom: 20px;
        }
        
        .advantage-item h5 {
          color: #000;
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 10px;
        }
        
        .advantage-item p {
          color: #6b7280;
          font-size: 15px;
          line-height: 1.6;
          margin: 0;
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
        
        .additional-subtitle {
          color: #6b7280;
          font-size: 18px;
          margin-bottom: 40px;
          max-width: 700px;
        }
        
        /* Fabric Care */
        .fabric-care {
          background: white;
          padding: 50px;
          border-radius: 16px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
        }
        
        .care-title {
          color: #000;
          font-size: 36px;
          font-weight: 800;
          margin-bottom: 40px;
          display: flex;
          align-items: center;
        }
        
        .care-instructions {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }
        
        .care-item {
          text-align: center;
          padding: 25px;
          background: #f9fafb;
          border-radius: 12px;
          transition: all 0.3s ease;
        }
        
        .care-item:hover {
          background: white;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
        }
        
        .care-item i {
          font-size: 40px;
          color: #b5d334;
          margin-bottom: 20px;
        }
        
        .care-item h5 {
          color: #000;
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 10px;
        }
        
        .care-item p {
          color: #6b7280;
          font-size: 14px;
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
          
          .stretch-cards {
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
          
          .applications-icons {
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
          .technical-title,
          .care-title {
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
          .technical-advantages,
          .fabric-care {
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
          .technical-title,
          .care-title {
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
          .technical-title,
          .care-title {
            font-size: 20px;
          }
        }
      `}</style>
    </Wrapper>
  );
};

export default PortfolioDetailsOneMain;