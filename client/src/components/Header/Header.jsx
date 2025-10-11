import React, { useState, useRef, useEffect } from "react";
import { Search, ShoppingCart, User, Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [mobileActiveMenu, setMobileActiveMenu] = useState(null);
  const [mobileActiveSubmenu, setMobileActiveSubmenu] = useState(null);
  const timeoutRef = useRef(null);

  // Desktop hover handlers
  const handleMouseEnter = (menu) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveMenu(menu);
    setActiveSubmenu(null);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
      setActiveSubmenu(null);
    }, 150);
  };

  const handleSubmenuEnter = (submenu) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveSubmenu(submenu);
  };

  // Mobile click handlers
  const toggleMobileMenu = (menu) => {
    setMobileActiveMenu(mobileActiveMenu === menu ? null : menu);
    setMobileActiveSubmenu(null);
  };

  const toggleMobileSubmenu = (submenu) => {
    setMobileActiveSubmenu(mobileActiveSubmenu === submenu ? null : submenu);
  };

  // Navigation structure
  const navStructure = {
    home: {
      label: "Home",
      hasDropdown: false,
      items: [],
    },
    aboutUs: {
      label: "About Us",
      hasDropdown: false,
      items: [],
    },
    products: {
      label: "Products",
      hasDropdown: true,
      items: [
        { label: "Flood Light", link: "#" },
        { label: "Ceiling Fan", link: "#" },
        { label: "Switch Board", link: "#" },
        { label: "LED Bulb", link: "#" },
        { label: "Street Light", link: "#" },
        { label: "COB Light", link: "#" },
        { label: "Tube Light", link: "#" },
      ],
    },
    gallery: {
      label: "Gallery",
      hasDropdown: false,
    },
    blog: {
      label: "Blog",
      hasDropdown: false,
    },
    contacts: {
      label: "Contacts",
      hasDropdown: false,
    },
  };

  const galleryItems = {
    Gallery: {
      subItems: [
        { label: "Gallery 2-columns", link: "#" },
        { label: "Gallery 3-columns", link: "#" },
        { label: "Gallery 4-columns", link: "#" },
      ],
    },
    "404 Page": {
      subItems: [],
    },
  };

  return (
    <header className="w-full bg-gray-50 shadow-md relative z-50">
      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            {/* <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center rounded">
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Wolt
            </h1> */}
            <img
              src="Logo.png"
              className="h-full max-h-20 rounded w-full object-cover"
              alt="Logo"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {Object.entries(navStructure).map(([key, item]) => (
              <div
                key={key}
                className="relative"
                onMouseEnter={() => item.hasDropdown && handleMouseEnter(key)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href="#"
                  className={`px-4 md:px-7 xl:px-7 lg:px-7 py-2 text-sm md:text-[16px] lg:text-[16px] xl:text-[16px] font-medium rounded transition-colors duration-200 flex items-center ${
                    activeMenu === key
                      ? "text-yellow-400"
                      : "text-gray-900 hover:text-yellow-400"
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <span className="ml-1 text-gray-600 hover:text-yellow-400">
                      +
                    </span>
                  )}
                </a>

                {/* Dropdown Menu */}
                {item.hasDropdown &&
                  activeMenu === key &&
                  item.items.length > 0 && (
                    <div className="absolute left-0 top-full mt-0 w-56 bg-white shadow-lg border border-gray-200 rounded-b">
                      {item.items.map((subItem, index) => (
                        <a
                          key={index}
                          href={subItem.link}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-yellow-400 hover:text-gray-800 transition-colors duration-150"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  )}

                {/* Gallery Dropdown with nested items */}
                {key === "home" && activeMenu === "home" && (
                  <div className="absolute left-0 top-full mt-0 w-56 bg-white shadow-lg border border-gray-200 rounded-b">
                    {Object.entries(galleryItems).map(
                      ([galleryKey, galleryItem]) => (
                        <div
                          key={galleryKey}
                          className="relative"
                          onMouseEnter={() => handleSubmenuEnter(galleryKey)}
                        >
                          <a
                            href="#"
                            className={`px-4 py-3 text-sm transition-colors duration-150 flex items-center justify-between ${
                              activeSubmenu === galleryKey
                                ? "bg-yellow-400 text-gray-900"
                                : "text-gray-700 hover:bg-yellow-50"
                            }`}
                          >
                            {galleryKey}
                            {galleryItem.subItems.length > 0 && (
                              <span className="text-gray-600">+</span>
                            )}
                          </a>

                          {/* Nested Submenu */}
                          {galleryItem.subItems.length > 0 &&
                            activeSubmenu === galleryKey && (
                              <div className="absolute left-full top-0 ml-0 w-56 bg-white shadow-lg border border-gray-200">
                                {galleryItem.subItems.map(
                                  (nestedItem, index) => (
                                    <a
                                      key={index}
                                      href={nestedItem.link}
                                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-yellow-400 hover:text-gray-900 transition-colors duration-150"
                                    >
                                      {nestedItem.label}
                                    </a>
                                  )
                                )}
                              </div>
                            )}
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* <button
              className="p-2 text-gray-700 hover:text-gray-900 transition-colors"
              aria-label="User Account"
            >
              <User className="w-5 h-5" />
            </button>
            <button
              className="p-2 text-gray-700 hover:text-gray-900 relative transition-colors"
              aria-label="Shopping Cart"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-yellow-400 text-gray-900 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
            <button
              className="p-2 text-gray-700 hover:text-gray-900 transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button> */}

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="max-w-7xl mx-auto px-4 py-4">
            {Object.entries(navStructure).map(([key, item]) => (
              <div key={key} className="border-b border-gray-100">
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() => toggleMobileMenu(key)}
                      className="w-full flex items-center justify-between py-3 text-left text-gray-700 hover:text-gray-900 font-medium"
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          mobileActiveMenu === key ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Mobile Dropdown */}
                    {mobileActiveMenu === key && (
                      <div className="pl-4 pb-2">
                        {key === "home"
                          ? // Gallery items for Home
                            Object.entries(galleryItems).map(
                              ([galleryKey, galleryItem]) => (
                                <div key={galleryKey}>
                                  {galleryItem.subItems.length > 0 ? (
                                    <>
                                      <button
                                        onClick={() =>
                                          toggleMobileSubmenu(galleryKey)
                                        }
                                        className="w-full flex items-center justify-between py-2 text-left text-sm text-gray-600 hover:text-gray-900"
                                      >
                                        {galleryKey}
                                        <ChevronDown
                                          className={`w-4 h-4 transition-transform duration-200 ${
                                            mobileActiveSubmenu === galleryKey
                                              ? "rotate-180"
                                              : ""
                                          }`}
                                        />
                                      </button>

                                      {/* Nested Submenu */}
                                      {mobileActiveSubmenu === galleryKey && (
                                        <div className="pl-4">
                                          {galleryItem.subItems.map(
                                            (nestedItem, index) => (
                                              <a
                                                key={index}
                                                href={nestedItem.link}
                                                className="block py-2 text-sm text-gray-500 hover:text-gray-900"
                                              >
                                                {nestedItem.label}
                                              </a>
                                            )
                                          )}
                                        </div>
                                      )}
                                    </>
                                  ) : (
                                    <a
                                      href="#"
                                      className="block py-2 text-sm text-gray-600 hover:text-gray-900"
                                    >
                                      {galleryKey}
                                    </a>
                                  )}
                                </div>
                              )
                            )
                          : // Regular dropdown items
                            item.items.map((subItem, index) => (
                              <a
                                key={index}
                                href={subItem.link}
                                className="block py-2 text-sm text-gray-600 hover:text-gray-900"
                              >
                                {subItem.label}
                              </a>
                            ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href="#"
                    className="block py-3 text-gray-700 hover:text-gray-900 font-medium"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
