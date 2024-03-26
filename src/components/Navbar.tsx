import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/florencia-favicon-color.png";
import { BurguerIcon, CloseIcon } from "../icons";
type link = {
  id: string;
  title: string;
};
const navLinks:link[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];
export const Navbar = () => {
  const [active, setActive] = useState<string>("");
  // burguer menu state
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <nav
      className={`text-3xl z-10 text-left px-5 py-3 font-bold backdrop-blur-md fixed w-full bg-black/10 top-0 bg-black`}
    >
      <div className="w-[60%] max-w-7xl mx-auto flex justify-between items-center  ">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-16 h-2w-16 object-contain z-30" />
          <p className="text-black  text-sm font-semibold cursor-pointer">
            Florencia | <strong>Fullstack Engineer</strong>
          </p>
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
