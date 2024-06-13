import * as React from "react"
import { Link } from "gatsby"

const Header = () => (
  <nav className="bg-white-800 p-4">
    <div className="flex-1">
      <div className="container mx-auto flex justify-between items-center">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://logowik.com/content/uploads/images/cristiano-ronaldo-cr712464.logowik.com.webp"
            style={{ height: "40px", width: "auto", marginRight: "8px" }}
            alt="Cristiano Ronaldo Logo"
          />
          <a className="btn btn-ghost text-base">Cristiano Ronaldo</a>
        </div>

        <div className="lg:hidden flex">
          <button className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3 5h14a1 1 0 010 2H3a1 1 0 110-2zm0 6h14a1 1 0 010 2H3a1 1 0 110-2zm0 6h14a1 1 0 010 2H3a1 1 0 110-2z"
              />
            </svg>
          </button>
        </div>

        <div className="hidden lg:flex space-x-4 text-white ml-200">
          <Link
            to="/"
            className="btn btn-ghost text-md"
            style={{ color: "black" }}
            activeClassName="active"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="btn btn-ghost text-md"
            style={{ color: "black" }}
            activeClassName="active"
          >
            About
          </Link>
          <Link
            to="/project"
            className="btn btn-ghost text-md"
            style={{ color: "black" }}
          >
            Project
          </Link>

          <Link
            to="/contact"
            className="btn btn-ghost text-md"
            style={{ color: "black" }}
            activeClassName="active"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  </nav>
)

export default Header
