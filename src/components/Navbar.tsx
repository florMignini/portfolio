import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/florencia-logo-white-transparent.png";
import { BurguerIcon, CloseIcon } from "../icons";
import { navLinks, link } from "../data/navLinks";

export const Navbar = () => {
  const [active, setActive] = useState<string>("");
  // burguer menu state
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <nav
      className={`text-3xl z-10 text-left px-5 py-3 font-bold backdrop-blur-md fixed w-full h-20 bg-black/10 top-0 bg-black my-auto`}
    >
      <div className="w-[80%] lg:w-[60%] max-w-7xl mx-auto flex justify-between items-center  ">
        <Link
          to="/"
          className="flex items-center justify-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-36 h-16 object-contain z-30 " />
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link: link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-black" : "text-secondary"
              } hover:text-black text-sm font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        {/* mobile nav */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button
            className="w-7 h-7 object-contain flex 
            cursor-pointer mr-2"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? <CloseIcon /> : <BurguerIcon />}
          </button>

          {/* content */}
          <div
            className={`${
              !toggle ? `hidden` : `flex`
            } p-6 black-gradient absolute top-10 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-lg`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link: link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-black" : "text-secondary"
                  } font-poppins text-sm font-medium cursor-pointer`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
