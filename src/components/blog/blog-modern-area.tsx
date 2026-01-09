import React from "react"
import Image from "next/image"
import Link from "next/link"
import a from "@/assets/img/a.png"
/* ================= TYPES ================= */

interface ProcessItemType {
  id: number
  title: string
  description: string
  img: string
  details: string
  order: string
}

interface ProcessItemProps {
  item: ProcessItemType
}

/* ================= DATA ================= */

const process_data: ProcessItemType[] = [
  {
    id: 1,
    title: "Twisting",
    description: "Creating strong, uniform yarns by twisting fibers together",
    img: "/assets/img/twistings.png",
    details:
      "Advanced twisting machinery ensures yarn strength and consistency with real-time quality monitoring.",
    order: "01",
  },
  {
    id: 2,
    title: "Knitting",
    description: "Transforming yarn into fabric with precision",
    img: "/assets/img/knitting.png",
    details:
      "Computerized knitting machines create various fabric types with consistent quality and texture.",
    order: "02",
  },
  {
    id: 3,
    title: "Manufacturing",
    description: "Fabric production at industrial scale",
    img: "/assets/img/manufacturing.png",
    details:
      "Automated systems ensure high-volume production with precision and minimal waste.",
    order: "03",
  },
  {
    id: 4,
    title: "Designing",
    description: "Creating patterns and textile designs",
    img: "/assets/img/a.png",
    details:
      "Innovative patterns and textures using both traditional and digital design methodologies.",
    order: "04",
  },
  {
    id: 5,
    title: "Quality Control",
    description: "Rigorous testing and inspection",
    img: "/assets/img/qualitycontrol.png",
    details:
      "Comprehensive quality checks for strength, color fastness, and dimensional stability.",
    order: "05",
  },
]

/* ================= ITEM ================= */

const ProcessItem: React.FC<ProcessItemProps> = ({ item }) => {
  const isExternal = /^https?:\/\//.test(item.img)

  return (
    <div className="process-item-wrapper">
      <div className="process-item-inner">
        {/* Number Badge */}
        <div className="process-number-badge">
          <span className="process-number">{item.order}</span>
        </div>

        {/* Image Section */}
        <div className="process-thumb">
          <div className="process-image-container">
            <Image
              src={item.img}
              alt={item.title}
              width={400}
              height={300}
              className="process-img"
              unoptimized={isExternal}
            />
            {/* Gradient Overlay */}
            <div className="process-image-overlay"></div>
          </div>
        </div>

        {/* Content Section */}
        <div className="process-content">
          <span className="process-step">Step {item.order}</span>
          <h3 className="process-title">{item.title}</h3>
          <p className="process-description">{item.description}</p>
          <p className="process-details">{item.details}</p>
        </div>
      </div>

      <style jsx>{`
        .process-item-wrapper {
          position: relative;
          height: 100%;
        }

        .process-item-inner {
          background: linear-gradient(145deg, #ffffff 0%, #f9fcf5 100%);
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(181, 211, 52, 0.08),
                      0 12px 40px rgba(181, 211, 52, 0.04);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          height: 100%;
          border: 1px solid rgba(181, 211, 52, 0.1);
          position: relative;
        }

        .process-item-inner:hover {
          transform: translateY(-12px);
          box-shadow: 0 20px 60px rgba(181, 211, 52, 0.15),
                      0 8px 32px rgba(181, 211, 52, 0.08);
        }

        .process-number-badge {
          position: absolute;
          top: 24px;
          left: 24px;
          background: linear-gradient(135deg, #b5d334 0%, #9bc02d 100%);
          color: #fff;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
       
          z-index: 2;
          box-shadow: 0 4px 12px rgba(181, 211, 52, 0.3);
          transition: all 0.3s ease;
        }

        .process-item-inner:hover .process-number-badge {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 6px 20px rgba(181, 211, 52, 0.4);
        }

        .process-thumb {
          height: 280px;
          overflow: hidden;
          position: relative;
        }

        .process-image-container {
          position: relative;
          width: 100%;
          height: 100%;
        }
    

        .process-item-inner:hover .process-img {
          transform: scale(1.05);
        }

        .process-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, 
            transparent 0%, 
            rgba(0, 0, 0, 0.1) 100%);
          z-index: 1;
        }

        .process-content {
          padding: 32px;
          position: relative;
          z-index: 2;
        }

        .process-step {
          color: #b5d334;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          display: inline-block;
          margin-bottom: 8px;
        }

        .process-title {
          font-size: 28px;
          font-weight: 800;
          margin: 12px 0;
          color: #1a1a1a;
          line-height: 1.2;
        }

        .process-description {
          color: #666;
          font-size: 16px;
          line-height: 1.6;
          margin-bottom: 16px;
          font-weight: 500;
        }

        .process-details {
          margin-top: 16px;
          color: #555;
          font-size: 15px;
          line-height: 1.7;
          opacity: 0.9;
        }

        /* Decorative Element */
        .process-item-inner::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, 
            rgba(181, 211, 52, 0.1) 0%, 
            rgba(181, 211, 52, 0) 100%);
          border-bottom-left-radius: 100%;
          pointer-events: none;
        }
      `}</style>
    </div>
  )
}

/* ================= PAGE ================= */

const ManufacturingProcess: React.FC = () => {
  return (
    <section className="manufacturing-process">
      {/* Background Elements */}
      <div className="background-elements">
        <div className="bg-circle-1"></div>
        <div className="bg-circle-2"></div>
        <div className="bg-circle-3"></div>
      </div>

      <div className="container">
        {/* Header Section */}
        <div className="header-section">
          <span className="section-subtitle">Our Process</span>
          <h2 className="section-title">Precision Textile Production Process</h2>
          <p className="section-description">
            Discover our meticulous 6-step manufacturing journey that ensures 
            premium quality textiles through innovation and precision engineering.
          </p>
        </div>

        {/* Process Grid */}
        <div className="process-grid">
          {process_data.map((item) => (
            <ProcessItem key={item.id} item={item} />
          ))}
        </div>

        {/* CTA Section - Fixed Link wrapper */}
        <div className="cta-section">
          <div className="cta-content">
            <h3 className="cta-title">Ready to Transform Your Textile Vision?</h3>
            <p className="cta-description">
              Contact our experts to learn how our manufacturing process can elevate your product quality.
            </p>
            <Link href="/contact" className="cta-button">
              <span>Get In Touch</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4.16667 10H15.8333M15.8333 10L10 4.16667M15.8333 10L10 15.8333" 
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" 
                      strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .manufacturing-process {
          padding: 100px 0;
    
          position: relative;
          overflow: hidden;
          margin-top: 80px;
          padding-top: 80px;
        }

        .background-elements {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        .bg-circle-1 {
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: radial-gradient(circle, 
            rgba(181, 211, 52, 0.08) 0%, 
            rgba(181, 211, 52, 0) 70%);
          top: 10%;
          left: 5%;
        }

        .bg-circle-2 {
          position: absolute;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: radial-gradient(circle, 
            rgba(181, 211, 52, 0.06) 0%, 
            rgba(181, 211, 52, 0) 70%);
          bottom: 20%;
          right: 10%;
        }

        .bg-circle-3 {
          position: absolute;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background: radial-gradient(circle, 
            rgba(181, 211, 52, 0.04) 0%, 
            rgba(181, 211, 52, 0) 70%);
          top: 40%;
          right: 20%;
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 1;
        }

        .header-section {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 80px;
        }

        .section-subtitle {
          display: inline-block;
          color: #b5d334;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 20px;
          padding: 8px 20px;
          background: rgba(181, 211, 52, 0.1);
          border-radius: 50px;
        }

        .section-title {
          font-size: 52px;
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 24px;
          color: #1a1a1a;
          background: linear-gradient(135deg, #1a1a1a 0%, #2d3748 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-description {
          font-size: 18px;
          line-height: 1.8;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 32px;
          margin-bottom: 80px;
        }

        .cta-section {
          background: linear-gradient(135deg, #b5d334 0%, #9bc02d 100%);
          border-radius: 32px;
          padding: 60px;
          text-align: center;
          box-shadow: 0 20px 60px rgba(181, 211, 52, 0.2);
          position: relative;
          overflow: hidden;
        }

        .cta-section::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 200px;
          height: 200px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          transform: translate(50%, -50%);
        }

        .cta-content {
          position: relative;
          z-index: 2;
          max-width: 600px;
          margin: 0 auto;
        }

        .cta-title {
          font-size: 36px;
          font-weight: 800;
          color: white;
          margin-bottom: 16px;
          line-height: 1.2;
        }

        .cta-description {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
          margin-bottom: 32px;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: white;
          color: #b5d334;
          border: none;
          padding: 18px 40px;
          font-size: 16px;
          font-weight: 700;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
          text-decoration: none;
        }

        .cta-button:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
          gap: 16px;
        }

        @media (max-width: 768px) {
          .manufacturing-process {
            padding: 60px 0;
            margin-top: 60px;
            padding-top: 60px;
          }

          .section-title {
            font-size: 36px;
          }

          .process-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .cta-section {
            padding: 40px 24px;
          }

          .cta-title {
            font-size: 28px;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 32px;
          }

          .section-description {
            font-size: 16px;
          }

          .process-content {
            padding: 24px;
          }

          .process-title {
            font-size: 24px;
          }

          .cta-button {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  )
}

export default ManufacturingProcess