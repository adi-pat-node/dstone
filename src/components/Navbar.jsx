import { useState } from "react";

import { NAVIGATION_LINKS } from "../constants/index.jsx";
import { RiCloseLine, RiMenu3Line } from "@remixicon/react";
const Navbar = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const toggleMobile = () => {
    setIsMobileMenu(!isMobileMenu);
  };

  const handleClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementPos = targetElement.getBoundingClientRect().top;
      const offsetPos = elementPos + window.scrollY + offset;

      window.scrollTo({
        top: offsetPos,
        behavior: "smooth",
      });
    }
    setIsMobileMenu(false);
  };

  return (
    <div>
      <nav className="fixed left-0 right-0 z-50 lg:top-4">
        <div
          className="mx-auto hidden max-w-7xl   py-2 border border-white/30 backdrop-blur-lg lg:flex
       justify-center items-center rounded-full "
        >
          <div className="flex items-center justify-between gap-6">
            <div>
              <a href="/">
                <span className="uppercase">David Stones</span>
              </a>
            </div>
            <div className="">
              <ul className="flex items-center gap-4">
                {NAVIGATION_LINKS.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      onClick={(e) => handleClick(e, item.href)}
                      className="text-sm hover:text-stone-300"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="py-2 backdrop-blur-md lg:hidden">
          <div className="flex items-center justify-between">
            <div>
              <a href="#">
                <span className="pl-2 uppercase">David Stones</span>
              </a>
            </div>
            <div className="flex items-center">
              <button
                className="focus:outline-none lg:hidden"
                onClick={toggleMobile}
                aria-label={isMobileMenu ? "Close menu" : "Open menu"}
              >
                {isMobileMenu ? (
                  <RiCloseLine className="m-2 h-6 w-5" />
                ) : (
                  <RiMenu3Line className="m-2 h-6 w-5" />
                )}
              </button>
            </div>
          </div>
          {isMobileMenu && (
            <ul className="my-4 ml-4 flex flex-col gap-6 backdrop-blur-md">
              {NAVIGATION_LINKS.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className="block w-full text-lg"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
