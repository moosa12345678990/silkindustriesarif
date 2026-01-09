import React from "react";
import Link from "next/link";
import menu_data, { mobile_menu_data } from "@/data/menu-data";

export default function MobileMenus() {
  // Use mobile_menu_data if you want different mobile menu items
  // or use menu_data if you want the same menu for both
  const menusToDisplay = mobile_menu_data; // or menu_data

  return (
    <nav className="mobile-menu-simple">
      <ul className="mobile-menu-list">
        {menusToDisplay.map((menu) => (
          <li key={menu.id} className="mobile-menu-item">
            <Link href={menu.link} className="mobile-menu-link">
              {menu.title}
            </Link>
          </li>
        ))}
      </ul>

      <style jsx>{`
        .mobile-menu-simple {
          width: 100%;
        }

        .mobile-menu-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .mobile-menu-item {
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .mobile-menu-link {
          display: flex;
          align-items: center;
          padding: 18px 24px;
          color: #1a1a1a;
          text-decoration: none;
          font-size: 16px;
          font-weight: 500;
          transition: all 0.3s ease;
          background: transparent;
          border: none;
          width: 100%;
          text-align: left;
          cursor: pointer;
        }

        .mobile-menu-link:hover {
          background-color: #f8faf0;
          color: #b5d334;
          padding-left: 32px;
        }

        /* Active link styles */
        .mobile-menu-item.active .mobile-menu-link {
          color: #b5d334;
          background-color: rgba(181, 211, 52, 0.05);
          border-left: 4px solid #b5d334;
          font-weight: 600;
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .mobile-menu-link {
            padding: 16px 20px;
            font-size: 15px;
          }

          .mobile-menu-link:hover {
            padding-left: 28px;
          }
        }

        @media (max-width: 480px) {
          .mobile-menu-link {
            padding: 14px 16px;
            font-size: 14px;
          }

          .mobile-menu-link:hover {
            padding-left: 24px;
          }
        }
      `}</style>
    </nav>
  );
}