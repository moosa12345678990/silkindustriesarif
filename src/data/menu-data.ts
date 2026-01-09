import { IMenuDT } from "@/types/menu-d-t";

const menu_data: IMenuDT[] = [
  {
    id: 1,
    title: 'Home',
    link: '/',
    mega_menu: false,
  },
  {
    id: 2,
    title: 'Products',
    link: '/blog-classic',
    mega_menu: false,
  },
  {
    id: 3,
    title: 'Manufacturing',
    link: '/blog-modern',
    mega_menu: false,
  },
  {
    id: 4,
    title: 'About',
    link: '/about-us',
    mega_menu: false,
  },
  {
    id: 5,
    title: 'Contact',
    link: '/contact',
    mega_menu: false,
  },
];

export default menu_data;

// mobile menus 
export const mobile_menu_data: {
  id: number;
  title: string;
  link: string;
}[] = [
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
    title: 'Manufacturing',
    link: '/blog-modern',
  },
  {
    id: 4,
    title: 'About',
    link: '/about-us',
  },
  {
    id: 5,
    title: 'Contact',
    link: '/contact',
  }
];