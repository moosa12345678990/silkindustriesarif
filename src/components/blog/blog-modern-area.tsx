import React from "react"
import Image from "next/image"

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
    img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
    details:
      "Computerized knitting machines create various fabric types with consistent quality and texture.",
    order: "02",
  },
  {
    id: 3,
    title: "Manufacturing",
    description: "Fabric production at industrial scale",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    details:
      "Automated systems ensure high-volume production with precision and minimal waste.",
    order: "03",
  },
  {
    id: 4,
    title: "Designing",
    description: "Creating patterns and textile designs",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80",
    details:
      "Innovative patterns and textures using both traditional and digital design methodologies.",
    order: "04",
  },
  {
    id: 5,
    title: "Finishing",
    description: "Final touches for perfect fabric quality",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    details:
      "Quality inspection, cutting, and final preparations ensuring premium fabric standards.",
    order: "05",
  },
  {
    id: 6,
    title: "Quality Control",
    description: "Rigorous testing and inspection",
    img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
    details:
      "Comprehensive quality checks for strength, color fastness, and dimensional stability.",
    order: "",
  },
]

/* ================= ITEM ================= */

const ProcessItem: React.FC<ProcessItemProps> = ({ item }) => {
  const isExternal = /^https?:\/\//.test(item.img)

  return (
    <div className="process-item-wrapper">
      <div className="process-item-inner">
        <div className="process-number-badge">
          <span>{item.order}</span>
        </div>

        <div className="process-thumb">
          <Image
            src={item.img}
            alt={item.title}
            width={400}
            height={300}
            className="process-img"
            unoptimized={isExternal}
          />
        </div>

        <div className="process-content">
          <span className="process-step">Step {item.order}</span>
          <h3 className="process-title">{item.title}</h3>
          <p className="process-description">{item.description}</p>
          <p className="process-details">{item.details}</p>
        </div>
      </div>

      <style jsx>{`
        .process-item-inner {
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(181, 211, 52, 0.1);
          transition: all 0.4s ease;
        }
        .process-item-inner:hover {
          transform: translateY(-10px);
        }
        .process-number-badge {
          position: absolute;
          top: 20px;
          left: 20px;
          background: #b5d334;
          color: #fff;
          width: 55px;
          height: 55px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
        }
        .process-thumb {
          height: 260px;
          overflow: hidden;
        }
        .process-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .process-content {
          padding: 28px;
        }
        .process-step {
          color: #b5d334;
          font-size: 12px;
          font-weight: 700;
        }
        .process-title {
          font-size: 26px;
          font-weight: 800;
          margin: 10px 0;
        }
        .process-description {
          color: #6b7280;
        }
        .process-details {
          margin-top: 15px;
          color: #4b5563;
        }
      `}</style>
    </div>
  )
}

/* ================= PAGE ================= */

const ManufacturingProcess: React.FC = () => {
  return (
    <section className="manufacturing-process">
      <div className="container">
        <h2 className="title">Precision Textile Production Process</h2>

        <div className="grid">
          {process_data.map((item) => (
            <ProcessItem key={item.id} item={item} />
          ))}
        </div>
      </div>

      <style jsx global>{`
        .manufacturing-process {
          padding: 100px 0;
          background: #f8faf0;
        }
        .container {
          max-width: 1200px;
          margin: auto;
          padding: 0 20px;
        }
        .title {
          text-align: center;
          font-size: 48px;
          font-weight: 900;
          margin-bottom: 60px;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 40px;
        }
      `}</style>
    </section>
  )
}

export default ManufacturingProcess
