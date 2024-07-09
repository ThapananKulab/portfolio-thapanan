import * as React from "react"
import { Link } from "gatsby"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="p-4">
      <div className="flex-1">
        <div className="container mx-auto flex justify-between items-center">
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link
              to="/"
              className="btn btn-ghost font-bold tracking-wide hover:text-gray-700 transition-colors duration-300"
            >
              THAPANAN KULAB
            </Link>
          </div>

          {/* Hamburger button for mobile */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="p-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex space-x-4 text-black ml-200">
            <NavLinks />
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"} mt-4 `}>
          <NavLinks2 />
        </div>
      </div>
    </nav>
  )
}

const NavLinks = () => (
  <>
    <Link
      to="/"
      className="btn btn-ghost text-md "
      activeClassName="font-bold text-primary bg-white-800 rounded"
    >
      Home
    </Link>
    <Link
      to="/education"
      className="btn btn-ghost text-md "
      activeClassName="font-bold text-primary bg-white-800 rounded"
    >
      Education
    </Link>
    <Link
      to="/project"
      className="btn btn-ghost text-md "
      activeClassName="font-bold text-primary bg-white-800 rounded"
    >
      Project
    </Link>
    <Link
      to="/experience"
      className="btn btn-ghost text-md "
      activeClassName="font-bold text-primary bg-white-800 rounded"
    >
      Experience
    </Link>
    <Link
      to="/contact"
      className="btn btn-ghost text-md"
      activeClassName="font-bold text-primary bg-white-800 rounded"
    >
      Contact
    </Link>
  </>
)

const NavLinks2 = () => (
  <>
    <Link
      to="/"
      className="btn btn-ghost text-md block py-2"
      activeClassName="font-bold text-primary bg-white-800 rounded"
    >
      Home
    </Link>
    <Link
      to="/education"
      className="btn btn-ghost text-md block py-2"
      activeClassName="font-bold text-primary bg-white-800 rounded"
    >
      Education
    </Link>
    <Link
      to="/project"
      className="btn btn-ghost text-md block py-2"
      activeClassName="font-bold text-primary bg-white-800 rounded"
    >
      Project
    </Link>
    <Link
      to="/experience"
      className="btn btn-ghost text-md block py-2"
      activeClassName="font-bold text-primary bg-white-800 rounded"
    >
      Experience
    </Link>
    <Link
      to="/contact"
      className="btn btn-ghost text-md block py-2"
      activeClassName="font-bold text-black bg-white-800 rounded"
    >
      Contact
    </Link>
  </>
)

export default Header
