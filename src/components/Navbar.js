import logo from "../assets/YashMaheshwari.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink=0 items-center">
        <img src={logo} alt="Logo" className="mx-2 w-72" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/yash-maheshwari-903294214/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Yashmaheshwari0502" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://x.com/YASHDMAHESHWARI" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaSquareXTwitter />
        </a>
        <a href="https://www.instagram.com/yashmaheshwarim/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
