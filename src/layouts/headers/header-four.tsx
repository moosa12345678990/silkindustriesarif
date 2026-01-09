<<<<<<< HEAD
"use client";
=======
'use client';
>>>>>>> dee6b851c96f66a0b5fffb4588937b5f872992ec
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderMenus from "./header-menus";
<<<<<<< HEAD
import MobileOffcanvas from "@/components/offcanvas/mobile-offcanvas";
import logo from "../../../public/assets/img/ariflogo.png";
import logoWhite from "../../../public/assets/img/logo/logo-white.png";
import useStickyHeader from "@/hooks/use-sticky-header";

const HeaderFour = () => {
  const { isSticky, headerRef, headerFullWidth } = useStickyHeader(20);
  const [openOffCanvas, setOpenOffCanvas] = React.useState(false);
  useEffect(() => {
    headerFullWidth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <header className="tp-header-height" ref={headerRef}>
        <div
          id="header-sticky"
          className={`tp-header-area tp-header-mob-space tp-transparent pl-60 pr-60 z-index-9 ${isSticky ? 'header-sticky' : ''}`}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-2 col-6">
                <div className="tp-header-logo">
                  <Link className="logo-1" href="/">
                    <Image style={{ width: "auto", height: "auto" }} src={logo} alt="logo" width={200} height={200} />
                  </Link>
                  {/* <Link className="logo-2" href="/">
                    <Image style={{ width: "auto", height: "auto" }} src={logoWhite} alt="logo" width={85} height={26} />
                  </Link> */}
                </div>
              </div>
              <div className="col-xl-8 col-lg-9 d-none d-xl-block">
                <div className="tp-header-menu header-main-menu text-center">
                  <nav className="tp-main-menu-content">
                    {/* header menus */}
                    <HeaderMenus />
                    {/* header menus */}
                  </nav>
                </div>
              </div>
              <div className="col-xl-2 col-lg col-6">
                <div className="tp-header-bar text-end">
                  <button className="tp-offcanvas-open-btn" onClick={() => setOpenOffCanvas(true)}>
                    <span></span>
                    <span></span>
=======
import { Cart } from "@/components/svg";
import logo_1 from '@/assets/img/ariflogo.png';
import logo_2 from '@/assets/img/ariflogo.png';
import CartOffcanvas from "@/components/offcanvas/cart-offcanvas";
import MobileOffcanvas from "@/components/offcanvas/mobile-offcanvas";
import useStickyHeader from "@/hooks/use-sticky-header";

export default function HeaderFour() {
  const {isSticky, headerFullWidth, adjustMenuBackground} = useStickyHeader(20);
  const [openCartMini, setOpenCartMini] = React.useState(false);
  const [openOffCanvas, setOpenOffCanvas] = React.useState(false);
  
  useEffect(() => {
    headerFullWidth();
    adjustMenuBackground();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <>
      <header>
        <div id="header-sticky" className={`tp-header-3-area mt-35 z-index-5 ${isSticky?'header-sticky':''}`}>
          {/* Green gradient background overlay */}
          <span className="menu-bg" style={{
            background: 'linear-gradient(90deg, rgba(181,211,52,0.1) 0%, rgba(181,211,52,0.05) 100%)'
          }}></span>
          
          <div className="container container-1740">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-6 col-md-6 col-6">
                <div className="tp-header-logo tp-header-3-logo">
                  <Link className="logo-1" href="/">
                    <Image src={logo_1} alt="logo" />
                  </Link>
                  <Link className="logo-2" href="/">
                    <Image src={logo_2} alt="logo" />
                  </Link>
                </div>
              </div>
              
              <div className="col-xl-6 col-lg-6 d-none d-xl-block">
                <div className="tp-header-3-menu-wrap text-center">
                  <div className="tp-header-3-menu-box d-inline-flex align-items-center justify-content-between">
                    <div className="tp-header-3-menu header-main-menu">
                      <nav className="tp-main-menu-content">
                        {/* header menus */}
                        <HeaderMenus />
                        {/* header menus */}
                      </nav>
                    </div>
                    {/* <div className="tp-header-3-cart p-relative">
                      <button 
                        className="cartmini-open-btn" 
                        onClick={() => setOpenCartMini(true)}
                        style={{
                          backgroundColor: '#b5d334',
                          borderColor: '#b5d334'
                        }}
                      >
                        <span>
                          <Cart clr="white" />
                        </span>
                        <em style={{ backgroundColor: '#000', color: '#fff' }}>0</em>
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>
              
              <div className="col-xl-3 col-lg-6 col-md-6 col-6">
                <div className="tp-header-3-right d-flex align-items-center justify-content-end">
                  <div className="tp-header-3-social d-none d-sm-block">
                   
                    <Link 
                      href="https://www.instagram.com/arif.silkind/" 
                      className="social-icon"
                      style={{ color: '#b5d334' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#9cbb2d'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#b5d334'}
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </div>
                  <button 
                    onClick={() => setOpenOffCanvas(true)} 
                    className="tp-header-3-bar tp-offcanvas-open-btn d-xl-none"
                    style={{
                      backgroundColor: '#b5d334',
                      borderColor: '#b5d334',
                      color: '#000'
                    }}
                  >
                    <i className="fa-solid fa-bars"></i>
>>>>>>> dee6b851c96f66a0b5fffb4588937b5f872992ec
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

<<<<<<< HEAD
      {/* off canvas */}
      <MobileOffcanvas openOffcanvas={openOffCanvas} setOpenOffcanvas={setOpenOffCanvas} />
      {/* off canvas */}
    </>
  );
};

export default HeaderFour;
=======
      {/* cart mini */}
      <CartOffcanvas openCartMini={openCartMini} setOpenCartMini={setOpenCartMini} />
      {/* cart mini */}

      {/* off canvas */}
      <MobileOffcanvas openOffcanvas={openOffCanvas} setOpenOffcanvas={setOpenOffCanvas} />
      {/* off canvas */}

      {/* Add custom styles for the header theme */}
      <style jsx>{`
        .header-sticky {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: 0 5px 20px rgba(181, 211, 52, 0.1);
        }
        
        .header-sticky .menu-bg {
          background: linear-gradient(90deg, rgba(181,211,52,0.15) 0%, rgba(181,211,52,0.08) 100%) !important;
        }
        
        .tp-main-menu-content ul li a {
          color: #333;
          transition: all 0.3s ease;
        }
        
        .tp-main-menu-content ul li a:hover {
          color: #b5d334;
        }
        
        .tp-main-menu-content ul li.active > a {
          color: #b5d334;
        }
        
        .cartmini-open-btn {
          transition: all 0.3s ease;
        }
        
        .cartmini-open-btn:hover {
          background-color: #9cbb2d !important;
          border-color: #9cbb2d !important;
          transform: translateY(-2px);
        }
        
        .tp-header-3-bar:hover {
          background-color: #9cbb2d !important;
          border-color: #9cbb2d !important;
          transform: translateY(-2px);
        }
        
        .social-icon {
          transition: all 0.3s ease;
          margin: 0 8px;
          font-size: 18px;
        }
        
        .social-icon:hover {
          transform: translateY(-3px);
        }
        
        .tp-header-3-social {
          display: flex;
          gap: 15px;
        }
      `}</style>
    </>
  );
}
>>>>>>> dee6b851c96f66a0b5fffb4588937b5f872992ec
