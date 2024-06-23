import React from "react";
import { Link } from "react-scroll";
const MobileNavLink = ({ href, link }) => {
  return (
    <li className="hover:bg-[#0B2126] rounded-full px-5 py-2 hover:text-white cursor-pointer transition-colors duration-100">
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
};

export default MobileNavLink;
