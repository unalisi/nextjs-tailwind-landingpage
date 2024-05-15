export function Navbar() {
  return (
    <nav className="bg-yellow-400 p-4 fixed top-0 w-full z-50">
      <ul className="flex justify-center space-x-8">
        <li>
          <a
            href="#home"
            className="text-black font-bold text-2xl hover:text-orange-500"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="text-black font-bold text-2xl hover:text-orange-500"
          >
            About Us
          </a>
        </li>
        <li>
          <a
            href="#team"
            className="text-black font-bold text-2xl hover:text-orange-500"
          >
            Our Team
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="text-black font-bold text-2xl hover:text-orange-500"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
