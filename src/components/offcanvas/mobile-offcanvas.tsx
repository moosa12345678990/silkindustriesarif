import React from "react";
import Image from "next/image";
import { Behance, CloseTwo, Dribble, InstagramTwo, Youtube } from "../svg";

// images
import logo from "@/assets/img/ariflogo.png";
import gallery_1 from "@/assets/img/menu/offcanvas/offcanvas-1.jpg";
import gallery_2 from "@/assets/img/menu/offcanvas/offcanvas-2.jpg";
import gallery_3 from "@/assets/img/menu/offcanvas/offcanvas-3.jpg";
import gallery_4 from "@/assets/img/menu/offcanvas/offcanvas-4.jpg";
import MobileMenus from "./mobile-menus";
import Link from "next/link";

const gallery_images = [gallery_1, gallery_2, gallery_3, gallery_4];

// prop type
type IProps = {
  openOffcanvas: boolean;
  setOpenOffcanvas: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileOffcanvas({ openOffcanvas, setOpenOffcanvas }: IProps) {
  return (
    <>
      <div className={`tp-offcanvas-area ${openOffcanvas ? "opened" : ""}`}>
        <div className="tp-offcanvas-wrapper">
          <div className="tp-offcanvas-top d-flex align-items-center justify-content-between">
<<<<<<< HEAD
            <div className="">
              <Link href="#">
                <Image src={logo} alt="logo" width={150} height={150} />
=======
            <div className="tp-offcanvas-logo">
              <Link href="#">
                <Image src={logo} alt="logo" />
>>>>>>> dee6b851c96f66a0b5fffb4588937b5f872992ec
              </Link>
            </div>
            <div className="tp-offcanvas-close">
              <button
                className="tp-offcanvas-close-btn"
                onClick={() => setOpenOffcanvas(false)}
              >
                <CloseTwo />
              </button>
            </div>
          </div>
          <div className="tp-offcanvas-main">
            {/* <div className="tp-offcanvas-content">
              <h3 className="tp-offcanvas-title">Hello There!</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
            </div> */}
            <div className="tp-main-menu-mobile d-xl-none">
              <MobileMenus />
            </div>
            <div className="tp-offcanvas-gallery">
              {/* <div className="row gx-2">
                {gallery_images.map((item, i) => (
                  <div className="col-md-3 col-3" key={i}>
                    <div className="tp-offcanvas-gallery-img fix">
                      <Link href="#">
                        <Image style={{ width: "100%", height: "auto" }} src={item} alt="gallery-img" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div> */}
            </div>
            <div className="tp-offcanvas-contact">
              <h3 className="tp-offcanvas-title sm">Information</h3>

              <ul>
                <li>
                  <Link href="tel:1245654">+92-21-32480006</Link>
                </li>
                <li>
                  <Link href="mailto:hello@diego.com">nouman@arifsilkindustries.com</Link>
                </li>
                <li>
                  <Link href="google.com/maps/place/Arif+Silk+Industries/@24.8350741,67.1368682,12z/data=!4m6!3m5!1s0x3eb341b8494aa0ff:0xf62ed37e27dba70d!8m2!3d24.9562964!4d67.0845775!16s%2Fg%2F11ycftbnpw?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D">Plot 07 Shafiq Colony Block 22 Federal B Area Karachi Sindh Pakistan</Link>
                </li>
              </ul>
            </div>
            <div className="tp-offcanvas-social">
              <h3 className="tp-offcanvas-title sm">Follow Us</h3>
              <ul>
                <li>
                  <Link href="https://www.instagram.com/arif.silkind/"><InstagramTwo /></Link>
                </li>
                {/* <li>
                  <Link href="#"><Dribble /></Link>
                </li>
                <li>
                  <Link href="#"> <Behance /></Link>
                </li>
                <li>
                  <Link href="#"><Youtube /></Link> */}
                {/* </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={() => setOpenOffcanvas(false)}
        className={`body-overlay ${openOffcanvas ? "opened" : ""}`}
      ></div>
    </>
  );
}
