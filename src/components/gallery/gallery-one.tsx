import React, { CSSProperties } from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

// Your images

// import your_image_2 from '@/assets/img/gallerysection/5 (1).png';
import your_image_3 from '@/assets/img/quality.png';
import your_image_4 from '@/assets/img/okotex.png';
import your_image_5 from '@/assets/img/bulk.png';
import your_image_6 from '@/assets/img/grs.png';
import your_image_7 from '@/assets/img/kccci.png';
import your_image_8 from '@/assets/img/fabric.png';
// Add more as needed

// Theme shapes
import shape_1 from '@/assets/img/home-03/gallery/gal-shape-1.png';
import shape_d_1 from '@/assets/img/home-03/gallery/gal-shape-dark-1.png';
import shape_2 from '@/assets/img/home-03/gallery/gal-shape-2.png';
import shape_d_2 from '@/assets/img/home-03/gallery/gal-shape-dark-2.png';

// Replace with your actual images
const gallery_images = [

  // your_image_2, 
  your_image_3, 
  your_image_4, 
  your_image_5,

  // your_image_2, 
  your_image_3, 
  your_image_8, 
  your_image_7,
  your_image_6, 
  // your_image_2
];

const imgStyle: CSSProperties = { height: "auto" };

export default function GalleryOne() {
  return (
    <div className="tp-gallery-area fix p-relative">
      <div className="tp-gallery-shape-1">
        <Image className="img-1" src={shape_1} alt="shape" style={imgStyle} />
        <Image className="img-2" src={shape_d_1} alt="shape" style={imgStyle} />
      </div>
      <div className="tp-gallery-shape-2">
        <Image className="img-1" src={shape_2} alt="shape" style={imgStyle} />
        <Image className="img-2" src={shape_d_2} alt="shape" style={imgStyle} />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-gallery-slider-wrap">
              <div className="swiper-container tp-gallery-slider-active">
                <Marquee className="tp-gallery-timing" speed={100} direction='left' >
                  {gallery_images.map((g, i) => (
                    <div key={i} className="tp-gallery-item-wrapper">
                      <div className="tp-gallery-item mr-30">
                        <Image 
                          src={g} 
                          alt={`gallery-img-${i + 1}`} 
                          width={350} // Fixed width
                          height={400} // Fixed height to maintain aspect ratio
                          style={{ 
                            width: '100%',
                            height: 'auto',
                            objectFit: 'cover',
                            borderRadius: '8px'
                          }}
                          className="gallery-image"
                        />
                      </div>
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add custom styles for consistent image display */}
      <style jsx>{`
        .tp-gallery-area {
          padding: 60px 0;
          background: #f8f8f8;
          overflow: hidden;
        }
        
        .tp-gallery-item-wrapper {
          display: inline-block;
        }
        
        .tp-gallery-item {
          position: relative;
          overflow: hidden;
          width: 300px; /* Fixed width for gallery items */
          height: 400px; /* Fixed height for gallery items */
          border-radius: 8px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }
        
        .tp-gallery-item:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(181, 211, 52, 0.2);
        }
        
        .gallery-image {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
          transition: transform 0.5s ease;
        }
        
        .tp-gallery-item:hover .gallery-image {
          transform: scale(1.05);
        }
        
        .tp-gallery-slider-wrap {
          padding: 20px 0;
        }
        
        /* Ensure marquee container doesn't stretch */
        .tp-gallery-timing {
          display: flex;
          align-items: center;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .tp-gallery-item {
            width: 250px;
            height: 350px;
          }
          
          .tp-gallery-area {
            padding: 40px 0;
          }
        }
        
        @media (max-width: 576px) {
          .tp-gallery-item {
            width: 200px;
            height: 280px;
          }
        }
        
        /* Add green theme accent */
        .tp-gallery-item::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 8px;
          border: 2px solid transparent;
          transition: all 0.3s ease;
          pointer-events: none;
        }
        
        .tp-gallery-item:hover::after {
          border-color: #b5d334;
        }
      `}</style>
    </div>
  );
}