"use client"

import L from "leaflet"
import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from "react-leaflet"

const officePosition: [number, number] = [-26.0118705, 27.9759657]

const markerIcon = new L.DivIcon({
  className: "custom-map-marker",
  html: '<span class="custom-map-marker-dot"></span>',
  iconSize: [28, 36],
  iconAnchor: [14, 36],
  popupAnchor: [0, -36],
})

export function ContactMap() {
  return (
    <motion.div
      className="rounded-[16px] border border-white/10 bg-navy-secondary shadow-[0_24px_80px_rgba(0,0,0,0.24)]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.75, ease: [0.22, 0.61, 0.36, 1] }}
    >
      <div className="overflow-hidden rounded-[16px] bg-slate-950">
        <MapContainer
          center={officePosition}
          zoom={16}
          scrollWheelZoom={false}
          zoomControl={false}
          dragging
          touchZoom
          doubleClickZoom={false}
          keyboard
          className="h-[300px] w-full rounded-[16px] md:h-[420px] lg:h-[450px]"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <ZoomControl position="topright" />
          <Marker position={officePosition} icon={markerIcon}>
            <Popup>
              <div className="space-y-1 text-sm text-slate-950">
                <p className="font-semibold">Bizh Mining (PTY) LTD</p>
                <p>369 Dorstone Crescent</p>
                <p>Cedar Creek Estate</p>
                <p>Broadacres</p>
                <p>Johannesburg, South Africa</p>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      <div className="flex justify-center p-6 pt-8">
        <a
          href="https://www.openstreetmap.org/directions?from=&to=-26.0118705%2C27.9759657"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-[#c6973a] px-8 py-3 text-[14px] font-medium uppercase tracking-[0.18em] text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-[#d1a34d] hover:shadow-[0_12px_30px_rgba(198,151,58,0.18)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c6973a]/80"
        >
          Get Directions
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </motion.div>
  )
}
