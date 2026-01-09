import { IMenuDT } from "@/types/menu-d-t";

  // { title: 'MAIN HOME', link: '/', img: '/assets/img/menu/white-version/home-1.jpg' },
  //     { title: 'Fashion STUDIO', link: '/home-2', img: '/assets/img/menu/white-version/home-2.jpg' },
  //     { title: 'CREATIVE AGENCY', link: '/home-3', img: '/assets/img/menu/white-version/home-3.jpg' },
  //     { title: 'Digital Agency', link: '/home-4', img: '/assets/img/menu/white-version/home-4.jpg' },
  //     { title: 'DESIGN STUDIO', link: '/home-5', img: '/assets/img/menu/white-version/home-5.jpg' },
  //     { title: 'Minimal Shop', link: '/home-6', img: '/assets/img/menu/white-version/home-6.jpg' },
  //     { title: 'DESIGN STUDIO', link: '/home-7', img: '/assets/img/menu/white-version/home-7.jpg' },
  //     { title: 'showcase carousel', link: '/home-8', img: '/assets/img/menu/white-version/home-8.jpg' },
  //     { title: 'INTERACTIVE LINKS', link: '/home-9', img: '/assets/img/menu/white-version/home-9.jpg' },
  //     { title: 'wrapper slider', link: '/home-10', img: '/assets/img/menu/white-version/home-10.jpg' },
  //     { title: 'showcase parallax', link: '/home-11', img: '/assets/img/menu/white-version/home-11.jpg' },
  //     { title: 'horizontal', link: '/home-12', img: '/assets/img/menu/white-version/home-12.jpg' },

    // pages_mega_menu: {
    //   first: {
    //     title: 'LIST TYPES',
    //     submenus: [
    //       { title: 'ABOUT US', link: '/about-us' },
    //       { title: 'FAQ Page', link: '/faq' },
    //       { title: 'ABOUT ME', link: '/about-me' },
    //       { title: 'Pricing', link: '/pricing' },
    //       { title: 'Team Page', link: '/team' },
    //       { title: 'OUR CLIENTS', link: '/brand' },
    //       { title: 'Team Details', link: '/team-details' },
    //       { title: 'Register', link: '/register' },
    //       { title: 'OUR SERVICES', link: '/service' },
    //       { title: 'LogIn', link: '/login' },
    //       { title: 'SERVICES DETAILS', link: '/service-details' },
    //       { title: 'ERROR PAGE', link: '/error' },
    //     ]
    //   },
    //   second: {
    //     title: 'Shop Page',
    //     submenus: [
    //       { title: 'Shop Page', link: '/shop' },
    //       { title: 'Shop Details One', link: '/shop-details' },
    //       { title: 'Shop Details Two', link: '/shop-details-2' },
    //       { title: 'my account', link: '/account' },
    //       { title: 'Cart', link: '/cart' },
    //       { title: 'Checkout', link: '/checkout' },
    //       { title: 'Wishlist', link: '/wishlist' },
    //     ]
    //   },

    // }
    // portfolio_mega_menus: {
    //   first: {
    //     title: 'PORTFOLIO LIST',
    //     submenus: [
    //       {
    //         id:1,
    //         menu_lists: [
    //           { title: 'Standard', link: '/portfolio-standard' },
    //           { title: 'Interactive', link: '/home-10' },
    //           { title: 'random', link: '/portfolio-random' },
    //           { title: 'showcase parallax', link: '/home-11' },
    //           { title: 'Masonry random', link: '/portfolio-masonry' },
    //           { title: 'Vertical Carousel', link: '/home-12' },
    //           { title: 'wrapper', link: '/portfolio-wrapper' },
    //         ]
    //       },
    //       {
    //         id:2,
    //         menu_lists: [
    //           { title: 'horizontal', link: '/portfolio-showcase' },
    //           { title: 'Image Slider', link: '/home-7' },
    //           { title: 'wrapper Slider', link: '/home-11' },
    //           { title: 'parallax showcase', link: '/portfolio-showcase' },
    //           { title: 'Perspective Slider', link: '/home-9' },
    //         ]
    //       }
    //     ]
    //   },
    //   second: {
    //     submenus: [
    //       {
    //         id:1,
    //         title: 'List Layouts',
    //         menu_lists: [
    //           { title: 'two-columns', link: '/portfolio-grid-col-2' },
    //           { title: 'three-columns', link: '/portfolio-grid-col-3' },
    //           { title: 'three-columns Wide', link: '/portfolio-grid-col-3-fullwidth' },
    //           { title: 'four-columns', link: '/portfolio-grid-col-4' },
    //           { title: 'four-columns Wide', link: '/portfolio-grid-col-4-fullwidth' },
    //         ]
    //       },
    //       {
    //         id:2,
    //         title: 'PORTFOLIO SINGLES',
    //         menu_lists: [
    //           { title: 'Creative', link: '/portfolio-showcase-details-2' },
    //           { title: 'images Small', link: '/portfolio-details-1' },
    //           { title: 'Sliding', link: '/portfolio-details-2' },
    //           { title: 'Image Comparison', link: '/portfolio-details-comparison' },
    //           { title: 'Video', link: '/portfolio-details-video' },
    //           { title: 'CUSTOM LIGHT', link: '/portfolio-custom-light' },
    //           { title: 'Gallery', link: '/portfolio-showcase-details' },
    //           { title: 'Mockups', link: '/portfolio-details-3' },
    //         ]
    //       },
    //     ]
    //   }
    // }
const menu_data:IMenuDT[] = [
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



export default menu_data;

// mobile menus 
export const mobile_menu_data:{
  id: number;
  title: string;
  link: string;
}[] = [
  {
    id:1,
    title: 'Home',
    link: '/',
 
  },
  {
    id: 2,
    title: 'Pages',
    link: '#',
 
  },
  {
    id: 3,
    title: 'Portfolio',
    link: '/portfolio-standard',
  },
  {
    id: 4,
    title: 'Blog',
    link: '/blog-modern',
  },
  {
    id: 5,
    title: 'Contact',
    link: '/contact',
  }
]