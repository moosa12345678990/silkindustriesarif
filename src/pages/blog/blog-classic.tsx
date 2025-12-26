"use client";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import React from "react";

// internal imports
import HeaderEleven from "@/layouts/headers/header-eleven";
import FooterTwo from "@/layouts/footers/footer-two";
// animation
import { charAnimation } from "@/utils/title-animation";
import BlogClassicSlider from "@/components/blog/slider/blog-classic-slider";
import BlogClassicArea from "@/components/blog/blog-classic-area";
import HeaderFour from "@/layouts/headers/header-four";
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
const BlogClassicMain = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });
  
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
          <main className="pt-160">
            {/* blog classic hero start */}
          <ProjectTwo />
            {/* blog classic hero end */}

            {/* blog classic area area */}
            
            {/* blog classic area area */}
          </main>

          {/* footer area */}
          <FooterOne />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default BlogClassicMain;
