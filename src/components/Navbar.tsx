import { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
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
      className={`${styles.paddingX} w-full  flex items-center py-1 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-11 h-11 object-contain" />
          <p className="text-white  text-sm font-semibold cursor-pointer">
            Florencia | <strong>Fullstack Engineer</strong>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link: link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-sm font-medium cursor-pointer`}
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
                    active === link.title ? "text-white" : "text-secondary"
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
