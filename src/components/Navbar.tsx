import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import logo from "../assets/florencia-favicon-color.png";
type link = {
  id: string;
  title: string;
};
const navLink = [
  { id: "1", title: "About" },
  { id: "2", title: "Work" },
  { id: "3", title: "Contact" },
];
export const Navbar = () => {
  const [active, setActive] = useState("");
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
          {navLink.map((link: link) => (
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
      </div>
    </nav>
  );
};
