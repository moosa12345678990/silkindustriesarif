import React from "react";
import Image from "next/image";

// Process data specific to textile manufacturing with Unsplash images
const process_data = [
  {
    id: 1,
    title: "Twisting",
    description: "Creating strong, uniform yarns by twisting fibers together",
    img: "/assets/img/twistings.png",
    details: "Advanced twisting machinery ensures yarn strength and consistency with real-time quality monitoring.",
    order: "01"
  },
  {
    id: 2,
    title: "Knitting",
    description: "Transforming yarn into fabric with precision",
    img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    details: "Computerized knitting machines create various fabric types with consistent quality and texture.",
    order: "02"
  },
  {
    id: 3,
    title: "Manufacturing",
    description: "Fabric production at industrial scale",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    details: "Automated systems ensure high-volume production with precision and minimal waste.",
    order: "03"
  },
  {
    id: 4,
    title: "Designing",
    description: "Creating patterns and textile designs",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    details: "Innovative patterns and textures using both traditional and digital design methodologies.",
    order: "04"
  },
  {
    id: 5,
    title: "Finishing",
    description: "Final touches for perfect fabric quality",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    details: "Quality inspection, cutting, and final preparations ensuring premium fabric standards.",
    order: "05"
  },
  {
    id: 6,
    title: "Quality Control",
    description: "Rigorous testing and inspection",
    img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    details: "Comprehensive quality checks for strength, color fastness, and dimensional stability.",
    order: "06"
  }
];

// Process item component
const ProcessItem = ({ item }) => {
  return (
    <div className="process-item-wrapper">
      <div className="process-item-inner">
        {/* Process Number Badge */}
        <div className="process-number-badge">
          <span className="process-number">{item.order}</span>
        </div>
        
        {/* Process Image */}
        <div className="process-thumb">
          <Image 
            src={item.img} 
            alt={item.title} 
            width={400} 
            height={300}
            className="process-img"
            unoptimized={item.img.startsWith('http')}
          />
          <div className="process-gradient-overlay"></div>
        </div>
        
        {/* Process Content */}
        <div className="process-content">
          <div className="process-header">
            <span className="process-step">Step {item.order}</span>
            <h3 className="process-title">{item.title}</h3>
            <p className="process-description">{item.description}</p>
          </div>
          
          <div className="process-details">
            <p>{item.details}</p>
            <div className="process-line"></div>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .process-item-wrapper {
          position: relative;
          height: 100%;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .process-item-inner {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(181, 211, 52, 0.08);
          height: 100%;
          display: flex;
          flex-direction: column;
          transition: all 0.4s ease;
          border: 2px solid #F8FAF0;
          position: relative;
        }
        
        .process-item-wrapper:hover .process-item-inner {
          transform: translateY(-15px);
          box-shadow: 0 25px 50px rgba(181, 211, 52, 0.15);
          border-color: #B5D334;
        }
        
        .process-number-badge {
          position: absolute;
          top: 25px;
          left: 25px;
          z-index: 3;
          background: #B5D334;
          color: white;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          font-weight: 800;
          box-shadow: 0 8px 25px rgba(181, 211, 52, 0.3);
          transition: all 0.4s ease;
        }
        
        .process-item-wrapper:hover .process-number-badge {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 12px 30px rgba(181, 211, 52, 0.4);
        }
        
        .process-thumb {
          position: relative;
          height: 280px;
          overflow: hidden;
        }
        
        .process-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .process-item-wrapper:hover .process-img {
          transform: scale(1.15);
        }
        
        .process-gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            transparent 50%,
            rgba(181, 211, 52, 0.1) 100%
          );
          z-index: 1;
        }
        
        .process-content {
          padding: 30px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          position: relative;
          z-index: 2;
        }
        
        .process-header {
          margin-bottom: 20px;
        }
        
        .process-step {
          display: inline-block;
          color: #B5D334;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 10px;
          padding: 4px 12px;
          background: rgba(181, 211, 52, 0.1);
          border-radius: 20px;
        }
        
        .process-title {
          font-size: 28px;
          font-weight: 800;
          color: #1F2937;
          margin-bottom: 12px;
          line-height: 1.2;
          position: relative;
          display: inline-block;
        }
        
        .process-title::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 50px;
          height: 4px;
          background: #B5D334;
          border-radius: 2px;
          transition: width 0.3s ease;
        }
        
        .process-item-wrapper:hover .process-title::after {
          width: 80px;
        }
        
        .process-description {
          color: #6B7280;
          font-size: 16px;
          line-height: 1.6;
          margin-top: 10px;
        }
        
        .process-details {
          margin-top: auto;
          padding-top: 20px;
          border-top: 1px solid #F8FAF0;
          position: relative;
        }
        
        .process-details p {
          color: #4B5563;
          font-size: 15px;
          line-height: 1.7;
          margin: 0;
          position: relative;
          padding-left: 15px;
        }
        
        .process-details p::before {
          content: '•';
          position: absolute;
          left: 0;
          color: #B5D334;
          font-size: 20px;
        }
        
        .process-line {
          position: absolute;
          top: -2px;
          left: 0;
          width: 40px;
          height: 4px;
          background: #B5D334;
          border-radius: 2px;
          transition: width 0.3s ease;
        }
        
        .process-item-wrapper:hover .process-line {
          width: 100%;
        }
        
        @media (max-width: 768px) {
          .process-thumb {
            height: 220px;
          }
          
          .process-content {
            padding: 24px;
          }
          
          .process-title {
            font-size: 24px;
          }
          
          .process-number-badge {
            width: 50px;
            height: 50px;
            font-size: 20px;
          }
        }
        
        @media (max-width: 480px) {
          .process-thumb {
            height: 180px;
          }
        }
      `}</style>
    </div>
  );
};

export default function ManufacturingProcess() {
  return (
    <>
      {/* Header Section */}
      <div className="manufacturing-process-header">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-header">
                <div className="header-badge">
                  <span className="badge-text">Manufacturing Excellence</span>
                </div>
                <h1 className="section-title">
                  Precision
                  <span className="highlight"> Textile </span>
                  Production Process
                </h1>
                <div className="section-divider">
                  <div className="divider-line"></div>
                  <div className="divider-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="#B5D334" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 9H15V15H9V9Z" stroke="#B5D334" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 3V9" stroke="#B5D334" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 15V21" stroke="#B5D334" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15 3V9" stroke="#B5D334" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15 15V21" stroke="#B5D334" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="divider-line"></div>
                </div>
                <p className="section-description">
                  Experience our comprehensive manufacturing journey—from premium raw materials to 
                  meticulously finished fabrics, ensuring quality at every stage of production.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Grid Section */}
      <div className="manufacturing-process-grid">
        <div className="container">
          <div className="process-grid">
            {process_data.map((item) => (
              <div key={item.id} className="process-grid-item">
                <ProcessItem item={item} />
              </div>
            ))}
          </div>
          
          {/* Process Flow Indicator */}
          <div className="process-flow-indicator">
            <div className="flow-line"></div>
            <div className="flow-text">Manufacturing Flow</div>
            <div className="flow-line"></div>
          </div>
        </div>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        .manufacturing-process-header {
          background: linear-gradient(135deg, 
            #FFFFFF 0%, 
            #F8FAF0 30%, 
            #FFFFFF 70%, 
            #F8FAF0 100%
          );
          padding: 140px 0 80px;
          position: relative;
          overflow: hidden;
        }
        
        .manufacturing-process-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, 
            transparent, 
            #B5D334, 
            transparent
          );
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .section-header {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }
        
        .header-badge {
          margin-bottom: 25px;
        }
        
        .badge-text {
          display: inline-block;
          color: #B5D334;
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 3px;
          padding: 12px 30px;
          background: rgba(181, 211, 52, 0.1);
          border-radius: 50px;
          border: 2px solid rgba(181, 211, 52, 0.2);
          position: relative;
          overflow: hidden;
        }
        
        .badge-text::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s ease;
        }
        
        .badge-text:hover::before {
          left: 100%;
        }
        
        .section-title {
          font-size: 56px;
          font-weight: 900;
          color: #111827;
          margin-bottom: 30px;
          line-height: 1.1;
        }
        
        .highlight {
          color: #B5D334;
          position: relative;
          display: inline-block;
        }
        
        .highlight::after {
          content: '';
          position: absolute;
          bottom: 5px;
          left: 0;
          right: 0;
          height: 8px;
          background: rgba(181, 211, 52, 0.2);
          z-index: -1;
          border-radius: 4px;
        }
        
        .section-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin: 40px 0;
        }
        
        .divider-line {
          width: 100px;
          height: 3px;
          background: linear-gradient(90deg, transparent, #B5D334, transparent);
          border-radius: 2px;
        }
        
        .divider-icon {
          animation: float 3s ease-in-out infinite;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .section-description {
          font-size: 20px;
          color: #4B5563;
          line-height: 1.8;
          max-width: 700px;
          margin: 0 auto;
          font-weight: 400;
        }
        
        .manufacturing-process-grid {
          background: linear-gradient(180deg, 
            #FFFFFF 0%, 
            #F8FAF0 100%
          );
          padding: 100px 0;
          position: relative;
        }
        
        .manufacturing-process-grid::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, 
            transparent, 
            #E5E7EB, 
            transparent
          );
        }
        
        .process-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 40px;
          margin-top: 60px;
        }
        
        .process-grid-item {
          transition: transform 0.3s ease;
        }
        
        .process-grid-item:hover {
          transform: scale(1.02);
        }
        
        .process-flow-indicator {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin-top: 80px;
          opacity: 0.8;
          transition: opacity 0.3s ease;
        }
        
        .process-flow-indicator:hover {
          opacity: 1;
        }
        
        .flow-line {
          flex-grow: 1;
          height: 2px;
          background: linear-gradient(90deg, 
            transparent, 
            #B5D334, 
            transparent
          );
          border-radius: 1px;
          transition: all 0.3s ease;
        }
        
        .process-flow-indicator:hover .flow-line {
          background: linear-gradient(90deg, 
            transparent, 
            #B5D334 20%, 
            #9AB82D 50%, 
            #B5D334 80%, 
            transparent
          );
          height: 3px;
        }
        
        .flow-text {
          color: #B5D334;
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          white-space: nowrap;
          padding: 10px 25px;
          background: white;
          border-radius: 30px;
          box-shadow: 0 4px 15px rgba(181, 211, 52, 0.1);
          border: 2px solid rgba(181, 211, 52, 0.2);
          transition: all 0.3s ease;
        }
        
        .flow-text:hover {
          background: #B5D334;
          color: white;
          box-shadow: 0 6px 20px rgba(181, 211, 52, 0.3);
          transform: translateY(-2px);
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        /* Responsive Styles */
        @media (max-width: 1024px) {
          .section-title {
            font-size: 48px;
          }
          
          .process-grid {
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 30px;
          }
        }
        
        @media (max-width: 768px) {
          .manufacturing-process-header {
            padding: 100px 0 60px;
          }
          
          .section-title {
            font-size: 36px;
          }
          
          .section-description {
            font-size: 18px;
            padding: 0 20px;
          }
          
          .process-grid {
            grid-template-columns: 1fr;
            max-width: 500px;
            margin-left: auto;
            margin-right: auto;
          }
          
          .badge-text {
            font-size: 12px;
            padding: 10px 20px;
            letter-spacing: 2px;
          }
          
          .process-flow-indicator {
            flex-direction: column;
            gap: 15px;
          }
          
          .flow-line {
            width: 100%;
          }
        }
        
        @media (max-width: 480px) {
          .section-title {
            font-size: 28px;
          }
          
          .section-divider {
            gap: 10px;
          }
          
          .divider-line {
            width: 60px;
          }
          
          .flow-text {
            font-size: 12px;
            padding: 8px 20px;
          }
        }
      `}</style>
    </>
  );
}