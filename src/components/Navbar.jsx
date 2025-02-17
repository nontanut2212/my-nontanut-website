import { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg fixed w-full top-0 z-50 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <span className="text-black bg-gradient-to-r from-blue-500 to-cyan-500 p-1 rounded">
            Nontanut
          </span>{" "}
          Website
        </div>

        {/* Hamburger Button */}
        <button className="md:hidden text-white text-2xl" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-cyan-500"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-cyan-500"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-cyan-500"
            >
              Projects
            </Link>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1EQehnnom96XyhScsaW4wiU39Gb6LbWxx/view?usp=sharing"
              className="cursor-pointer hover:text-cyan-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden absolute top-16 left-0 w-full bg-[rgba(10,10,10,0.9)] text-white p-4 space-y-4 text-center">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="block py-2 hover:text-cyan-500"
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="block py-2 hover:text-cyan-500"
              onClick={toggleMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="block py-2 hover:text-cyan-500"
              onClick={toggleMenu}
            >
              Projects
            </Link>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1e18rAOa0Wk85kh7D74V9SrkLkOsfsj9H/view?usp=sharing"
              className="block py-2 hover:text-cyan-500"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMenu}
            >
              Resume
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
