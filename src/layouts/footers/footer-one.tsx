"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from '@/assets/img/ariflogo.png';
import { footerOneAnimation, footerTwoAnimation } from "@/utils/footer-anim";

const footer_links = [
  {
    id: 1,
    title: 'Home',
    link: '/',
  },
  {
    id: 2,
    title: 'Products',
    link: '/blog-classic',
  },
  {
    id: 3,
    title: 'manufacturing',
    link: '/blog-modern',
  },
  {
    id: 4,
    title: 'about',
    link: '/about-us',
  },
  {
    id: 5,
    title: 'contact',
    link: '/contact',
  },
];
export default function FooterOne() {
  const [isActive, setIsActive] = React.useState(false);
  useEffect(() => {
    footerOneAnimation();
  },[])
  return (
    <footer>
      {/* footer area start */}
      <div className="tp-footer-area black-bg pt-90">
        <div className="container-fluid">
          <div className="tp-footer-wrap">
            <div className="row align-items-end">
              <div className="col-xl-5 col-lg-6">
                <div className="tp-footer-menu menu-anim">
                  <ul className="counter-row tp-text-anim">
                    {footer_links.map((item, i) => (
                      <li
                        key={i}
                        onMouseEnter={() => setIsActive(true)}
                        onMouseLeave={() => setIsActive(false)}
                        className={isActive ? "" : "active"}
                      >
                        <Link href={item.link}>{item.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6">
                <div className="tp-footer-middle-wrap">
                  <div className="tp-footer-content">
                    <h4 className="tp-footer-big-title footer-big-text">{"Let's"} Contact!</h4>
                  </div>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="tp-footer-widget">
                        <h4 className="tp-footer-title tp_fade_bottom">
                          Say hello at:
                        </h4>
                        <div className="tp-footer-widget-info">
                          <div className="tp-footer-widget-info-mail tp_fade_bottom">
                            <Link href="mailto:nouman@arifsilkindustries.com">
                              nouman@arifsilkindustries.com
                            </Link>
                          </div>
                          <div className="tp-footer-widget-info-location tp_fade_bottom">
                            <Link
                              href="https://www.google.com/maps/place/Arif+Silk+Industries/@24.8578194,67.0107154,13z/data=!4m6!3m5!1s0x3eb341b8494aa0ff:0xf62ed37e27dba70d!8m2!3d24.9562964!4d67.0845775!16s%2Fg%2F11ycftbnpw?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D"
                              target="_blank"
                            >
                             X34M+GR Block 22, Shafiq Mill Colony Gulberg Town, Karachi, Pakistan
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="tp-footer-widget">
                        <h4 className="tp-footer-title tp_fade_bottom">
                          Stalk us
                        </h4>
                        <ul className="tp-footer-widget-social">
                          <li className="tp_fade_bottom">
                            <Link href="https://www.instagram.com/arif.silkind/">Instagram</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer area end */}

        {/* copyright area start */}
        <div className="container-fluid">
          <div className="tp-copyright-wrap">
            <div className="row align-items-center">
              <div className="col-xl-6 col-md-4">
                <div className="">
                  <Link href="/">
                    <Image src={logo} alt="logo"  width={200} height={200}/>
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 col-md-8">
                <div className="tp-copyright-text text-center text-md-end">
                  <p>
                    Copyright © {new Date().getFullYear()} Arif Silk Industries. All rights
                    reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* copyright area end */}

        {/* Developed by Marvisto section */}
        <div className="container-fluid">
          <div className="tp-developed-by-wrap">
            <div className="row">
              <div className="col-12">
                <div className="tp-developed-by-content">
                  <p className="tp-developed-by-text">
                    <span>Developed by </span>
                    <Link 
                      href="https://marvisto.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="tp-developed-by-link"
                    >
                      Marvisto
                    </Link>
                    <span className="tp-developed-by-emoji">✨</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Styles for the Developed by section */}
      <style jsx>{`
        .tp-developed-by-wrap {
          padding: 25px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          margin-top: 30px;
        }
        
        .tp-developed-by-content {
          text-align: center;
        }
        
        .tp-developed-by-text {
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
          font-weight: 400;
          letter-spacing: 0.5px;
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          flex-wrap: wrap;
        }
        
        .tp-developed-by-link {
          color: #B5D334;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          position: relative;
          padding: 2px 5px;
          border-radius: 4px;
        }
        
        .tp-developed-by-link:hover {
          color: #ffffff;
          background: rgba(181, 211, 52, 0.2);
          transform: translateY(-1px);
        }
        
        .tp-developed-by-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: #B5D334;
          transition: width 0.3s ease;
        }
        
        .tp-developed-by-link:hover::after {
          width: 100%;
        }
        
        .tp-developed-by-emoji {
          margin-left: 5px;
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.1);
          }
        }
        
        @media (max-width: 768px) {
          .tp-developed-by-wrap {
            padding: 20px 0;
            margin-top: 20px;
          }
          
          .tp-developed-by-text {
            font-size: 13px;
            flex-direction: column;
            gap: 8px;
          }
          
          .tp-developed-by-emoji {
            margin-left: 0;
            margin-top: 5px;
          }
        }
      `}</style>
    </footer>
  );
}