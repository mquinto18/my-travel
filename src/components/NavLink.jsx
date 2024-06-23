import React from "react";
import { Link } from "react-scroll";
function NavLink({ href, link }) {
  return (
    <li className="list-none cursor-pointer">
      <Link
        to={href}
        spy={true}
        smooth={true}
        duration={500}
        offset={-50}
        className="trasition-all duration-300"
      >
        {link}
      </Link>
    </li>
  );
}

export default NavLink;
