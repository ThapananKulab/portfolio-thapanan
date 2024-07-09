import React, { useRef, useEffect, useState } from "react"
import { FaCopy, FaEnvelope } from "react-icons/fa"
import Navbar from "../components/header"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Seo from "../components/seo"

// Import styles for Leaflet
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"
import "leaflet-defaulticon-compatibility"

const ContactForm = () => {
  const mapRef = useRef()
  const email = "thapanan.kularb@gmail.com"
  const phone = "0819139936"
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const copyToClipboard = text => {
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

  useEffect(() => {
    if (mapRef.current) {
      const mapInstance = mapRef.current
      mapInstance.invalidateSize()
    }
  }, [])

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
                    onClick={() => copyToClipboard(phone)}
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
              {isClient && (
                <div style={{ width: "100%", height: "500px" }}>
                  <MapContainer
                    center={[13.811202, 100.504995]} // Center position of the map
                    zoom={13}
                    scrollWheelZoom={false}
                    style={{ height: "100%", width: "100%" }}
                    ref={mapRef}
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[13.811202, 100.504995]}>
                      <Popup>
                        ตำแหน่งที่ต้องการปักหมุด <br /> [13.811387, 100.505121]
                      </Popup>
                    </Marker>
                  </MapContainer>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Head = () => <Seo title="Contact | Thapanan Kulab" />

export default ContactForm
