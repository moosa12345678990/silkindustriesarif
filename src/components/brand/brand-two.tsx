import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";


import client1 from "@/assets/img/clientlogos/alkaram.png"
import client2 from "@/assets/img/clientlogos/american.png"
import client3 from "@/assets/img/clientlogos/images.png"
import client4 from "@/assets/img/clientlogos/kelvin.png"
import client5 from "@/assets/img/clientlogos/target.png"
import client6 from "@/assets/img/clientlogos/yunus.png"


 // brand images
const brand_images = [client1, client2, client3, client4, client5, client6];

export default function BrandTwo() {
  return (
    <div
      className="ab-brand-area pt-120 pb-120 black-bg-2"
      style={{
        backgroundImage:
          "url(/assets/img/inner-about/brand/brand-bg-shape.png)",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="ab-brand-title-box mb-100">
              <h4 className="ab-brand-title">Our Indirect Clients</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="ab-brand-wrapper mb-80">
              <div className="swiper-container ab-brand-slide-active">
                <Marquee speed={100} loop={0} className="ab-brand-slide-wrap">
                  {brand_images.map((b, i) => (
                    <div
                      key={i}
                      className="ab-brand-item"
                    >
                      <Image src={b}   width={200}  height={200}  alt="brand" />
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-7 col-lg-9">
            <div className="ab-brand-content tp_title_anim">
              <p>
                We belive in creating partnerships based on honesty and true
                connection. That is why some of the biggest companies stayed with
                us for years.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
