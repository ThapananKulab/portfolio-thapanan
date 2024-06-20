import React, { useRef, useEffect } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"
import "leaflet-defaulticon-compatibility"
import Navbar from "../components/header"

const MapComponent = () => {
  const mapRef = useRef()

  useEffect(() => {
    if (mapRef.current) {
      const mapInstance = mapRef.current
      mapInstance.invalidateSize()
    }
  }, [])

  return (
    <div>
      <Navbar />
      <div style={{ width: "100%", height: "500px" }}>
        <MapContainer
          center={[13.811202, 100.504995]} // ตำแหน่งศูนย์กลางแผนที่
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
    </div>
  )
}

export default MapComponent
