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
// animation
import { charAnimation, fadeAnimation, titleAnimation } from "@/utils/title-animation";
import { hoverBtn } from "@/utils/hover-btn";
import Link from "next/link";
import factory from "@/assets/img/factory.jpg"
import about from "@/assets/img/about.webp"
import HeaderFour from "@/layouts/headers/header-four";
import FooterOne from "@/layouts/footers/footer-one";

const AboutUsMain = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
      fadeAnimation();
      hoverBtn();
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
            {/* Hero Section */}
            <section className="about-hero-section">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-6 mt-40">
                    <div className="about-hero-content">
                      <span className="hero-subtitle">
                        <i className="fa-solid fa-ribbon" style={{marginRight: '10px'}}></i>
                        Crafting Silk & Stories Since 1982
                      </span>
                      <h1 className="hero-title">
                        About <span className="green-accent">Arif Silk Industries</span>
                      </h1>
                      <p className="hero-description">
                        Founded in 1982 by Mr. Arif, our company stands as a true reflection of 
                        determination, vision, and innovation in the textile world. For over four 
                        decades, we've woven quality, trust, and excellence into every fabric.
                      </p>
                      <div className="hero-cta mt-40 mb-40">
                        <Link href="/contact" className="">
                          <span>Get In Touch</span>
                          <i className="fa-solid fa-arrow-right" style={{marginLeft: '10px', transition: 'transform 0.3s ease'}}></i>
                        </Link>
                        
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="about-hero-image">
                      <div className="image-wrapper">
                        <img 
                          src="/assets/img/factory.jpg" 
                          alt="Arif Silk Industries Textile Manufacturing"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: '20px'
                          }}
                        />
                        <div className="experience-badge">
                          <div className="badge-content">
                            <span className="years">43+</span>
                            <span className="text">Years Experience</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Mission & Vision */}
            <section className="mission-vision-section">
              <div className="container">
                <div className="section-header text-center mb-60">
                  <span className="section-subtitle">Our Commitment</span>
                  <h2 className="section-title">Mission & Vision</h2>
                  <div className="section-divider">
                    <div className="divider-line"></div>
                    <div className="divider-dot"></div>
                    <div className="divider-line"></div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-12">
                    <div className="mission-card">
                      <div className="mission-icon">
                        <i className="fa-solid fa-bullseye"></i>
                      </div>
                      <h3 className="mission-title">Our Vision</h3>
                      <p className="mission-text">
                        To become a global leader in home textiles by delivering innovative, sustainable, 
                        and premium-quality products that enrich living spaces worldwide while preserving 
                        our legacy of craftsmanship, integrity, and excellence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Legacy & History */}
            <section className="legacy-section">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-6">
                    <div className="legacy-content">
                      <span className="legacy-subtitle">Our Journey</span>
                      <h2 className="legacy-title">Four Decades of Textile Excellence</h2>
                      <p className="legacy-text">
                        Since our humble beginnings in 1982, Arif Silk Industries has grown from 
                        a small local operation to an internationally recognized textile manufacturer. 
                        Our journey is a testament to Mr. Arif's vision and our team's dedication to 
                        quality and innovation.
                      </p>
                      <div className="legacy-highlights">
                        <div className="highlight-item">
                          <div className="highlight-icon">
                            <i className="fa-solid fa-check"></i>
                          </div>
                          <span>Pioneered modern textile manufacturing in the region</span>
                        </div>
                        <div className="highlight-item">
                          <div className="highlight-icon">
                            <i className="fa-solid fa-check"></i>
                          </div>
                          <span>Introduced sustainable production practices</span>
                        </div>
                        <div className="highlight-item">
                          <div className="highlight-icon">
                            <i className="fa-solid fa-check"></i>
                          </div>
                          <span>Expanded global reach while maintaining local roots</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="legacy-image">
                      <div className="image-container">
                        <img 
                          src="/assets/img/about.webp" 
                          alt="Textile Manufacturing Process"
                        />
                        <div className="image-overlay"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Analytics Section */}
            <section className="analytics-section">
              <div className="container">
                <div className="section-header text-center mb-60">
                  <span className="section-subtitle">Our Impact</span>
                  <h2 className="section-title">Numbers That Define Our Excellence</h2>
                  <p className="section-description">
                    Over four decades of consistent growth and customer satisfaction
                  </p>
                </div>
                <div className="analytics-grid">
                  <div className="analytics-card">
                    <div className="analytics-icon">
                      <i className="fa-solid fa-globe"></i>
                    </div>
                    <h3 className="analytics-number" data-count="4300">4300</h3>
                    <p className="analytics-title">Clients Worldwide</p>
                    <p className="analytics-desc">Serving customers across 35+ countries</p>
                  </div>
                  <div className="analytics-card">
                    <div className="analytics-icon">
                      <i className="fa-solid fa-calendar-days"></i>
                    </div>
                    <h3 className="analytics-number" data-count="43">43</h3>
                    <p className="analytics-title">Years of Experience</p>
                    <p className="analytics-desc">Decades of textile manufacturing expertise</p>
                  </div>
                  <div className="analytics-card">
                    <div className="analytics-icon">
                      <i className="fa-solid fa-people-group"></i>
                    </div>
                    <h3 className="analytics-number" data-count="99">99</h3>
                    <p className="analytics-title">Team Members</p>
                    <p className="analytics-desc">Dedicated professionals in our family</p>
                  </div>
                  <div className="analytics-card">
                    <div className="analytics-icon">
                      <i className="fa-solid fa-industry"></i>
                    </div>
                    <h3 className="analytics-number" data-count="140000">140000</h3>
                    <p className="analytics-title">Monthly Production</p>
                    <p className="analytics-desc">Meters of premium fabric every month</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Values Section */}
            <section className="values-section">
              <div className="container">
                <div className="section-header text-center mb-60">
                  <span className="section-subtitle">Our Foundation</span>
                  <h2 className="section-title">Core Values That Drive Us</h2>
                  <div className="section-divider">
                    <div className="divider-line"></div>
                    <div className="divider-dot"></div>
                    <div className="divider-line"></div>
                  </div>
                  <p className="section-description">
                    The principles that guide every decision and action at Arif Silk Industries
                  </p>
                </div>
                <div className="values-grid">
                  <div className="value-card">
                    <div className="value-icon">
                      <i className="fa-solid fa-gem"></i>
                    </div>
                    <h4 className="value-title">Quality Excellence</h4>
                    <p className="value-text">
                      Uncompromising commitment to superior quality in every fabric we produce
                    </p>
                  </div>
                  <div className="value-card">
                    <div className="value-icon">
                      <i className="fa-solid fa-leaf"></i>
                    </div>
                    <h4 className="value-title">Sustainability</h4>
                    <p className="value-text">
                      Eco-friendly practices and sustainable manufacturing processes
                    </p>
                  </div>
                  <div className="value-card">
                    <div className="value-icon">
                      <i className="fa-solid fa-handshake"></i>
                    </div>
                    <h4 className="value-title">Integrity</h4>
                    <p className="value-text">
                      Building trust through transparency and ethical business practices
                    </p>
                  </div>
                  <div className="value-card">
                    <div className="value-icon">
                      <i className="fa-solid fa-lightbulb"></i>
                    </div>
                    <h4 className="value-title">Innovation</h4>
                    <p className="value-text">
                      Continuous improvement and adoption of cutting-edge textile technologies
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="about-cta-section">
              <div className="container">
                <div className="cta-card">
                  <div className="cta-content text-center">
                    <h2 className="cta-title">Partner With Textile Excellence</h2>
                    <p className="cta-text">
                      Join thousands of satisfied clients who trust Arif Silk Industries for premium quality fabrics.
                    </p>
                    <div className="cta-buttons mt-40">
                      <Link href="/contact" className=" btn-large">
                        <span>Get a Quote</span>
                        <i className="fa-solid fa-envelope" style={{marginLeft: '10px', transition: 'transform 0.3s ease'}}></i>
                      </Link>
                   
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>

          {/* footer area */}
          <FooterOne />
          {/* footer area */}
        </div>
      </div>
      
      {/* Custom Styles */}
      <style jsx>{`
        /* Button Styles */
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 16px 35px;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 700;
          font-size: 16px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 2px solid transparent;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        
        .btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }
        
        .btn:hover i {
          transform: translateX(5px);
        }
        
        .btn:active {
          transform: translateY(-1px);
        }
        
        .btn-primary {
          background: #b5d334;
          color: #000;
          border-color: #b5d334;
        }
        
        .btn-primary:hover {
          background: #000;
          color: #b5d334;
          box-shadow: 0 10px 25px rgba(181, 211, 52, 0.3);
        }
        
        .btn-outline {
          background: transparent;
          color: #000;
          border-color: #000;
        }
        
        .btn-outline:hover {
          background: #000;
          color: white;
          border-color: #000;
        }
        
        .btn-large {
          padding: 18px 45px;
          font-size: 18px;
        }
        
        /* Hero Section */
        .about-hero-section {
          padding: 180px 0 100px;
          background: linear-gradient(135deg, #f8f9f8 0%, #f0f4eb 100%);
          position: relative;
          overflow: hidden;
        }
        
        .about-hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(181, 211, 52, 0.1) 0%, rgba(181, 211, 52, 0) 70%);
          border-radius: 50%;
          z-index: 0;
        }
        
        .about-hero-content {
          position: relative;
          z-index: 1;
        }
        
        .hero-subtitle {
          display: inline-block;
          color: #b5d334;
          font-size: 16px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 25px;
          padding: 12px 28px;
          background: rgba(181, 211, 52, 0.1);
          border-radius: 30px;
          display: inline-flex;
          align-items: center;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(181, 211, 52, 0.2);
        }
        
        .hero-title {
          font-size: 64px;
          font-weight: 800;
          color: #1f2937;
          margin-bottom: 30px;
          line-height: 1.2;
          font-family: var(--tp-ff-poppins);
        }
        
        .green-accent {
          color: #b5d334;
          position: relative;
          display: inline-block;
        }
        
        .green-accent::after {
          content: '';
          position: absolute;
          bottom: 10px;
          left: 0;
          width: 100%;
          height: 12px;
          background: rgba(181, 211, 52, 0.2);
          z-index: -1;
        }
        
        .hero-description {
          font-size: 18px;
          color: #6b7280;
          line-height: 1.8;
          margin-bottom: 35px;
          max-width: 90%;
          font-family: var(--tp-ff-montserrat);
          font-weight: 400;
        }
        
        .hero-cta {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }
        
        .about-hero-image {
          position: relative;
        }
        
        .image-wrapper {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 25px 70px rgba(0, 0, 0, 0.15);
          height: 520px;
          transition: transform 0.5s ease;
        }
        
        .image-wrapper:hover {
          transform: translateY(-5px);
        }
        
        .experience-badge {
          position: absolute;
          bottom: 35px;
          right: 35px;
          background: rgba(181, 211, 52, 0.95);
          padding: 22px;
          border-radius: 18px;
          color: #000;
          font-weight: 700;
          box-shadow: 0 15px 40px rgba(181, 211, 52, 0.3);
          animation: badgePulse 2s infinite;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(181, 211, 52, 0.3);
        }
        
        @keyframes badgePulse {
          0%, 100% { transform: scale(1) translateY(0); }
          50% { transform: scale(1.05) translateY(-5px); }
        }
        
        .badge-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .years {
          font-size: 38px;
          font-weight: 900;
          margin-bottom: 8px;
          line-height: 1;
        }
        
        .text {
          font-size: 15px;
          text-align: center;
          letter-spacing: 1px;
        }
        
        /* Mission & Vision */
        .mission-vision-section {
          padding: 120px 0;
          background: white;
        }
        
        .section-header {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .section-subtitle {
          display: inline-block;
          color: #b5d334;
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 20px;
          padding: 10px 24px;
          background: rgba(181, 211, 52, 0.1);
          border-radius: 30px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(181, 211, 52, 0.2);
        }
        
        .section-title {
          font-size: 48px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 25px;
          line-height: 1.2;
          font-family: var(--tp-ff-poppins);
        }
        
        .section-description {
          font-size: 18px;
          color: #6b7280;
          line-height: 1.7;
          max-width: 700px;
          margin: 0 auto 40px;
          font-family: var(--tp-ff-montserrat);
        }
        
        .section-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 35px;
        }
        
        .divider-line {
          width: 80px;
          height: 3px;
          background: linear-gradient(90deg, #b5d334, #cde16a);
          border-radius: 2px;
        }
        
        .divider-dot {
          width: 10px;
          height: 10px;
          background: #b5d334;
          border-radius: 50%;
          margin: 0 20px;
          box-shadow: 0 0 0 5px rgba(181, 211, 52, 0.2);
        }
        
        .mission-card {
          background: linear-gradient(135deg, #f9fafb 0%, #ffffff 100%);
          padding: 60px;
          border-radius: 24px;
          border-left: 6px solid #b5d334;
          text-align: center;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(240, 240, 240, 0.8);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .mission-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 25px 70px rgba(0, 0, 0, 0.12);
        }
        
        .mission-icon {
          font-size: 56px;
          color: #b5d334;
          margin-bottom: 30px;
        }
        
        .mission-title {
          font-size: 32px;
          font-weight: 700;
          color: #000;
          margin-bottom: 25px;
          font-family: var(--tp-ff-poppins);
        }
        
        .mission-text {
          font-size: 18px;
          color: #6b7280;
          line-height: 1.9;
          margin: 0;
          max-width: 850px;
          margin: 0 auto;
          font-family: var(--tp-ff-montserrat);
        }
        
        /* Legacy Section */
        .legacy-section {
          padding: 120px 0;
          background: linear-gradient(135deg, #f8f9f8 0%, #f0f4eb 100%);
        }
        
        .legacy-content {
          padding-right: 50px;
        }
        
        .legacy-subtitle {
          display: inline-block;
          color: #b5d334;
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 25px;
          padding: 10px 24px;
          background: rgba(181, 211, 52, 0.1);
          border-radius: 30px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(181, 211, 52, 0.2);
        }
        
        .legacy-title {
          font-size: 42px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 30px;
          line-height: 1.3;
          font-family: var(--tp-ff-poppins);
        }
        
        .legacy-text {
          font-size: 18px;
          color: #6b7280;
          line-height: 1.9;
          margin-bottom: 35px;
          font-family: var(--tp-ff-montserrat);
        }
        
        .legacy-highlights {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        
        .highlight-item {
          display: flex;
          align-items: flex-start;
          gap: 18px;
          padding: 15px;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 12px;
          border-left: 4px solid #b5d334;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .highlight-item:hover {
          transform: translateX(5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        }
        
        .highlight-icon {
          width: 28px;
          height: 28px;
          background: #b5d334;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        
        .highlight-icon i {
          color: white;
          font-size: 14px;
        }
        
        .highlight-item span {
          color: #4b5563;
          font-size: 16px;
          line-height: 1.6;
          font-weight: 500;
          font-family: var(--tp-ff-montserrat);
        }
        
        .legacy-image .image-container {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 25px 70px rgba(0, 0, 0, 0.1);
          height: 450px;
          transition: transform 0.5s ease;
        }
        
        .legacy-image .image-container:hover {
          transform: translateY(-5px);
        }
        
        .legacy-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.3), transparent);
        }
        
        /* Analytics Section */
        .analytics-section {
          padding: 120px 0;
          background: white;
        }
        
        .analytics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 35px;
        }
        
        .analytics-card {
          background: linear-gradient(135deg, #ffffff 0%, #fafbfc 100%);
          padding: 45px 30px;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.05);
          border: 1px solid rgba(240, 240, 240, 0.8);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .analytics-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #b5d334, #cde16a);
          transform: scaleX(0);
          transition: transform 0.4s ease;
          transform-origin: left;
        }
        
        .analytics-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 25px 70px rgba(0, 0, 0, 0.1);
          border-color: rgba(181, 211, 52, 0.3);
        }
        
        .analytics-card:hover::before {
          transform: scaleX(1);
        }
        
        .analytics-icon {
          font-size: 48px;
          color: #b5d334;
          margin-bottom: 25px;
          transition: transform 0.3s ease;
        }
        
        .analytics-card:hover .analytics-icon {
          transform: scale(1.1);
        }
        
        .analytics-number {
          font-size: 56px;
          font-weight: 800;
          color: #000;
          margin-bottom: 15px;
          line-height: 1;
          font-family: var(--tp-ff-poppins);
          background: linear-gradient(45deg, #b5d334, #8bad28);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .analytics-title {
          font-size: 22px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 12px;
          font-family: var(--tp-ff-poppins);
        }
        
        .analytics-desc {
          color: #6b7280;
          font-size: 15px;
          line-height: 1.6;
          margin: 0;
          font-family: var(--tp-ff-montserrat);
        }
        
        /* Values Section */
        .values-section {
          padding: 120px 0;
          background: linear-gradient(135deg, #f8f9f8 0%, #f0f4eb 100%);
        }
        
        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 35px;
        }
        
        .value-card {
          background: white;
          padding: 45px 30px;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.05);
          border: 1px solid rgba(240, 240, 240, 0.8);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .value-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(181, 211, 52, 0.05), transparent);
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        
        .value-card:hover {
          transform: translateY(-10px) rotateX(2deg);
          box-shadow: 0 25px 70px rgba(0, 0, 0, 0.1);
          border-color: rgba(181, 211, 52, 0.3);
        }
        
        .value-card:hover::after {
          opacity: 1;
        }
        
        .value-icon {
          font-size: 56px;
          color: #b5d334;
          margin-bottom: 30px;
          transition: transform 0.4s ease;
        }
        
        .value-card:hover .value-icon {
          transform: scale(1.1) rotate(5deg);
        }
        
        .value-title {
          font-size: 24px;
          font-weight: 700;
          color: #000;
          margin-bottom: 18px;
          font-family: var(--tp-ff-poppins);
          position: relative;
          padding-bottom: 15px;
        }
        
        .value-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 3px;
          background: #b5d334;
          border-radius: 2px;
          transition: width 0.3s ease;
        }
        
        .value-card:hover .value-title::after {
          width: 60px;
        }
        
        .value-text {
          color: #6b7280;
          font-size: 16px;
          line-height: 1.7;
          margin: 0;
          font-family: var(--tp-ff-montserrat);
        }
        
        /* CTA Section */
        .about-cta-section {
          padding: 120px 0;
        }
        
        .cta-card {
          background: linear-gradient(135deg, #b5d334 0%, #8bad28 100%);
          padding: 80px 60px;
          border-radius: 30px;
          box-shadow: 0 30px 80px rgba(181, 211, 52, 0.3);
          position: relative;
          overflow: hidden;
        }
        
        .cta-card::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 100%;
          height: 200%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
          transform: rotate(45deg);
        }
        
        .cta-content {
          position: relative;
          z-index: 1;
        }
        
        .cta-title {
          font-size: 48px;
          font-weight: 800;
          color: #000;
          margin-bottom: 25px;
          font-family: var(--tp-ff-poppins);
        }
        
        .cta-text {
          font-size: 20px;
          color: rgba(0, 0, 0, 0.85);
          line-height: 1.8;
          margin-bottom: 40px;
          max-width: 700px;
          margin: 0 auto 40px;
          font-family: var(--tp-ff-montserrat);
          font-weight: 500;
        }
        
        .cta-buttons {
          display: flex;
          gap: 25px;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .btn-outline.btn-large {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-color: rgba(0, 0, 0, 0.3);
          color: #000;
        }
        
        .btn-outline.btn-large:hover {
          background: #000;
          color: white;
          border-color: #000;
        }
        
        /* Responsive Styles */
        @media (max-width: 1200px) {
          .hero-title {
            font-size: 56px;
          }
          
          .section-title {
            font-size: 42px;
          }
          
          .cta-title {
            font-size: 42px;
          }
        }
        
        @media (max-width: 992px) {
          .about-hero-section {
            padding: 150px 0 80px;
          }
          
          .hero-title {
            font-size: 48px;
          }
          
          .hero-description {
            max-width: 100%;
          }
          
          .legacy-content {
            padding-right: 0;
            margin-bottom: 50px;
          }
          
          .analytics-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .values-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .cta-card {
            padding: 60px 40px;
          }
        }
        
        @media (max-width: 768px) {
          .about-hero-section {
            padding: 130px 0 60px;
          }
          
          .hero-title {
            font-size: 40px;
          }
          
          .hero-subtitle {
            font-size: 14px;
            padding: 10px 20px;
          }
          
          .section-title {
            font-size: 36px;
          }
          
          .legacy-title {
            font-size: 32px;
          }
          
          .mission-card {
            padding: 40px 30px;
          }
          
          .analytics-grid {
            grid-template-columns: 1fr;
          }
          
          .values-grid {
            grid-template-columns: 1fr;
          }
          
          .cta-title {
            font-size: 36px;
          }
          
          .cta-card {
            padding: 50px 30px;
          }
          
          .hero-cta,
          .cta-buttons {
            flex-direction: column;
            gap: 15px;
          }
          
          .btn {
            width: 100%;
            justify-content: center;
          }
        }
        
        @media (max-width: 576px) {
          .hero-title {
            font-size: 32px;
          }
          
          .section-title {
            font-size: 28px;
          }
          
          .analytics-number {
            font-size: 48px;
          }
          
          .cta@media (max-width: 576px) {
  .hero-title {
    font-size: 32px;
  }
  
  .section-title {
    font-size: 28px;
  }
  
  .analytics-number {
    font-size: 48px;
  }
  
  .cta-title {
    font-size: 28px;
  }
  
  .mission-title {
    font-size: 24px;
  }
  
  .analytics-card,
  .value-card {
    padding: 35px 25px;
  }
  
  .experience-badge {
    padding: 18px;
    bottom: 20px;
    right: 20px;
  }
  
  .years {
    font-size: 32px;
  }
  
  .image-wrapper {
    height: 400px;
  }
  
  .legacy-image .image-container {
    height: 350px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 28px;
  }
  
  .hero-description {
    font-size: 16px;
  }
  
  .section-header {
    margin-bottom: 40px;
  }
  
  .mission-vision-section,
  .legacy-section,
  .analytics-section,
  .values-section,
  .about-cta-section {
    padding: 80px 0;
  }
  
  .mission-card {
    padding: 30px 20px;
  }
  
  .cta-card {
    padding: 40px 25px;
  }
}

/* Additional missing styles */
.mt-40 {
  margin-top: 40px;
}

.mb-60 {
  margin-bottom: 60px;
}

.text-center {
  text-align: center;
}

.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.col-xl-6, 
.col-xl-12 {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}

@media (min-width: 1200px) {
  .col-xl-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  
  .col-xl-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}

.align-items-center {
  align-items: center;
}

/* Animations for counter numbers */
.analytics-number {
  counter-reset: count var(--num);
  animation: counter 2s ease-in-out forwards;
  animation-delay: 0.5s;
}

@keyframes counter {
  from {
    --num: 0;
  }
  to {
    --num: var(--end);
  }
}

.analytics-number::after {
  content: counter(count);
}

/* Add CSS variables */
:root {
  --tp-ff-poppins: 'Poppins', sans-serif;
  --tp-ff-montserrat: 'Montserrat', sans-serif;
}

/* Smooth scroll wrapper */
#smooth-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

#smooth-content {
  will-change: transform;
}

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {
  .btn,
  .image-wrapper,
  .legacy-image .image-container,
  .analytics-card,
  .value-card,
  .mission-card,
  .highlight-item,
  .analytics-icon,
  .value-icon {
    transition: none !important;
    animation: none !important;
  }
  
  .experience-badge {
    animation: none;
  }
}

/* High contrast mode */
@media (prefers-contrast: high) {
  .btn-primary {
    background: #000;
    color: #fff;
    border: 2px solid #000;
  }
  
  .btn-outline {
    background: transparent;
    color: #000;
    border: 2px solid #000;
  }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .about-hero-section,
  .legacy-section,
  .values-section {
    background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  }
  
  .hero-title,
  .section-title,
  .legacy-title,
  .mission-title,
  .analytics-title,
  .value-title,
  .cta-title {
    color: #ffffff;
  }
  
  .hero-description,
  .section-description,
  .mission-text,
  .legacy-text,
  .highlight-item span,
  .analytics-desc,
  .value-text,
  .cta-text {
    color: #d1d5db;
  }
  
  .analytics-card,
  .value-card,
  .mission-card,
  .highlight-item {
    background: linear-gradient(135deg, #2d2d2d 0%, #3d3d3d 100%);
    border-color: #444;
  }
  
  .btn-outline {
    color: #ffffff;
    border-color: #ffffff;
  }
  
  .btn-outline:hover {
    background: #ffffff;
    color: #000;
  }
}

/* Print styles */
@media print {
  .btn,
  .hero-cta,
  .cta-buttons,
  .experience-badge,
  .image-overlay {
    display: none !important;
  }
  
  .about-hero-section,
  .mission-vision-section,
  .legacy-section,
  .analytics-section,
  .values-section,
  .about-cta-section {
    padding: 40px 0 !important;
    background: none !important;
    box-shadow: none !important;
  }
  
  .analytics-number::before {
    content: attr(data-count);
    -webkit-text-fill-color: #000;
    background: none;
  }
}
`}</style>
    </Wrapper>
  );
};

export default AboutUsMain;