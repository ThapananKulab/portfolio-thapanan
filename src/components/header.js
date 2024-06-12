import * as React from "react"
import { Link } from "gatsby"

const Header = () => (
  <nav className="bg-gray-800 p-4">
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <div className="container mx-auto flex justify-between items-center">
          <a className="btn btn-ghost text-xl">Thapanan Kulab</a>

          <div className="lg:hidden flex">
            {/* สร้างปุ่มเมนูสำหรับมือถือ */}
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
            {/* ลิงก์เมนูสำหรับคอมพิวเตอร์ */}
            <Link
              to="/"
              className="btn btn-ghost text-md"
              style={{ color: "black" }}
              activeClassName="active"
            >
              Home
            </Link>

            <Link
              to="/experience"
              className="btn btn-ghost text-md"
              style={{ color: "black" }}
            >
              Experience
            </Link>
            <Link
              to="/about"
              className="btn btn-ghost text-md"
              style={{ color: "black" }}
              activeClassName="active"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </div>
  </nav>
)

export default Header
