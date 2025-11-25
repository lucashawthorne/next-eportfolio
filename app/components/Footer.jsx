import { assets } from "@/assets/assets";
import Image from "next/image";
import { FaArrowUp } from "react-icons/fa";

const Footer = ({ darkMode }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <a href="#top" className="footer__logo--anchor relative inline-block">
          <Image src={assets.logo} alt="" className="w-24 mx-auto mb-2" />
          <span className="footer__logo--popper">
            Top <FaArrowUp />
          </span>
        </a>
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={darkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt=""
            className="w-6"
          />
          <p className="font-semibold">lucashawthorne16@gmail.com</p>
        </div>
      </div>
      <div
        className="text-center sm:flex items-center justify-between border-t
      border-gray-400 mx-[10%] mt-12 py-6"
      >
        <p>© 2025 Lucas Hawthorne. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li className="link__hover">
            <a href="https://github.com/lucashawthorne/" target="_blank">
              GitHub
            </a>
          </li>
          <li className="link__hover">
            <a
              href="https://linkedin.com/in/thelucashawthorne/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li className="link__hover">
            <a href="/Lucas-Hawthorne's-Tech-Resume.pdf/" target="_blank">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
