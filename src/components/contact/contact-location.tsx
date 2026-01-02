import React from "react";
import Image from "next/image";
import Link from "next/link";
import factoryimage from "@/assets/img/textile.jpg"
// Updated location data for textile company
const location_data = [
  {
    id: 1,
    img: "/assets/img/factory.jpg", // You'll need to add this image
    country: "Pakistan",
    time: "9:00 AM - 6:00 PM GMT+5",
    location_title: "Our Factory",
    address: "Plot No. 07, Shafiq Mill Colony<br />Block 22 Gulberg Town",
    city: "Karachi",
    phone: "+92-21-32480006",
    email: "nouman@arifsilkindustries.com",
    google_maps_link: "https://www.google.com/maps/place/Arif+Silk+Industries/@24.9144786,66.9749294,12z/data=!4m6!3m5!1s0x3eb341b8494aa0ff:0xf62ed37e27dba70d!8m2!3d24.9562964!4d67.0845775!16s%2Fg%2F11ycftbnpw?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D",
    icon: "🏭"
  },
  {
    id: 2,
    img: "/assets/img/textile.jpg", // You'll need to add this image
    country: "Pakistan",
    time: "9:00 AM - 6:00 PM GMT+5",
    location_title: "Our Office",
    address: "Textile Plaza",
    city: "Karachi",
    phone: "+92-21-32480006",
    email: "nouman@arifsilkindustries.com",
    google_maps_link: "https://www.google.com/maps/place/Textile+Plaza/@24.8498125,66.9971126,17z/data=!3m1!4b1!4m6!3m5!1s0x3eb33e01f1955555:0xa1db12f43b5d9ada!8m2!3d24.8498125!4d66.9996875!16s%2Fg%2F11g6vkm2pw?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D",
    icon: "🏢"
  },
];

const ContactLocation = () => {
  return (
    <div className="contact-locations-area">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center mb-60">
          <span className="section-subtitle">Our Locations</span>
          <h2 className="section-title">Visit Our Premises</h2>
          <div className="section-divider">
            <div className="divider-line"></div>
            <div className="divider-dot"></div>
            <div className="divider-line"></div>
          </div>
          <p className="section-description">
            Connect with us at our factory or office locations in Karachi. We're here to serve your textile needs.
          </p>
        </div>

        {/* Location Cards */}
        <div className="row justify-content-center">
          {location_data.map((item) => (
            <div key={item.id} className="col-xl-6 col-lg-6 mb-30">
              <div className="location-card green-location-card">
                {/* Location Header with Image */}
                <div className="location-card-header">
                  <div className="location-image-wrapper">
                    <div className="location-icon-badge">
                      <span className="location-icon">{item.icon}</span>
                      <span className="location-type">{item.location_title.split(" ")[1]}</span>
                    </div>
                    <Image 
                      src={item.img} 
                      alt={item.location_title}
                      width={600}
                      height={300}
                      className="location-image"
                    />
                    <div className="location-overlay"></div>
                    <div className="location-country-badge">
                      <span className="country-flag">🇵🇰</span>
                      <span className="country-name">{item.country}</span>
                    </div>
                  </div>
                </div>

                {/* Location Content */}
                <div className="location-card-content">
                  {/* Location Title */}
                  <div className="location-title-wrapper">
                    <h3 className="location-title">{item.location_title}</h3>
                    <div className="location-time">
                      <i className="fa-regular fa-clock"></i>
                      <span>{item.time}</span>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="location-address mb-20">
                    <h4 className="address-title">
                      <i className="fa-solid fa-location-dot" style={{color: '#b5d334', marginRight: '10px'}}></i>
                      Address
                    </h4>
                    <p className="address-text" dangerouslySetInnerHTML={{ __html: item.address }}></p>
                    <p className="address-city">{item.city}</p>
                  </div>

                  {/* Contact Information */}
                  <div className="location-contact-info">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="contact-info-item mb-15">
                          <h5 className="contact-info-title">
                            <i className="fa-solid fa-phone" style={{color: '#b5d334', marginRight: '8px'}}></i>
                            Phone
                          </h5>
                          <a href={`tel:${item.phone}`} className="contact-info-link">
                            {item.phone}
                          </a>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="contact-info-item mb-15">
                          <h5 className="contact-info-title">
                            <i className="fa-solid fa-envelope" style={{color: '#b5d334', marginRight: '8px'}}></i>
                            Email
                          </h5>
                          <a href={`mailto:${item.email}`} className="contact-info-link">
                            {item.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="location-actions mt-25">
                    <div className="row g-3">
                      <div className="col-md-6">
                        <a 
                          href={item.google_maps_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-green w-100"
                        >
                          <i className="fa-solid fa-map-location-dot" style={{marginRight: '8px'}}></i>
                          Google Maps
                        </a>
                      </div>
                      <div className="col-md-6">
                        <a 
                          href={`tel:${item.phone}`}
                          className="btn btn-solid-green w-100"
                        >
                          <i className="fa-solid fa-phone" style={{marginRight: '8px'}}></i>
                          Call Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="location-notes text-center mt-50">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="location-note-card">
                <i className="fa-solid fa-info-circle note-icon"></i>
                <h4 className="note-title">Business Hours</h4>
                <p className="note-text">
                  Both our factory and office operate from <strong>Monday to Saturday, 9:00 AM to 6:00 PM</strong> (GMT+5). 
                  We're closed on Sundays and public holidays.
                </p>
                <p className="note-text-small">
                  For after-hours inquiries, please email us and we'll respond the next business day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .contact-locations-area {
          padding: 100px 0;
          background: linear-gradient(135deg, #f8f9f8 0%, #f0f4eb 100%);
          position: relative;
          overflow: hidden;
        }
        
        .contact-locations-area::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #b5d334, #cde16a, #b5d334);
        }
        
        /* Section Header Styles */
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
          margin-bottom: 15px;
          padding: 8px 20px;
          background: rgba(181, 211, 52, 0.1);
          border-radius: 30px;
        }
        
        .section-title {
          font-size: 42px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 25px;
          line-height: 1.2;
        }
        
        .section-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 25px;
        }
        
        .divider-line {
          width: 60px;
          height: 2px;
          background: #b5d334;
        }
        
        .divider-dot {
          width: 8px;
          height: 8px;
          background: #b5d334;
          border-radius: 50%;
          margin: 0 15px;
        }
        
        .section-description {
          font-size: 18px;
          color: #6b7280;
          line-height: 1.7;
          max-width: 700px;
          margin: 0 auto;
        }
        
        /* Location Card Styles */
        .green-location-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(181, 211, 52, 0.1);
          transition: all 0.3s ease;
          height: 100%;
        }
        
        .green-location-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
          border-color: #b5d334;
        }
        
        .location-card-header {
          position: relative;
          height: 250px;
        }
        
        .location-image-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        
        .location-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .green-location-card:hover .location-image {
          transform: scale(1.05);
        }
        
        .location-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.4));
        }
        
        .location-icon-badge {
          position: absolute;
          top: 20px;
          left: 20px;
          z-index: 2;
          background: rgba(181, 211, 52, 0.95);
          color: white;
          padding: 12px 15px;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(181, 211, 52, 0.3);
        }
        
        .location-icon {
          font-size: 28px;
          margin-bottom: 5px;
        }
        
        .location-type {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        
        .location-country-badge {
          position: absolute;
          bottom: 20px;
          left: 20px;
          z-index: 2;
          background: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 8px 15px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          gap: 8px;
          backdrop-filter: blur(10px);
        }
        
        .country-flag {
          font-size: 20px;
        }
        
        .country-name {
          font-size: 14px;
          font-weight: 600;
        }
        
        .location-card-content {
          padding: 30px;
        }
        
        .location-title-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 25px;
          padding-bottom: 15px;
          border-bottom: 2px solid #f0f0f0;
        }
        
        .location-title {
          font-size: 24px;
          font-weight: 700;
          color: #1f2937;
          margin: 0;
        }
        
        .location-time {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #666;
          font-size: 14px;
          background: rgba(181, 211, 52, 0.1);
          padding: 6px 12px;
          border-radius: 20px;
        }
        
        .location-time i {
          color: #b5d334;
        }
        
        .address-title {
          font-size: 16px;
          font-weight: 600;
          color: #000;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
        }
        
        .address-text {
          color: #444;
          font-size: 15px;
          line-height: 1.6;
          margin-bottom: 5px;
        }
        
        .address-city {
          color: #666;
          font-size: 14px;
          font-weight: 600;
        }
        
        .contact-info-title {
          font-size: 14px;
          font-weight: 600;
          color: #666;
          margin-bottom: 5px;
          display: flex;
          align-items: center;
        }
        
        .contact-info-link {
          color: #000;
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          transition: color 0.3s ease;
        }
        
        .contact-info-link:hover {
          color: #b5d334;
        }
        
        /* Button Styles */
        .btn-outline-green {
          background: transparent;
          color: #b5d334;
          border: 2px solid #b5d334;
          padding: 12px 20px;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        
        .btn-outline-green:hover {
          background: #b5d334;
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(181, 211, 52, 0.3);
        }
        
        .btn-solid-green {
          background: #b5d334;
          color: #000;
          border: 2px solid #b5d334;
          padding: 12px 20px;
          border-radius: 8px;
          font-weight: 700;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        
        .btn-solid-green:hover {
          background: #000;
          color: #b5d334;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(181, 211, 52, 0.3);
        }
        
        /* Notes Section */
        .location-note-card {
          background: white;
          padding: 30px;
          border-radius: 12px;
          border-left: 4px solid #b5d334;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
        }
        
        .note-icon {
          font-size: 32px;
          color: #b5d334;
          margin-bottom: 15px;
        }
        
        .note-title {
          font-size: 20px;
          font-weight: 700;
          color: #000;
          margin-bottom: 10px;
        }
        
        .note-text {
          color: #666;
          line-height: 1.6;
          margin-bottom: 10px;
        }
        
        .note-text-small {
          color: #888;
          font-size: 14px;
          line-height: 1.5;
          margin: 0;
        }
        
        /* Responsive Styles */
        @media (max-width: 768px) {
          .contact-locations-area {
            padding: 60px 0;
          }
          
          .section-title {
            font-size: 32px;
          }
          
          .section-description {
            font-size: 16px;
            padding: 0 20px;
          }
          
          .location-card-header {
            height: 200px;
          }
          
          .location-card-content {
            padding: 20px;
          }
          
          .location-title-wrapper {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
          
          .location-title {
            font-size: 20px;
          }
        }
        
        @media (max-width: 576px) {
          .section-title {
            font-size: 28px;
          }
          
          .section-subtitle {
            font-size: 12px;
            padding: 6px 15px;
          }
          
          .btn-outline-green,
          .btn-solid-green {
            padding: 10px 15px;
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactLocation;