import React from "react"
import { FaCopy, FaEnvelope } from "react-icons/fa"
import Navbar from "../components/header"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Seo from "../components/seo"

const ContactForm = () => {
  const email = "thapanan.kularb@gmail.com"
  const phone = "0819139936"

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text)
    toast.success(`Copied ${text} to clipboard!`, {
      position: "top-center",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }

  return (
    <div>
      <ToastContainer />
      <Navbar />
      <div
        className="container"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <div className="min-h-screen bg-gray-100 p-6">
          <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-center mb-10">Contact</h1>
            <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8">
              <div className="mb-4 relative">
                <label
                  htmlFor="phone"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Phone
                </label>
                <div className="flex items-center">
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    className="input input-bordered flex-grow"
                    value={phone}
                    readOnly
                  />
                  <FaCopy
                    className="ml-2 cursor-pointer text-gray-700"
                    onClick={() => copyToClipboard(phone, "phone")}
                  />
                </div>
              </div>
              <div className="mb-4 relative">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email
                </label>
                <div className="flex items-center">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="input input-bordered flex-grow"
                    value={email}
                    readOnly
                  />

                  <a href={`mailto:${email}`} className="ml-2">
                    <FaEnvelope className="text-gray-700 hover:text-blue-500" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export const Head = () => <Seo title="Contact | Thapanan Kulab" />
export default ContactForm
