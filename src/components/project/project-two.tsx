"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const project_data = [
  {
    id: 1,
    img: "/assets/img/whitesatin.jpg",
    subtitle: "80–120 GSM",
    title: "Poly Satin (100% Polyester)",
    link: "/portfolio-details-2"
  },
  {
    id: 2,
    img: "/assets/img/shafooncrickle.jpg",
    subtitle: "70–100 GSM",
    title: "Shafoon (100% Polyester)",
    link: "/portfolio-details-3"
  },
  {
    id: 3,
    img: "/assets/img/warp.jpg",
    subtitle: "70 -100 GSM",
    title: "Warp nit fabric",
    link: "/portfolio-details-1"
  },
];

export default function ProjectTwo() {
  const styles = {
    productsHeader: {
      padding: "60px 0 40px",
      backgroundColor: "#f9fafb",
      marginBottom: "40px",
      position: "relative" as "relative",
      overflow: "hidden",
    },
    headerTopLine: {
      position: "absolute" as "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: "4px",
      background: `linear-gradient(90deg, #B5D334, #cde16a, #B5D334)`,
    },
    headingWrapper: {
      textAlign: "center" as "center",
      maxWidth: "800px",
      margin: "0 auto",
      padding: "0 20px",
    },
    headingSubtitle: {
      display: "inline-block",
      color: "#B5D334",
      fontSize: "14px",
      fontWeight: "600",
      textTransform: "uppercase" as "uppercase",
      letterSpacing: "2px",
      marginBottom: "15px",
      padding: "8px 20px",
      backgroundColor: "rgba(181, 211, 52, 0.1)",
      borderRadius: "30px",
    },
    mainHeading: {
      fontSize: "48px",
      fontWeight: "700",
      color: "#1f2937",
      marginBottom: "20px",
      lineHeight: "1.2",
    },
    headingAccent: {
      color: "#B5D334",
      position: "relative" as "relative",
      display: "inline-block",
    },
    decorativeLine: {
      width: "80px",
      height: "3px",
      background: `linear-gradient(90deg, #B5D334, #cde16a)`,
      margin: "20px auto 25px",
      borderRadius: "2px",
      position: "relative" as "relative",
    },
    headingDescription: {
      fontSize: "18px",
      color: "#6b7280",
      lineHeight: "1.7",
      maxWidth: "700px",
      margin: "0 auto",
      padding: "0 10px",
    },
  };

  return (
    <section className="tp-project-2-area tpproject">
      {/* Main Heading Section with inline styles */}
      <div style={styles.productsHeader}>
        <div style={styles.headerTopLine}></div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div style={styles.headingWrapper}>
                {/* Premium Fabrics Subtitle */}
                <span style={styles.headingSubtitle}>Premium Fabrics</span>
                
                {/* Main Heading with Green Accent */}
                <h2 style={styles.mainHeading}>
                  Our <span style={styles.headingAccent}>Products</span>
                </h2>
                
                {/* Decorative Line */}
                <div style={styles.decorativeLine}></div>
                
                {/* Description */}
                <p style={styles.headingDescription}>
                  High-quality fabrics for all your textile needs. Explore our premium collection of 
                  polyester satin, shafoon, and warp knit fabrics with exceptional quality and durability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="panels p-relative fix">
        <div className="panels-container d-flex">
          {project_data.map((item) => (
            <div key={item.id} className="panel">
              <div className="tp-project-2-item p-relative">
                <div className="tp-project-2-thumb">
                  <Image src={item.img} alt="p-img" width={890} height={700} />
                </div>
                <div className="tp-project-2-content">
                  <span>{item.subtitle}</span>
                  <h4 className="tp-project-2-title-sm">
                    <Link href={item.link}>{item.title}</Link>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}