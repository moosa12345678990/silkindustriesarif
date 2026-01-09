import banner1 from "../../../public/assets/img/menu/shop-menu/banner-1.jpg";
import menu_data from "@/data/menu-data";
import Image from "next/image";
import Link from "next/link";

const HeaderMenus = () => {
  return (
    <ul className="green-theme-menu">
      {menu_data.map((menu) => (
        <li key={menu.id} className="has-dropdown">
          <Link href={menu.link} className="nav-link">
            {menu.title}
          </Link>
          
          {menu.home_menus ? (
            <div className="tp-submenu submenu tp-mega-menu green-mega-menu">
              <div className="tp-menu-fullwidth">
                <div className="tp-homemenu-wrapper">
                  <div className="row gx-25 row-cols-xl-6 row-cols-lg-2 row-cols-md-2 row-cols-1">
                    {menu.home_menus.map((home_menu, i) => (
                      <div key={i} className="col homemenu">
                        <div className="homemenu-thumb-wrap mb-20">
                          <div className="homemenu-thumb fix">
                            <Link href={home_menu.link}>
                              <Image 
                                style={{ width: "auto", height: "auto" }} 
                                src={home_menu.img} 
                                alt="home-img" 
                                width={250} 
                                height={235}
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="homemenu-content text-center">
                          <h4 className="homemenu-title" style={{
    color: "#ffffff",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    fontSize: "15px",
  }}>
                            <Link 
                              href={home_menu.link}
                              className="homemenu-link"
                            >
                              {home_menu.title}
                            </Link>
                          </h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : menu.pages_mega_menu ? (
            <div className="tp-submenu submenu tp-mega-menu green-mega-menu">
              <div className="tp-megamenu-wrapper">
                <div className="row gx-50">
                  <div className="col-xl-8">
                    <div className="tp-megamenu-list-box">
                      <div className="row gx-50">
                        <div className="col-xl-8">
                          <div className="tp-megamenu-list">
                            <h4 className="tp-megamenu-title green-submenu-title">
                              {menu.pages_mega_menu.first.title}
                            </h4>
                            <div className="tp-megamenu-list-wrap">
                              <ul>
                                {menu.pages_mega_menu.first.submenus.map(
                                  (psm, i) => (
                                    <li key={i}>
                                      <Link 
                                        href={psm.link}
                                        className="mega-menu-link"
                                      >
                                        {psm.title}
                                      </Link>
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4">
                          <div className="tp-megamenu-list tp-megamenu-list-2">
                            <h4 className="tp-megamenu-title green-submenu-title">
                              {menu.pages_mega_menu.second.title}
                            </h4>
                            <div className="tp-megamenu-list-wrap">
                              <ul>
                                {menu.pages_mega_menu.second.submenus.map(
                                  (psm, i) => (
                                    <li key={i}>
                                      <Link 
                                        href={psm.link}
                                        className="mega-menu-link"
                                      >
                                        {psm.title}
                                      </Link>
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4">
                    <div className="tp-megamenu-shop-style">
                      <div className="tp-shop-banner-left p-relative">
                        <div className="tp-shop-banner-thumb">
                          <Image 
                            style={{ width: "100%", height: "auto" }} 
                            src={banner1} 
                            alt="image" 
                          />
                        </div>
                        <div className="tp-shop-banner-content">
                          <h4 className="tp-shop-banner-title green-banner-title">
                            Sale
                          </h4>
                          <span className="green-banner-subtitle">
                            20% Off all Shoes
                          </span>
                          <Link 
                            className="tp-shop-btn green-shop-btn" 
                            href="/shop"
                          >
                            Shop Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : menu.portfolio_mega_menus ? (
            <div className="tp-submenu submenu tp-mega-menu green-mega-menu">
              <div className="tp-menu-fullwidth">
                <div className="tp-megamenu-portfolio p-relative">
                  <div className="tp-megamenu-portfolio-banner">
                    <Image
                      style={{ width: "100%", height: "auto" }}
                      src="/assets/img/menu/portfolio-menu/portfolio.png"
                      alt="image"
                      width={438}
                      height={480}
                    />
                  </div>
                  <div className="row gx-50">
                    <div className="col-xxl-9 col-xl-10">
                      <div className="tp-megamenu-list-box">
                        <div className="row gx-50">
                          <div className="col-xxl-5 col-xl-6">
                            <div className="tp-megamenu-list">
                              <h4 className="tp-megamenu-title green-submenu-title">
                                {menu.portfolio_mega_menus.first.title}
                              </h4>
                              <div className="tp-megamenu-list-wrap tp-portfolio-menu-style">
                                <div className="row">
                                  {menu.portfolio_mega_menus.first.submenus.map(
                                    (portSm, i) => (
                                      <div key={i} className="col-lg-6">
                                        <ul>
                                          {portSm.menu_lists.map((psm) => (
                                            <li key={psm.title}>
                                              <Link 
                                                href={psm.link}
                                                className="mega-menu-link"
                                              >
                                                {psm.title}
                                              </Link>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    )
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>

                          {menu.portfolio_mega_menus.second.submenus.map(
                            (portSm2, i) => (
                              <div key={i} className="col-xxl-3 col-xl-3">
                                <div className="tp-megamenu-list tp-megamenu-list-2 ml-20">
                                  <h4 className="tp-megamenu-title green-submenu-title">
                                    {portSm2.title}
                                  </h4>
                                  <div className="tp-megamenu-list-wrap">
                                    <ul>
                                      {portSm2.menu_lists.map((psm) => (
                                        <li key={psm.title}>
                                          <Link 
                                            href={psm.link}
                                            className="mega-menu-link"
                                          >
                                            {psm.title}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 d-none d-xxl-block">
                      <div className="tp-megamenu-portfolio-text">
                        <h4 className="green-accent-number">60+</h4>
                        <span className="green-accent-text">
                          Pre-built demo home page
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : menu.dropdown_menus ? (
            <ul className="tp-submenu submenu green-submenu">
              {menu.dropdown_menus.map((mm, i) => (
                <li key={i}>
                  <Link 
                    href={mm.link}
                    className="dropdown-link"
                  >
                    {mm.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </li>
      ))}
      
      {/* Add custom styles for the green theme */}
      <style jsx>{`
        /* MAIN MENU OPTIONS - GREEN COLOR */
        .green-theme-menu li > a.nav-link {
          color: #b5d334 !important; /* Changed from #333 to green */
          font-weight: 600; /* Made bolder */
          padding: 12px 18px;
          position: relative;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-size: 15px;
        }
        
        .green-theme-menu li > a.nav-link:hover {
          color: #9cbb2d !important; /* Darker green on hover */
          transform: translateY(-1px);
        }
        
        .green-theme-menu li.active > a.nav-link,
        .green-theme-menu li.current-menu-item > a.nav-link {
          color: #000 !important; /* Black for active item */
          font-weight: 700;
        }
        
        .green-theme-menu li > a.nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 18px;
          right: 18px;
          height: 2px;
          background-color: #b5d334;
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }
        
        .green-theme-menu li > a.nav-link:hover::after {
          transform: scaleX(1);
        }
        
        .green-theme-menu li.active > a.nav-link::after,
        .green-theme-menu li.current-menu-item > a.nav-link::after {
          background-color: #000; /* Black underline for active */
          transform: scaleX(1);
        }
        
        /* Dropdown indicator */
        .green-theme-menu li.has-dropdown > a.nav-link::before {
          content: '⌄';
          margin-left: 5px;
          font-size: 12px;
          display: inline-block;
          transition: transform 0.3s ease;
        }
        
        .green-theme-menu li.has-dropdown:hover > a.nav-link::before {
          transform: rotate(180deg);
        }
        
        /* Mega menu styles */
        .green-mega-menu {
          background: #fff;
          border-top: 3px solid #b5d334;
          box-shadow: 0 15px 40px rgba(181, 211, 52, 0.15);
          border-radius: 0 0 10px 10px;
          padding: 30px !important;
        }
        
        .green-submenu-title {
          color: #000 !important; /* Black for section titles */
          font-size: 17px !important;
          font-weight: 700 !important;
          margin-bottom: 18px !important;
          padding-bottom: 12px !important;
          border-bottom: 2px solid #b5d334 !important;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .mega-menu-link {
          color: #555 !important;
          padding: 9px 0 !important;
          display: block;
          transition: all 0.3s ease;
          position: relative;
          font-weight: 500;
        }
        
        .mega-menu-link:hover {
          color: #b5d334 !important;
          padding-left: 15px !important;
          font-weight: 600;
        }
        
        .mega-menu-link::before {
          content: "›";
          position: absolute;
          left: -12px;
          opacity: 0;
          color: #b5d334;
          transition: all 0.3s ease;
          font-size: 18px;
          font-weight: bold;
        }
        
        .mega-menu-link:hover::before {
          left: 0;
          opacity: 1;
        }
        
        /* Home menu thumbnails */
        .homemenu-link {
          color: #333;
          font-weight: 600;
          transition: all 0.3s ease;
          font-size: 15px;
        }
        
        .homemenu-link:hover {
          color: #b5d334;
        }
        
        .homemenu-thumb {
          overflow: hidden;
          border-radius: 8px;
          border: 2px solid transparent;
          transition: all 0.3s ease;
        }
        
        .homemenu-thumb:hover {
          border-color: #b5d334;
        }
        
        .homemenu-thumb img {
          transition: transform 0.5s ease;
        }
        
        .homemenu-thumb:hover img {
          transform: scale(1.05);
        }
        
        /* Shop banner styles */
        .green-banner-title {
          color: #b5d334 !important;
          font-size: 36px !important;
          font-weight: 800 !important;
          margin-bottom: 8px !important;
          text-transform: uppercase;
        }
        
        .green-banner-subtitle {
          color: #000 !important; /* Black for subtitle */
          font-size: 17px !important;
          display: block;
          margin-bottom: 20px !important;
          font-weight: 500;
        }
        
        .green-shop-btn {
          background-color: #b5d334 !important;
          color: #000 !important;
          border: 2px solid #b5d334 !important;
          padding: 12px 28px !important;
          border-radius: 6px !important;
          font-weight: 700 !important;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          transition: all 0.3s ease !important;
        }
        
        .green-shop-btn:hover {
          background-color: #000 !important;
          color: #b5d334 !important;
          border-color: #000 !important;
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(181, 211, 52, 0.4);
        }
        
        /* Portfolio menu styles */
        .green-accent-number {
          color: #b5d334 !important;
          font-size: 52px !important;
          font-weight: 800 !important;
          line-height: 1 !important;
        }
        
        .green-accent-text {
          color: #000 !important; /* Black for text */
          font-size: 16px !important;
          display: block;
          margin-top: 8px !important;
          font-weight: 500;
        }
        
        /* Dropdown submenu styles */
        .green-submenu {
          background: #fff !important;
          border-top: 3px solid #b5d334 !important;
          box-shadow: 0 15px 40px rgba(181, 211, 52, 0.15) !important;
          border-radius: 0 0 8px 8px !important;
          padding: 15px 0 !important;
          min-width: 220px !important;
        }
        
        .dropdown-link {
          color: #555 !important;
          padding: 10px 30px !important;
          display: block !important;
          transition: all 0.3s ease !important;
          font-weight: 500;
        }
        
        .dropdown-link:hover {
          color: #b5d334 !important;
          background-color: rgba(181, 211, 52, 0.08) !important;
          padding-left: 35px !important;
          font-weight: 600;
        }
        
        /* Responsive adjustments */
        @media (max-width: 1199px) {
          .green-theme-menu li > a.nav-link {
            padding: 10px 15px;
            font-size: 14px;
          }
          
          .green-submenu-title {
            font-size: 16px !important;
          }
        }
        
        @media (max-width: 991px) {
          .green-theme-menu li > a.nav-link {
            color: #b5d334 !important;
            padding: 12px 20px;
            border-bottom: 1px solid rgba(181, 211, 52, 0.1);
          }
          
          .green-theme-menu li.active > a.nav-link {
            color: #000 !important;
            background-color: rgba(181, 211, 52, 0.05);
          }
        }
      `}</style>
    </ul>
  );
};

export default HeaderMenus;