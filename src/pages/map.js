import React, { useRef, useEffect } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css" // Re-uses images from ~leaflet package
import * as L from "leaflet"
import "leaflet-defaulticon-compatibility"

const MapComponent = () => {
  const mapRef = useRef()

  useEffect(() => {
    if (mapRef.current) {
      const mapInstance = mapRef.current
      mapInstance.invalidateSize()
    }
  }, [])

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <MapContainer
        center={[13.8113048, 100.5049658]} // ตำแหน่งศูนย์กลางแผนที่
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[13.8113048, 100.5049658]}>
          <Popup>
            ตำแหน่งที่ต้องการปักหมุด <br /> [13.811387, 100.505121]
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default MapComponent
