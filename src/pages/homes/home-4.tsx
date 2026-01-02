"use client";
import { gsap } from "gsap";
import React, { useEffect } from "react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import HeaderFour from "@/layouts/headers/header-four";
import HeroBannerFour from "@/components/hero-banner/hero-banner-four";
import GalleryOne from "@/components/gallery/gallery-one";
import AboutThree from "@/components/about/about-three";
import BrandThree from "@/components/brand/brand-three";
import ProjectFour from "@/components/project/project-four";
import VideoThree from "@/components/video/video-three";
import ServiceFour from "@/components/service/service-four";
import ContactOne from "@/components/contact/contact-one";
import FooterFour from "@/layouts/footers/footer-four";
import { textInvert } from "@/utils/text-invert";
import { fadeAnimation, revelAnimationOne } from "@/utils/title-animation";
import { projectThreeAnimation } from "@/utils/project-anim";
import { ctaAnimation } from "@/utils/cta-anim";
import BrandFive from "@/components/brand/brand-three";
import VideoTwo from "@/components/video/video-two";
import VideOne from "@/components/video/video-one";
import ProjectTwo from "@/components/project/project-two";
import Wrapper from "@/layouts/wrapper";
import HeaderTwo from "@/layouts/headers/header-two";

// animation
import { bounceAnimation, heroBgAnimation, heroTitleAnim } from "@/utils/title-animation";
import { videoAnimTwo } from "@/utils/video-anim";
import { panelOneAnimation } from "@/utils/panel-animation";
import { awardAnimOne } from "@/utils/award-anim";
import { instagramAnim } from "@/utils/instagram-anim";
import { hoverBtn } from "@/utils/hover-btn";
import { aboutAnim } from "@/utils/about-anim";
import InstagramArea from "@/components/instagram/instagram-area";
import BrandOne from "@/components/brand/brand-one";
import BrandTwo from "@/components/brand/brand-two";
import BlogModern from "@/components/blog/blog-modern-area";
import FooterOne from "@/layouts/footers/footer-one";
const HomeFourMain = () => {
  useScrollSmooth();
  useEffect(() => {
    document.body.classList.add("tp-smooth-scroll");
    return () => {
      document.body.classList.remove("tp-smooth-scroll");
    };
  }, []);
  
  
  useGSAP(() => {
    const timer = setTimeout(() => {
      // hero animation
      heroTitleAnim();
      heroBgAnimation();
      // about animation
      aboutAnim()
      // bounce animation
      bounceAnimation();
      // video anim
    
      // panel animation
      panelOneAnimation();
      // award animation
      awardAnimOne();
      // instagram animation
      instagramAnim();
      hoverBtn();
    }, 100)
    return () => clearTimeout(timer);
  });

  
  useGSAP(() => {
    const timer = setTimeout(() => {
      fadeAnimation();
      revelAnimationOne();
      projectThreeAnimation();
      ctaAnimation();
      textInvert();
        instagramAnim();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>

      {/* header area start */}
      <HeaderFour />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>

            {/* hero area start */}
            <HeroBannerFour />
            {/* hero area end */}

            {/* gallery area start */}
            <GalleryOne />
            {/* gallery area end */}

            {/* about area start */}
            <AboutThree />
            {/* about area end */}

            <VideoTwo />
    
            <BrandTwo />
            {/* video area start */}
            {/* <VideoThree /> */}
            {/* video area end */}
            <ProjectTwo />


            <BlogModern />
            {/* service area start */}
            {/* <ServiceFour /> */}
            {/* service area end */}
            {/* <InstagramArea /> */}
            {/* contact area start */}
            {/* <ContactOne /> */}
            {/* contact area end */}
          
 
          </main>

          {/* footer area */}
          <FooterOne />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>

    
  );
};

export default HomeFourMain;
