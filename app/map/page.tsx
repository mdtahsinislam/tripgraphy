// // // // // // // // // // // // "use client";

// // // // // // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // // // // // import {
// // // // // // // // // // // //   MapContainer,
// // // // // // // // // // // //   TileLayer,
// // // // // // // // // // // //   Marker,
// // // // // // // // // // // //   Popup,
// // // // // // // // // // // //   useMap
// // // // // // // // // // // // } from "react-leaflet";

// // // // // // // // // // // // import "leaflet/dist/leaflet.css";
// // // // // // // // // // // // import L from "leaflet";
// // // // // // // // // // // // import "leaflet-routing-machine";

// // // // // // // // // // // // // Marker fix
// // // // // // // // // // // // const customIcon = new L.Icon({
// // // // // // // // // // // //   iconUrl:
// // // // // // // // // // // //     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
// // // // // // // // // // // //   iconRetinaUrl:
// // // // // // // // // // // //     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
// // // // // // // // // // // //   shadowUrl:
// // // // // // // // // // // //     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
// // // // // // // // // // // //   iconSize: [25, 41],
// // // // // // // // // // // //   iconAnchor: [12, 41],
// // // // // // // // // // // // });


// // // // // // // // // // // // // ⭐ Route Component
// // // // // // // // // // // // function Route({ from, to }: any) {
// // // // // // // // // // // //   const map = useMap();

// // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // //     if (!from || !to) return;

// // // // // // // // // // // //     const control = L.Routing.control({
// // // // // // // // // // // //       waypoints: [
// // // // // // // // // // // //         L.latLng(from[0], from[1]),
// // // // // // // // // // // //         L.latLng(to[0], to[1])
// // // // // // // // // // // //       ],
// // // // // // // // // // // //       routeWhileDragging: false,
// // // // // // // // // // // //     }).addTo(map);

// // // // // // // // // // // //     return () => map.removeControl(control);

// // // // // // // // // // // //   }, [from, to, map]);

// // // // // // // // // // // //   return null;
// // // // // // // // // // // // }


// // // // // // // // // // // // // ⭐ Convert city name → coordinates
// // // // // // // // // // // // async function getCoordinates(place: string) {
// // // // // // // // // // // //   const res = await fetch(
// // // // // // // // // // // //     `https://nominatim.openstreetmap.org/search?format=json&q=${place}`
// // // // // // // // // // // //   );

// // // // // // // // // // // //   const data = await res.json();

// // // // // // // // // // // //   if (data.length === 0) return null;

// // // // // // // // // // // //   return [parseFloat(data[0].lat), parseFloat(data[0].lon)];
// // // // // // // // // // // // }


// // // // // // // // // // // // export default function Page() {

// // // // // // // // // // // //   const [from, setFrom] = useState("");
// // // // // // // // // // // //   const [to, setTo] = useState("");

// // // // // // // // // // // //   const [fromCoords, setFromCoords] = useState<any>(null);
// // // // // // // // // // // //   const [toCoords, setToCoords] = useState<any>(null);

// // // // // // // // // // // //   const handleRoute = async () => {

// // // // // // // // // // // //     const start = await getCoordinates(from);
// // // // // // // // // // // //     const end = await getCoordinates(to);

// // // // // // // // // // // //     if (!start || !end) {
// // // // // // // // // // // //       alert("Location not found");
// // // // // // // // // // // //       return;
// // // // // // // // // // // //     }

// // // // // // // // // // // //     setFromCoords(start);
// // // // // // // // // // // //     setToCoords(end);
// // // // // // // // // // // //   };

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <main className="min-h-screen bg-gray-50 p-6">
// // // // // // // // // // // //  <div className="brand-header items-center text-center">
// // // // // // // // // // // //         {/* <h4 className="badge-logo">Backpack Traveler</h4> */}
// // // // // // // // // // // //         <h4 
// // // // // // // // // // // //   style={{ 
// // // // // // // // // // // //     fontFamily: "Brush Script MT, cursive",
// // // // // // // // // // // //     fontSize: "2.5rem",
// // // // // // // // // // // //     margin: 0,
// // // // // // // // // // // //     color: "#000"
// // // // // // // // // // // //   }}
// // // // // // // // // // // // >
// // // // // // // // // // // //   Backpack Traveler
// // // // // // // // // // // // </h4>
// // // // // // // // // // // //         <p className="badge-tagline">NEVER ENDING FOOTSTEPS</p>
// // // // // // // // // // // //       </div>
// // // // // // // // // // // //       <h1 className="text-4xl font-bold text-center mb-6">
// // // // // // // // // // // //         Travel Route Finder
// // // // // // // // // // // //       </h1>


// // // // // // // // // // // //       {/* ⭐ INPUT FIELDS */}

// // // // // // // // // // // //       <div className="flex gap-4 justify-center mb-6">

// // // // // // // // // // // //         <input
// // // // // // // // // // // //           type="text"
// // // // // // // // // // // //           placeholder="From (e.g. Bangladesh)"
// // // // // // // // // // // //           value={from}
// // // // // // // // // // // //           onChange={(e) => setFrom(e.target.value)}
// // // // // // // // // // // //           className="border p-2 rounded"
// // // // // // // // // // // //         />

// // // // // // // // // // // //         <input
// // // // // // // // // // // //           type="text"
// // // // // // // // // // // //           placeholder="To (e.g. London)"
// // // // // // // // // // // //           value={to}
// // // // // // // // // // // //           onChange={(e) => setTo(e.target.value)}
// // // // // // // // // // // //           className="border p-2 rounded"
// // // // // // // // // // // //         />

// // // // // // // // // // // //         <button
// // // // // // // // // // // //           onClick={handleRoute}
// // // // // // // // // // // //           className="bg-blue-500 text-white px-4 py-2 rounded"
// // // // // // // // // // // //         >
// // // // // // // // // // // //           Show Route
// // // // // // // // // // // //         </button>

// // // // // // // // // // // //       </div>


// // // // // // // // // // // //       {/* ⭐ MAP */}

// // // // // // // // // // // //       <div className="h-[600px] w-full">

// // // // // // // // // // // //         <MapContainer
// // // // // // // // // // // //           center={[20, 0]}
// // // // // // // // // // // //           zoom={2}
// // // // // // // // // // // //           style={{ height: "100%", width: "100%" }}
// // // // // // // // // // // //         >

// // // // // // // // // // // //           <TileLayer
// // // // // // // // // // // //             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// // // // // // // // // // // //           />

// // // // // // // // // // // //           {fromCoords && (
// // // // // // // // // // // //             <Marker position={fromCoords} icon={customIcon}>
// // // // // // // // // // // //               <Popup>Start</Popup>
// // // // // // // // // // // //             </Marker>
// // // // // // // // // // // //           )}

// // // // // // // // // // // //           {toCoords && (
// // // // // // // // // // // //             <Marker position={toCoords} icon={customIcon}>
// // // // // // // // // // // //               <Popup>Destination</Popup>
// // // // // // // // // // // //             </Marker>
// // // // // // // // // // // //           )}

// // // // // // // // // // // //           {/* ⭐ ROUTE LINE */}
// // // // // // // // // // // //           {fromCoords && toCoords && (
// // // // // // // // // // // //             <Route from={fromCoords} to={toCoords} />
// // // // // // // // // // // //           )}

// // // // // // // // // // // //         </MapContainer>

// // // // // // // // // // // //       </div>

// // // // // // // // // // // //     </main>
// // // // // // // // // // // //   );
// // // // // // // // // // // // }




// // // // // // // // // // // "use client";

// // // // // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // // // // import {
// // // // // // // // // // //   MapContainer,
// // // // // // // // // // //   TileLayer,
// // // // // // // // // // //   Marker,
// // // // // // // // // // //   Popup,
// // // // // // // // // // //   useMap
// // // // // // // // // // // } from "react-leaflet";

// // // // // // // // // // // import "leaflet/dist/leaflet.css";
// // // // // // // // // // // import L from "leaflet";
// // // // // // // // // // // import "leaflet-routing-machine";

// // // // // // // // // // // // Marker Fix
// // // // // // // // // // // const customIcon = new L.Icon({
// // // // // // // // // // //   iconUrl:
// // // // // // // // // // //     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
// // // // // // // // // // //   iconRetinaUrl:
// // // // // // // // // // //     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
// // // // // // // // // // //   shadowUrl:
// // // // // // // // // // //     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
// // // // // // // // // // //   iconSize: [25, 41],
// // // // // // // // // // //   iconAnchor: [12, 41],
// // // // // // // // // // // });

// // // // // // // // // // // // Route Component
// // // // // // // // // // // function Route({ from, to }: any) {
// // // // // // // // // // //   const map = useMap();

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     if (!from || !to) return;

// // // // // // // // // // //     const control = L.Routing.control({
// // // // // // // // // // //       waypoints: [
// // // // // // // // // // //         L.latLng(from[0], from[1]),
// // // // // // // // // // //         L.latLng(to[0], to[1])
// // // // // // // // // // //       ],
// // // // // // // // // // //       routeWhileDragging: false,
// // // // // // // // // // //       show: false
// // // // // // // // // // //     }).addTo(map);

// // // // // // // // // // //     return () => map.removeControl(control);

// // // // // // // // // // //   }, [from, to, map]);

// // // // // // // // // // //   return null;
// // // // // // // // // // // }

// // // // // // // // // // // // Convert place → coordinates
// // // // // // // // // // // async function getCoordinates(place: string) {
// // // // // // // // // // //   const res = await fetch(
// // // // // // // // // // //     `https://nominatim.openstreetmap.org/search?format=json&q=${place}`
// // // // // // // // // // //   );

// // // // // // // // // // //   const data = await res.json();

// // // // // // // // // // //   if (data.length === 0) return null;

// // // // // // // // // // //   return [parseFloat(data[0].lat), parseFloat(data[0].lon)];
// // // // // // // // // // // }

// // // // // // // // // // // export default function Page() {

// // // // // // // // // // //   const [from, setFrom] = useState("");
// // // // // // // // // // //   const [to, setTo] = useState("");

// // // // // // // // // // //   const [fromCoords, setFromCoords] = useState<any>(null);
// // // // // // // // // // //   const [toCoords, setToCoords] = useState<any>(null);

// // // // // // // // // // //   const handleRoute = async () => {

// // // // // // // // // // //     const start = await getCoordinates(from);
// // // // // // // // // // //     const end = await getCoordinates(to);

// // // // // // // // // // //     if (!start || !end) {
// // // // // // // // // // //       alert("Location not found");
// // // // // // // // // // //       return;
// // // // // // // // // // //     }

// // // // // // // // // // //     setFromCoords(start);
// // // // // // // // // // //     setToCoords(end);
// // // // // // // // // // //   };

// // // // // // // // // // //   return (
// // // // // // // // // // //     <main className="min-h-screen bg-gray-50 px-4 py-6 md:px-10">

// // // // // // // // // // //       {/* Title */}
// // // // // // // // // // //       <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">
// // // // // // // // // // //         Travel Route Finder
// // // // // // // // // // //       </h1>

// // // // // // // // // // //       {/* Input Section */}
// // // // // // // // // // //       <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-6">

// // // // // // // // // // //         <input
// // // // // // // // // // //           type="text"
// // // // // // // // // // //           placeholder="From (e.g. Bangladesh)"
// // // // // // // // // // //           value={from}
// // // // // // // // // // //           onChange={(e) => setFrom(e.target.value)}
// // // // // // // // // // //           className="border p-3 rounded w-full md:w-64"
// // // // // // // // // // //         />

// // // // // // // // // // //         <input
// // // // // // // // // // //           type="text"
// // // // // // // // // // //           placeholder="To (e.g. London)"
// // // // // // // // // // //           value={to}
// // // // // // // // // // //           onChange={(e) => setTo(e.target.value)}
// // // // // // // // // // //           className="border p-3 rounded w-full md:w-64"
// // // // // // // // // // //         />

// // // // // // // // // // //         <button
// // // // // // // // // // //           onClick={handleRoute}
// // // // // // // // // // //           className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded w-full md:w-auto transition"
// // // // // // // // // // //         >
// // // // // // // // // // //           Show Route
// // // // // // // // // // //         </button>

// // // // // // // // // // //       </div>

// // // // // // // // // // //       {/* Map Section */}
// // // // // // // // // // //       <div className="w-full h-[400px] md:h-[500px] lg:h-[650px] rounded-xl overflow-hidden shadow">

// // // // // // // // // // //         <MapContainer
// // // // // // // // // // //           center={[20, 0]}
// // // // // // // // // // //           zoom={2}
// // // // // // // // // // //           style={{ height: "100%", width: "100%" }}
// // // // // // // // // // //         >

// // // // // // // // // // //           <TileLayer
// // // // // // // // // // //             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// // // // // // // // // // //           />

// // // // // // // // // // //           {fromCoords && (
// // // // // // // // // // //             <Marker position={fromCoords} icon={customIcon}>
// // // // // // // // // // //               <Popup>Start Location</Popup>
// // // // // // // // // // //             </Marker>
// // // // // // // // // // //           )}

// // // // // // // // // // //           {toCoords && (
// // // // // // // // // // //             <Marker position={toCoords} icon={customIcon}>
// // // // // // // // // // //               <Popup>Destination</Popup>
// // // // // // // // // // //             </Marker>
// // // // // // // // // // //           )}

// // // // // // // // // // //           {fromCoords && toCoords && (
// // // // // // // // // // //             <Route from={fromCoords} to={toCoords} />
// // // // // // // // // // //           )}

// // // // // // // // // // //         </MapContainer>

// // // // // // // // // // //       </div>

// // // // // // // // // // //     </main>
// // // // // // // // // // //   );
// // // // // // // // // // // }





// // // // // // // // // // //C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\app\destination-map\page.tsx

// // // // // // // // // // "use client";

// // // // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // // // import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
// // // // // // // // // // import "leaflet/dist/leaflet.css";
// // // // // // // // // // import L from "leaflet";
// // // // // // // // // // import "leaflet-routing-machine";

// // // // // // // // // // // --- TypeScript Fix for L.Routing ---
// // // // // // // // // // declare module "leaflet" {
// // // // // // // // // //   namespace Routing {
// // // // // // // // // //     interface ControlOptions {
// // // // // // // // // //       waypoints: L.LatLngExpression[];
// // // // // // // // // //       routeWhileDragging?: boolean;
// // // // // // // // // //       show?: boolean;
// // // // // // // // // //     }
// // // // // // // // // //     interface IControl {
// // // // // // // // // //       addTo(map: L.Map): void;
// // // // // // // // // //       remove(): void;
// // // // // // // // // //     }
// // // // // // // // // //     function control(options: ControlOptions): IControl;
// // // // // // // // // //   }

// // // // // // // // // //   interface Map {
// // // // // // // // // //     removeControl(control: Routing.IControl): void;
// // // // // // // // // //   }
// // // // // // // // // // }

// // // // // // // // // // // Marker Fix
// // // // // // // // // // const customIcon = new L.Icon({
// // // // // // // // // //   iconUrl:
// // // // // // // // // //     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
// // // // // // // // // //   iconRetinaUrl:
// // // // // // // // // //     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
// // // // // // // // // //   shadowUrl:
// // // // // // // // // //     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
// // // // // // // // // //   iconSize: [25, 41],
// // // // // // // // // //   iconAnchor: [12, 41],
// // // // // // // // // // });

// // // // // // // // // // // Route Component
// // // // // // // // // // interface RouteProps {
// // // // // // // // // //   from: [number, number];
// // // // // // // // // //   to: [number, number];
// // // // // // // // // // }

// // // // // // // // // // function Route({ from, to }: RouteProps) {
// // // // // // // // // //   const map = useMap();

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     if (!from || !to) return;

// // // // // // // // // //     // Create control without adding yet
// // // // // // // // // //     const control = L.Routing.control({
// // // // // // // // // //       waypoints: [L.latLng(from[0], from[1]), L.latLng(to[0], to[1])],
// // // // // // // // // //       routeWhileDragging: false,
// // // // // // // // // //       show: false,
// // // // // // // // // //     });

// // // // // // // // // //     // Add to map
// // // // // // // // // //     control.addTo(map);

// // // // // // // // // //     // Cleanup
// // // // // // // // // //     return () => {
// // // // // // // // // //       map.removeControl(control);
// // // // // // // // // //     };
// // // // // // // // // //   }, [from, to, map]);

// // // // // // // // // //   return null;
// // // // // // // // // // }

// // // // // // // // // // // Convert place → coordinates
// // // // // // // // // // async function getCoordinates(place: string): Promise<[number, number] | null> {
// // // // // // // // // //   const res = await fetch(
// // // // // // // // // //     `https://nominatim.openstreetmap.org/search?format=json&q=${place}`
// // // // // // // // // //   );

// // // // // // // // // //   const data = await res.json();

// // // // // // // // // //   if (data.length === 0) return null;

// // // // // // // // // //   return [parseFloat(data[0].lat), parseFloat(data[0].lon)];
// // // // // // // // // // }

// // // // // // // // // // export default function Page() {
// // // // // // // // // //   const [from, setFrom] = useState("");
// // // // // // // // // //   const [to, setTo] = useState("");

// // // // // // // // // //   const [fromCoords, setFromCoords] = useState<[number, number] | null>(null);
// // // // // // // // // //   const [toCoords, setToCoords] = useState<[number, number] | null>(null);

// // // // // // // // // //   const handleRoute = async () => {
// // // // // // // // // //     const start = await getCoordinates(from);
// // // // // // // // // //     const end = await getCoordinates(to);

// // // // // // // // // //     if (!start || !end) {
// // // // // // // // // //       alert("Location not found");
// // // // // // // // // //       return;
// // // // // // // // // //     }

// // // // // // // // // //     setFromCoords(start);
// // // // // // // // // //     setToCoords(end);
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <main className="min-h-screen bg-gray-50 px-4 py-6 md:px-10">
// // // // // // // // // //       {/* Title */}
// // // // // // // // // //       <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">
// // // // // // // // // //         Travel Route Finder
// // // // // // // // // //       </h1>

// // // // // // // // // //       {/* Input Section */}
// // // // // // // // // //       <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-6">
// // // // // // // // // //         <input
// // // // // // // // // //           type="text"
// // // // // // // // // //           placeholder="From (e.g. Bangladesh)"
// // // // // // // // // //           value={from}
// // // // // // // // // //           onChange={(e) => setFrom(e.target.value)}
// // // // // // // // // //           className="border p-3 rounded w-full md:w-64"
// // // // // // // // // //         />

// // // // // // // // // //         <input
// // // // // // // // // //           type="text"
// // // // // // // // // //           placeholder="To (e.g. London)"
// // // // // // // // // //           value={to}
// // // // // // // // // //           onChange={(e) => setTo(e.target.value)}
// // // // // // // // // //           className="border p-3 rounded w-full md:w-64"
// // // // // // // // // //         />

// // // // // // // // // //         <button
// // // // // // // // // //           onClick={handleRoute}
// // // // // // // // // //           className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded w-full md:w-auto transition"
// // // // // // // // // //         >
// // // // // // // // // //           Show Route
// // // // // // // // // //         </button>
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* Map Section */}
// // // // // // // // // //       <div className="w-full h-[400px] md:h-[500px] lg:h-[650px] rounded-xl overflow-hidden shadow">
// // // // // // // // // //         <MapContainer center={[20, 0]} zoom={2} style={{ height: "100%", width: "100%" }}>
// // // // // // // // // //           <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

// // // // // // // // // //           {fromCoords && (
// // // // // // // // // //             <Marker position={fromCoords} icon={customIcon}>
// // // // // // // // // //               <Popup>Start Location</Popup>
// // // // // // // // // //             </Marker>
// // // // // // // // // //           )}

// // // // // // // // // //           {toCoords && (
// // // // // // // // // //             <Marker position={toCoords} icon={customIcon}>
// // // // // // // // // //               <Popup>Destination</Popup>
// // // // // // // // // //             </Marker>
// // // // // // // // // //           )}

// // // // // // // // // //           {fromCoords && toCoords && <Route from={fromCoords} to={toCoords} />}
// // // // // // // // // //         </MapContainer>
// // // // // // // // // //       </div>
// // // // // // // // // //     </main>
// // // // // // // // // //   );
// // // // // // // // // // }



// // // // // // // // // "use client";

// // // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // // import dynamic from "next/dynamic";
// // // // // // // // // import "leaflet/dist/leaflet.css";
// // // // // // // // // import L from "leaflet";

// // // // // // // // // // Dynamic import to prevent SSR issues
// // // // // // // // // const MapContainer = dynamic(
// // // // // // // // //   () => import("react-leaflet").then((mod) => mod.MapContainer),
// // // // // // // // //   { ssr: false }
// // // // // // // // // );
// // // // // // // // // const TileLayer = dynamic(
// // // // // // // // //   () => import("react-leaflet").then((mod) => mod.TileLayer),
// // // // // // // // //   { ssr: false }
// // // // // // // // // );
// // // // // // // // // const Marker = dynamic(
// // // // // // // // //   () => import("react-leaflet").then((mod) => mod.Marker),
// // // // // // // // //   { ssr: false }
// // // // // // // // // );
// // // // // // // // // const Popup = dynamic(
// // // // // // // // //   () => import("react-leaflet").then((mod) => mod.Popup),
// // // // // // // // //   { ssr: false }
// // // // // // // // // );
// // // // // // // // // const useMap = dynamic(
// // // // // // // // //   () => import("react-leaflet").then((mod) => mod.useMap),
// // // // // // // // //   { ssr: false }
// // // // // // // // // );

// // // // // // // // // // Only import routing-machine on client
// // // // // // // // // if (typeof window !== "undefined") {
// // // // // // // // //   require("leaflet-routing-machine");
// // // // // // // // // }

// // // // // // // // // // Marker Fix
// // // // // // // // // const customIcon = new L.Icon({
// // // // // // // // //   iconUrl:
// // // // // // // // //     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
// // // // // // // // //   iconRetinaUrl:
// // // // // // // // //     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
// // // // // // // // //   shadowUrl:
// // // // // // // // //     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
// // // // // // // // //   iconSize: [25, 41],
// // // // // // // // //   iconAnchor: [12, 41],
// // // // // // // // // });

// // // // // // // // // // Route Component
// // // // // // // // // interface RouteProps {
// // // // // // // // //   from: [number, number];
// // // // // // // // //   to: [number, number];
// // // // // // // // // }

// // // // // // // // // function Route({ from, to }: RouteProps) {
// // // // // // // // //   const map = useMap();

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     if (!from || !to) return;

// // // // // // // // //     const control = L.Routing.control({
// // // // // // // // //       waypoints: [L.latLng(from[0], from[1]), L.latLng(to[0], to[1])],
// // // // // // // // //       routeWhileDragging: false,
// // // // // // // // //       show: false,
// // // // // // // // //     }).addTo(map);

// // // // // // // // //     return () => {
// // // // // // // // //       map.removeControl(control);
// // // // // // // // //     };
// // // // // // // // //   }, [from, to, map]);

// // // // // // // // //   return null;
// // // // // // // // // }

// // // // // // // // // // Convert place → coordinates
// // // // // // // // // async function getCoordinates(place: string): Promise<[number, number] | null> {
// // // // // // // // //   const res = await fetch(
// // // // // // // // //     `https://nominatim.openstreetmap.org/search?format=json&q=${place}`
// // // // // // // // //   );

// // // // // // // // //   const data = await res.json();

// // // // // // // // //   if (data.length === 0) return null;

// // // // // // // // //   return [parseFloat(data[0].lat), parseFloat(data[0].lon)];
// // // // // // // // // }

// // // // // // // // // export default function Page() {
// // // // // // // // //   const [from, setFrom] = useState("");
// // // // // // // // //   const [to, setTo] = useState("");

// // // // // // // // //   const [fromCoords, setFromCoords] = useState<[number, number] | null>(null);
// // // // // // // // //   const [toCoords, setToCoords] = useState<[number, number] | null>(null);

// // // // // // // // //   const handleRoute = async () => {
// // // // // // // // //     const start = await getCoordinates(from);
// // // // // // // // //     const end = await getCoordinates(to);

// // // // // // // // //     if (!start || !end) {
// // // // // // // // //       alert("Location not found");
// // // // // // // // //       return;
// // // // // // // // //     }

// // // // // // // // //     setFromCoords(start);
// // // // // // // // //     setToCoords(end);
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <main className="min-h-screen bg-gray-50 px-4 py-6 md:px-10">
// // // // // // // // //       {/* Title */}
// // // // // // // // //       <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">
// // // // // // // // //         Travel Route Finder
// // // // // // // // //       </h1>

// // // // // // // // //       {/* Input Section */}
// // // // // // // // //       <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-6">
// // // // // // // // //         <input
// // // // // // // // //           type="text"
// // // // // // // // //           placeholder="From (e.g. Bangladesh)"
// // // // // // // // //           value={from}
// // // // // // // // //           onChange={(e) => setFrom(e.target.value)}
// // // // // // // // //           className="border p-3 rounded w-full md:w-64"
// // // // // // // // //         />

// // // // // // // // //         <input
// // // // // // // // //           type="text"
// // // // // // // // //           placeholder="To (e.g. London)"
// // // // // // // // //           value={to}
// // // // // // // // //           onChange={(e) => setTo(e.target.value)}
// // // // // // // // //           className="border p-3 rounded w-full md:w-64"
// // // // // // // // //         />

// // // // // // // // //         <button
// // // // // // // // //           onClick={handleRoute}
// // // // // // // // //           className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded w-full md:w-auto transition"
// // // // // // // // //         >
// // // // // // // // //           Show Route
// // // // // // // // //         </button>
// // // // // // // // //       </div>

// // // // // // // // //       {/* Map Section */}
// // // // // // // // //       <div className="w-full h-[400px] md:h-[500px] lg:h-[650px] rounded-xl overflow-hidden shadow">
// // // // // // // // //         {typeof window !== "undefined" && (
// // // // // // // // //           <MapContainer
// // // // // // // // //             center={[20, 0]}
// // // // // // // // //             zoom={2}
// // // // // // // // //             style={{ height: "100%", width: "100%" }}
// // // // // // // // //           >
// // // // // // // // //             <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

// // // // // // // // //             {fromCoords && (
// // // // // // // // //               <Marker position={fromCoords} icon={customIcon}>
// // // // // // // // //                 <Popup>Start Location</Popup>
// // // // // // // // //               </Marker>
// // // // // // // // //             )}

// // // // // // // // //             {toCoords && (
// // // // // // // // //               <Marker position={toCoords} icon={customIcon}>
// // // // // // // // //                 <Popup>Destination</Popup>
// // // // // // // // //               </Marker>
// // // // // // // // //             )}

// // // // // // // // //             {fromCoords && toCoords && <Route from={fromCoords} to={toCoords} />}
// // // // // // // // //           </MapContainer>
// // // // // // // // //         )}
// // // // // // // // //       </div>
// // // // // // // // //     </main>
// // // // // // // // //   );
// // // // // // // // // }



// // // // // // // // "use client";

// // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // import dynamic from "next/dynamic";

// // // // // // // // // Dynamically import Map components to prevent SSR errors
// // // // // // // // const MapContainer = dynamic(
// // // // // // // //   () => import("react-leaflet").then((mod) => mod.MapContainer),
// // // // // // // //   { ssr: false }
// // // // // // // // );
// // // // // // // // const TileLayer = dynamic(
// // // // // // // //   () => import("react-leaflet").then((mod) => mod.TileLayer),
// // // // // // // //   { ssr: false }
// // // // // // // // );
// // // // // // // // const Marker = dynamic(
// // // // // // // //   () => import("react-leaflet").then((mod) => mod.Marker),
// // // // // // // //   { ssr: false }
// // // // // // // // );
// // // // // // // // const Popup = dynamic(
// // // // // // // //   () => import("react-leaflet").then((mod) => mod.Popup),
// // // // // // // //   { ssr: false }
// // // // // // // // );

// // // // // // // // import "leaflet/dist/leaflet.css";
// // // // // // // // import L from "leaflet";

// // // // // // // // // Fix default marker icon issue
// // // // // // // // const customIcon = new L.Icon({
// // // // // // // //   iconUrl:
// // // // // // // //     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
// // // // // // // //   iconRetinaUrl:
// // // // // // // //     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
// // // // // // // //   shadowUrl:
// // // // // // // //     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
// // // // // // // //   iconSize: [25, 41],
// // // // // // // //   iconAnchor: [12, 41],
// // // // // // // // });

// // // // // // // // export default function MapPage() {
// // // // // // // //   const [markers, setMarkers] = useState<[number, number][]>([
// // // // // // // //     [23.8103, 90.4125], // Dhaka
// // // // // // // //     [51.5074, -0.1278], // London
// // // // // // // //   ]);

// // // // // // // //   return (
// // // // // // // //     <main className="min-h-screen bg-gray-50 flex justify-center items-center p-4">
// // // // // // // //       <div className="w-full h-[500px] md:h-[600px] lg:h-[700px] rounded-xl overflow-hidden shadow">
// // // // // // // //         <MapContainer center={[20, 0]} zoom={2} style={{ height: "100%", width: "100%" }}>
// // // // // // // //           <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
// // // // // // // //           {markers.map((pos, idx) => (
// // // // // // // //             <Marker key={idx} position={pos} icon={customIcon}>
// // // // // // // //               <Popup>Marker {idx + 1}</Popup>
// // // // // // // //             </Marker>
// // // // // // // //           ))}
// // // // // // // //         </MapContainer>
// // // // // // // //       </div>
// // // // // // // //     </main>
// // // // // // // //   );
// // // // // // // // }


// // // // // // // //C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\app\map\page.tsx

// // // // // // // "use client";

// // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // import dynamic from "next/dynamic";
// // // // // // // import "leaflet/dist/leaflet.css";

// // // // // // // // Dynamically import Map components to prevent SSR errors
// // // // // // // const MapContainer = dynamic(
// // // // // // //   () => import("react-leaflet").then((mod) => mod.MapContainer),
// // // // // // //   { ssr: false }
// // // // // // // );
// // // // // // // const TileLayer = dynamic(
// // // // // // //   () => import("react-leaflet").then((mod) => mod.TileLayer),
// // // // // // //   { ssr: false }
// // // // // // // );
// // // // // // // const Marker = dynamic(
// // // // // // //   () => import("react-leaflet").then((mod) => mod.Marker),
// // // // // // //   { ssr: false }
// // // // // // // );
// // // // // // // const Popup = dynamic(
// // // // // // //   () => import("react-leaflet").then((mod) => mod.Popup),
// // // // // // //   { ssr: false }
// // // // // // // );

// // // // // // // // Import hook normally
// // // // // // // import { useMap } from "react-leaflet";

// // // // // // // import L from "leaflet";
// // // // // // // import "leaflet-routing-machine";

// // // // // // // // Marker Fix
// // // // // // // const customIcon = new L.Icon({
// // // // // // //   iconUrl:
// // // // // // //     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
// // // // // // //   iconRetinaUrl:
// // // // // // //     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
// // // // // // //   shadowUrl:
// // // // // // //     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
// // // // // // //   iconSize: [25, 41],
// // // // // // //   iconAnchor: [12, 41],
// // // // // // // });

// // // // // // // // Route Component
// // // // // // // interface RouteProps {
// // // // // // //   from: [number, number];
// // // // // // //   to: [number, number];
// // // // // // // }

// // // // // // // function Route({ from, to }: RouteProps) {
// // // // // // //   const map = useMap();

// // // // // // //   useEffect(() => {
// // // // // // //     if (!map || !from || !to) return;

// // // // // // //     // ⚠ TypeScript doesn't know Routing control type, cast L as any
// // // // // // //     const LAny = L as any;
// // // // // // //     const control = LAny.Routing.control({
// // // // // // //       waypoints: [L.latLng(from[0], from[1]), L.latLng(to[0], to[1])],
// // // // // // //       routeWhileDragging: false,
// // // // // // //       show: false,
// // // // // // //     });

// // // // // // //     control.addTo(map);

// // // // // // //     return () => {
// // // // // // //       if (map && control) map.removeControl(control);
// // // // // // //     };
// // // // // // //   }, [map, from, to]);

// // // // // // //   return null;
// // // // // // // }

// // // // // // // // Convert place → coordinates
// // // // // // // async function getCoordinates(place: string): Promise<[number, number] | null> {
// // // // // // //   const res = await fetch(
// // // // // // //     `https://nominatim.openstreetmap.org/search?format=json&q=${place}`
// // // // // // //   );
// // // // // // //   const data = await res.json();
// // // // // // //   if (!data || data.length === 0) return null;
// // // // // // //   return [parseFloat(data[0].lat), parseFloat(data[0].lon)];
// // // // // // // }

// // // // // // // export default function DestinationMapPage() {
// // // // // // //   const [from, setFrom] = useState("");
// // // // // // //   const [to, setTo] = useState("");
// // // // // // //   const [fromCoords, setFromCoords] = useState<[number, number] | null>(null);
// // // // // // //   const [toCoords, setToCoords] = useState<[number, number] | null>(null);

// // // // // // //   const handleRoute = async () => {
// // // // // // //     const start = await getCoordinates(from);
// // // // // // //     const end = await getCoordinates(to);

// // // // // // //     if (!start || !end) {
// // // // // // //       alert("Location not found");
// // // // // // //       return;
// // // // // // //     }

// // // // // // //     setFromCoords(start);
// // // // // // //     setToCoords(end);
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <main className="min-h-screen bg-gray-50 px-4 py-6 md:px-10">
// // // // // // //       <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">
// // // // // // //         Travel Route Finder
// // // // // // //       </h1>

// // // // // // //       <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-6">
// // // // // // //         <input
// // // // // // //           type="text"
// // // // // // //           placeholder="From (e.g. Bangladesh)"
// // // // // // //           value={from}
// // // // // // //           onChange={(e) => setFrom(e.target.value)}
// // // // // // //           className="border p-3 rounded w-full md:w-64"
// // // // // // //         />
// // // // // // //         <input
// // // // // // //           type="text"
// // // // // // //           placeholder="To (e.g. London)"
// // // // // // //           value={to}
// // // // // // //           onChange={(e) => setTo(e.target.value)}
// // // // // // //           className="border p-3 rounded w-full md:w-64"
// // // // // // //         />
// // // // // // //         <button
// // // // // // //           onClick={handleRoute}
// // // // // // //           className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded w-full md:w-auto transition"
// // // // // // //         >
// // // // // // //           Show Route
// // // // // // //         </button>
// // // // // // //       </div>

// // // // // // //       <div className="w-full h-[400px] md:h-[500px] lg:h-[650px] rounded-xl overflow-hidden shadow">
// // // // // // //         <MapContainer center={[20, 0]} zoom={2} style={{ height: "100%", width: "100%" }}>
// // // // // // //           <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

// // // // // // //           {fromCoords && (
// // // // // // //             <Marker position={fromCoords} icon={customIcon}>
// // // // // // //               <Popup>Start Location</Popup>
// // // // // // //             </Marker>
// // // // // // //           )}

// // // // // // //           {toCoords && (
// // // // // // //             <Marker position={toCoords} icon={customIcon}>
// // // // // // //               <Popup>Destination</Popup>
// // // // // // //             </Marker>
// // // // // // //           )}

// // // // // // //           {fromCoords && toCoords && <Route from={fromCoords} to={toCoords} />}
// // // // // // //         </MapContainer>
// // // // // // //       </div>
// // // // // // //     </main>
// // // // // // //   );
// // // // // // // }


// // // // // // //C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\app\map\page.tsx
// // // // // // "use client";

// // // // // // import React, { useState, useEffect } from "react";
// // // // // // import dynamic from "next/dynamic";
// // // // // // import "leaflet/dist/leaflet.css";
// // // // // // import L from "leaflet";

// // // // // // // leaflet-routing-machine import only in browser
// // // // // // if (typeof window !== "undefined") {
// // // // // //   require("leaflet-routing-machine");
// // // // // // }

// // // // // // // Dynamic import for SSR-safe
// // // // // // const MapContainer = dynamic(
// // // // // //   () => import("react-leaflet").then((mod) => mod.MapContainer),
// // // // // //   { ssr: false }
// // // // // // );
// // // // // // const TileLayer = dynamic(
// // // // // //   () => import("react-leaflet").then((mod) => mod.TileLayer),
// // // // // //   { ssr: false }
// // // // // // );
// // // // // // const Marker = dynamic(
// // // // // //   () => import("react-leaflet").then((mod) => mod.Marker),
// // // // // //   { ssr: false }
// // // // // // );
// // // // // // const Popup = dynamic(
// // // // // //   () => import("react-leaflet").then((mod) => mod.Popup),
// // // // // //   { ssr: false }
// // // // // // );

// // // // // // import { useMap } from "react-leaflet";

// // // // // // // Custom Marker Icon
// // // // // // const customIcon = new L.Icon({
// // // // // //   iconUrl:
// // // // // //     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
// // // // // //   iconRetinaUrl:
// // // // // //     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
// // // // // //   shadowUrl:
// // // // // //     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
// // // // // //   iconSize: [25, 41],
// // // // // //   iconAnchor: [12, 41],
// // // // // // });

// // // // // // // Routing Component
// // // // // // interface RouteProps {
// // // // // //   from: [number, number];
// // // // // //   to: [number, number];
// // // // // // }

// // // // // // function Route({ from, to }: RouteProps) {
// // // // // //   const map = useMap();

// // // // // //   useEffect(() => {
// // // // // //     if (!map || !from || !to) return;

// // // // // //     const control = (L as any).Routing.control({
// // // // // //       waypoints: [L.latLng(from[0], from[1]), L.latLng(to[0], to[1])],
// // // // // //       routeWhileDragging: false,
// // // // // //       show: false,
// // // // // //     }).addTo(map);

// // // // // //     return () => map.removeControl(control);
// // // // // //   }, [map, from, to]);

// // // // // //   return null;
// // // // // // }

// // // // // // // Geocoding function
// // // // // // async function getCoordinates(place: string): Promise<[number, number] | null> {
// // // // // //   try {
// // // // // //     const res = await fetch(
// // // // // //       `https://nominatim.openstreetmap.org/search?format=json&q=${place}`
// // // // // //     );
// // // // // //     const data = await res.json();
// // // // // //     if (!data || data.length === 0) return null;
// // // // // //     return [parseFloat(data[0].lat), parseFloat(data[0].lon)];
// // // // // //   } catch (err) {
// // // // // //     return null;
// // // // // //   }
// // // // // // }

// // // // // // export default function MapPage() {
// // // // // //   const [from, setFrom] = useState("");
// // // // // //   const [to, setTo] = useState("");
// // // // // //   const [fromCoords, setFromCoords] = useState<[number, number] | null>(null);
// // // // // //   const [toCoords, setToCoords] = useState<[number, number] | null>(null);

// // // // // //   const handleRoute = async () => {
// // // // // //     const start = await getCoordinates(from);
// // // // // //     const end = await getCoordinates(to);

// // // // // //     if (!start || !end) {
// // // // // //       alert("Location not found");
// // // // // //       return;
// // // // // //     }

// // // // // //     setFromCoords(start);
// // // // // //     setToCoords(end);
// // // // // //   };

// // // // // //   return (
// // // // // //     <main className="min-h-screen bg-gray-50 px-4 py-6 md:px-10">
// // // // // //       <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">
// // // // // //         Travel Route Finder
// // // // // //       </h1>

// // // // // //       <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-6">
// // // // // //         <input
// // // // // //           type="text"
// // // // // //           placeholder="From (e.g. Bangladesh)"
// // // // // //           value={from}
// // // // // //           onChange={(e) => setFrom(e.target.value)}
// // // // // //           className="border p-3 rounded w-full md:w-64"
// // // // // //         />
// // // // // //         <input
// // // // // //           type="text"
// // // // // //           placeholder="To (e.g. London)"
// // // // // //           value={to}
// // // // // //           onChange={(e) => setTo(e.target.value)}
// // // // // //           className="border p-3 rounded w-full md:w-64"
// // // // // //         />
// // // // // //         <button
// // // // // //           onClick={handleRoute}
// // // // // //           className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded w-full md:w-auto transition"
// // // // // //         >
// // // // // //           Show Route
// // // // // //         </button>
// // // // // //       </div>

// // // // // //       <div className="w-full h-[400px] md:h-[500px] lg:h-[650px] rounded-xl overflow-hidden shadow">
// // // // // //         <MapContainer center={[20, 0]} zoom={2} style={{ height: "100%", width: "100%" }}>
// // // // // //           <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

// // // // // //           {fromCoords && <Marker position={fromCoords} icon={customIcon}><Popup>Start</Popup></Marker>}
// // // // // //           {toCoords && <Marker position={toCoords} icon={customIcon}><Popup>Destination</Popup></Marker>}
// // // // // //           {fromCoords && toCoords && <Route from={fromCoords} to={toCoords} />}
// // // // // //         </MapContainer>
// // // // // //       </div>
// // // // // //     </main>
// // // // // //   );
// // // // // // }


// // // // // //C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\app\map\page.tsx

// // // // // "use client";

// // // // // import React, { useState, useEffect } from "react";
// // // // // import dynamic from "next/dynamic";
// // // // // import "leaflet/dist/leaflet.css";
// // // // // import L from "leaflet";

// // // // // // leaflet-routing-machine browser-only
// // // // // if (typeof window !== "undefined") {
// // // // //   require("leaflet-routing-machine");
// // // // // }

// // // // // // SSR-safe dynamic imports
// // // // // const MapContainer = dynamic(
// // // // //   () => import("react-leaflet").then((mod) => mod.MapContainer),
// // // // //   { ssr: false }
// // // // // );
// // // // // const TileLayer = dynamic(
// // // // //   () => import("react-leaflet").then((mod) => mod.TileLayer),
// // // // //   { ssr: false }
// // // // // );
// // // // // const Marker = dynamic(
// // // // //   () => import("react-leaflet").then((mod) => mod.Marker),
// // // // //   { ssr: false }
// // // // // );
// // // // // const Popup = dynamic(
// // // // //   () => import("react-leaflet").then((mod) => mod.Popup),
// // // // //   { ssr: false }
// // // // // );

// // // // // import { useMap } from "react-leaflet";

// // // // // // Custom Marker Icon
// // // // // const customIcon = new L.Icon({
// // // // //   iconUrl:
// // // // //     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
// // // // //   iconRetinaUrl:
// // // // //     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
// // // // //   shadowUrl:
// // // // //     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
// // // // //   iconSize: [25, 41],
// // // // //   iconAnchor: [12, 41],
// // // // // });

// // // // // // Route Component
// // // // // interface RouteProps {
// // // // //   from: [number, number];
// // // // //   to: [number, number];
// // // // // }

// // // // // function Route({ from, to }: RouteProps) {
// // // // //   const map = useMap();

// // // // //   useEffect(() => {
// // // // //     if (!map || !from || !to) return;

// // // // //     const control = (L as any).Routing.control({
// // // // //       waypoints: [L.latLng(from[0], from[1]), L.latLng(to[0], to[1])],
// // // // //       routeWhileDragging: false,
// // // // //       show: false,
// // // // //     }).addTo(map);

// // // // //     // ✅ Explicit void return clean-up
// // // // //     return (): void => {
// // // // //       map.removeControl(control);
// // // // //     };
// // // // //   }, [map, from, to]);

// // // // //   return null;
// // // // // }

// // // // // // Geocoding function
// // // // // async function getCoordinates(place: string): Promise<[number, number] | null> {
// // // // //   try {
// // // // //     const res = await fetch(
// // // // //       `https://nominatim.openstreetmap.org/search?format=json&q=${place}`
// // // // //     );
// // // // //     const data = await res.json();
// // // // //     if (!data || data.length === 0) return null;
// // // // //     return [parseFloat(data[0].lat), parseFloat(data[0].lon)];
// // // // //   } catch {
// // // // //     return null;
// // // // //   }
// // // // // }

// // // // // export default function MapPage() {
// // // // //   const [from, setFrom] = useState("");
// // // // //   const [to, setTo] = useState("");
// // // // //   const [fromCoords, setFromCoords] = useState<[number, number] | null>(null);
// // // // //   const [toCoords, setToCoords] = useState<[number, number] | null>(null);

// // // // //   const handleRoute = async () => {
// // // // //     const start = await getCoordinates(from);
// // // // //     const end = await getCoordinates(to);

// // // // //     if (!start || !end) {
// // // // //       alert("Location not found");
// // // // //       return;
// // // // //     }

// // // // //     setFromCoords(start);
// // // // //     setToCoords(end);
// // // // //   };

// // // // //   return (
// // // // //     <main className="min-h-screen bg-gray-50 px-4 py-6 md:px-10">
// // // // //       <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">
// // // // //         Travel Route Finder
// // // // //       </h1>

// // // // //       <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-6">
// // // // //         <input
// // // // //           type="text"
// // // // //           placeholder="From (e.g. Bangladesh)"
// // // // //           value={from}
// // // // //           onChange={(e) => setFrom(e.target.value)}
// // // // //           className="border p-3 rounded w-full md:w-64"
// // // // //         />
// // // // //         <input
// // // // //           type="text"
// // // // //           placeholder="To (e.g. London)"
// // // // //           value={to}
// // // // //           onChange={(e) => setTo(e.target.value)}
// // // // //           className="border p-3 rounded w-full md:w-64"
// // // // //         />
// // // // //         <button
// // // // //           onClick={handleRoute}
// // // // //           className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded w-full md:w-auto transition"
// // // // //         >
// // // // //           Show Route
// // // // //         </button>
// // // // //       </div>

// // // // //       <div className="w-full h-[400px] md:h-[500px] lg:h-[650px] rounded-xl overflow-hidden shadow">
// // // // //         <MapContainer center={[20, 0]} zoom={2} style={{ height: "100%", width: "100%" }}>
// // // // //           <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

// // // // //           {fromCoords && <Marker position={fromCoords} icon={customIcon}><Popup>Start</Popup></Marker>}
// // // // //           {toCoords && <Marker position={toCoords} icon={customIcon}><Popup>Destination</Popup></Marker>}
// // // // //           {fromCoords && toCoords && <Route from={fromCoords} to={toCoords} />}
// // // // //         </MapContainer>
// // // // //       </div>
// // // // //     </main>
// // // // //   );
// // // // // }



// // // // "use client";

// // // // import React, { useState, useEffect } from "react";
// // // // import dynamic from "next/dynamic";
// // // // import "leaflet/dist/leaflet.css";
// // // // import L from "leaflet";

// // // // // leaflet-routing-machine browser-only
// // // // if (typeof window !== "undefined") {
// // // //   require("leaflet-routing-machine");
// // // // }

// // // // // SSR-safe dynamic imports
// // // // const MapContainer = dynamic(
// // // //   () => import("react-leaflet").then((mod) => mod.MapContainer),
// // // //   { ssr: false }
// // // // );
// // // // const TileLayer = dynamic(
// // // //   () => import("react-leaflet").then((mod) => mod.TileLayer),
// // // //   { ssr: false }
// // // // );
// // // // const Marker = dynamic(
// // // //   () => import("react-leaflet").then((mod) => mod.Marker),
// // // //   { ssr: false }
// // // // );
// // // // const Popup = dynamic(
// // // //   () => import("react-leaflet").then((mod) => mod.Popup),
// // // //   { ssr: false }
// // // // );

// // // // import { useMap } from "react-leaflet";

// // // // // Custom Marker Icon
// // // // const customIcon = new L.Icon({
// // // //   iconUrl:
// // // //     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
// // // //   iconRetinaUrl:
// // // //     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
// // // //   shadowUrl:
// // // //     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
// // // //   iconSize: [25, 41],
// // // //   iconAnchor: [12, 41],
// // // // });

// // // // // Route Component
// // // // interface RouteProps {
// // // //   from: [number, number];
// // // //   to: [number, number];
// // // // }

// // // // function Route({ from, to }: RouteProps) {
// // // //   const map = useMap();

// // // //   useEffect(() => {
// // // //     if (!map || !from || !to) return;

// // // //     const control = (L as any).Routing.control({
// // // //       waypoints: [L.latLng(from[0], from[1]), L.latLng(to[0], to[1])],
// // // //       routeWhileDragging: false,
// // // //       show: false,
// // // //     }).addTo(map);

// // // //     return () => map.removeControl(control);
// // // //   }, [map, from, to]);

// // // //   return null;
// // // // }

// // // // // Geocoding
// // // // async function getCoordinates(place: string): Promise<[number, number] | null> {
// // // //   try {
// // // //     const res = await fetch(
// // // //       `https://nominatim.openstreetmap.org/search?format=json&q=${place}`
// // // //     );
// // // //     const data = await res.json();
// // // //     if (!data || data.length === 0) return null;
// // // //     return [parseFloat(data[0].lat), parseFloat(data[0].lon)];
// // // //   } catch {
// // // //     return null;
// // // //   }
// // // // }

// // // // export default function MapPage() {
// // // //   const [from, setFrom] = useState("");
// // // //   const [to, setTo] = useState("");
// // // //   const [fromCoords, setFromCoords] = useState<[number, number] | null>(null);
// // // //   const [toCoords, setToCoords] = useState<[number, number] | null>(null);

// // // //   const handleRoute = async () => {
// // // //     const start = await getCoordinates(from);
// // // //     const end = await getCoordinates(to);
// // // //     if (!start || !end) {
// // // //       alert("Location not found");
// // // //       return;
// // // //     }
// // // //     setFromCoords(start);
// // // //     setToCoords(end);
// // // //   };

// // // //   return (
// // // //     <main className="min-h-screen bg-gray-50 px-4 py-6 md:px-10">
// // // //       <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">
// // // //         Travel Route Finder
// // // //       </h1>

// // // //       <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-6">
// // // //         <input
// // // //           type="text"
// // // //           placeholder="From (e.g. Bangladesh)"
// // // //           value={from}
// // // //           onChange={(e) => setFrom(e.target.value)}
// // // //           className="border p-3 rounded w-full md:w-64"
// // // //         />
// // // //         <input
// // // //           type="text"
// // // //           placeholder="To (e.g. London)"
// // // //           value={to}
// // // //           onChange={(e) => setTo(e.target.value)}
// // // //           className="border p-3 rounded w-full md:w-64"
// // // //         />
// // // //         <button
// // // //           onClick={handleRoute}
// // // //           className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded w-full md:w-auto transition"
// // // //         >
// // // //           Show Route
// // // //         </button>
// // // //       </div>

// // // //       <div className="w-full h-[400px] md:h-[500px] lg:h-[650px] rounded-xl overflow-hidden shadow">
// // // //         <MapContainer center={[20, 0]} zoom={2} style={{ height: "100%", width: "100%" }}>
// // // //           <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

// // // //           {fromCoords && <Marker position={fromCoords} icon={customIcon}><Popup>Start</Popup></Marker>}
// // // //           {toCoords && <Marker position={toCoords} icon={customIcon}><Popup>Destination</Popup></Marker>}
// // // //           {fromCoords && toCoords && <Route from={fromCoords} to={toCoords} />}
// // // //         </MapContainer>
// // // //       </div>
// // // //     </main>
// // // //   );
// // // // }


// // // //C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\app\map\page.tsx
// // // "use client";

// // // import React, { useState, useEffect } from "react";
// // // import dynamic from "next/dynamic";
// // // import "leaflet/dist/leaflet.css";

// // // // leaflet-routing-machine only in browser
// // // if (typeof window !== "undefined") {
// // //   require("leaflet");
// // //   require("leaflet-routing-machine");
// // // }

// // // // SSR-safe dynamic imports
// // // const MapContainer = dynamic(
// // //   () => import("react-leaflet").then((mod) => mod.MapContainer),
// // //   { ssr: false }
// // // );
// // // const TileLayer = dynamic(
// // //   () => import("react-leaflet").then((mod) => mod.TileLayer),
// // //   { ssr: false }
// // // );
// // // const Marker = dynamic(
// // //   () => import("react-leaflet").then((mod) => mod.Marker),
// // //   { ssr: false }
// // // );
// // // const Popup = dynamic(
// // //   () => import("react-leaflet").then((mod) => mod.Popup),
// // //   { ssr: false }
// // // );

// // // import { useMap } from "react-leaflet";
// // // import L from "leaflet";

// // // // Custom Marker Icon
// // // const customIcon = new L.Icon({
// // //   iconUrl:
// // //     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
// // //   iconRetinaUrl:
// // //     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
// // //   shadowUrl:
// // //     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
// // //   iconSize: [25, 41],
// // //   iconAnchor: [12, 41],
// // // });

// // // // Route Component (SSR-safe)
// // // interface RouteProps {
// // //   from: [number, number];
// // //   to: [number, number];
// // // }
// // // const Route = ({ from, to }: RouteProps) => {
// // //   const map = useMap();

// // //   useEffect(() => {
// // //     if (!map || !from || !to || typeof window === "undefined") return;

// // //     const control = (L as any).Routing.control({
// // //       waypoints: [L.latLng(from[0], from[1]), L.latLng(to[0], to[1])],
// // //       routeWhileDragging: false,
// // //       show: false,
// // //     }).addTo(map);

// // //     return () => {
// // //       map.removeControl(control);
// // //     };
// // //   }, [map, from, to]);

// // //   return null;
// // // };

// // // // Geocoding
// // // async function getCoordinates(place: string): Promise<[number, number] | null> {
// // //   try {
// // //     const res = await fetch(
// // //       `https://nominatim.openstreetmap.org/search?format=json&q=${place}`
// // //     );
// // //     const data = await res.json();
// // //     if (!data || data.length === 0) return null;
// // //     return [parseFloat(data[0].lat), parseFloat(data[0].lon)];
// // //   } catch {
// // //     return null;
// // //   }
// // // }

// // // export default function MapPage() {
// // //   const [from, setFrom] = useState("");
// // //   const [to, setTo] = useState("");
// // //   const [fromCoords, setFromCoords] = useState<[number, number] | null>(null);
// // //   const [toCoords, setToCoords] = useState<[number, number] | null>(null);

// // //   const handleRoute = async () => {
// // //     const start = await getCoordinates(from);
// // //     const end = await getCoordinates(to);

// // //     if (!start || !end) {
// // //       alert("Location not found");
// // //       return;
// // //     }

// // //     setFromCoords(start);
// // //     setToCoords(end);
// // //   };

// // //   return (
// // //     <main className="min-h-screen bg-gray-50 px-4 py-6 md:px-10">
// // //       <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">
// // //         Travel Route Finder
// // //       </h1>

// // //       <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-6">
// // //         <input
// // //           type="text"
// // //           placeholder="From (e.g. Bangladesh)"
// // //           value={from}
// // //           onChange={(e) => setFrom(e.target.value)}
// // //           className="border p-3 rounded w-full md:w-64"
// // //         />
// // //         <input
// // //           type="text"
// // //           placeholder="To (e.g. London)"
// // //           value={to}
// // //           onChange={(e) => setTo(e.target.value)}
// // //           className="border p-3 rounded w-full md:w-64"
// // //         />
// // //         <button
// // //           onClick={handleRoute}
// // //           className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded w-full md:w-auto transition"
// // //         >
// // //           Show Route
// // //         </button>
// // //       </div>

// // //       <div className="w-full h-[400px] md:h-[500px] lg:h-[650px] rounded-xl overflow-hidden shadow">
// // //         <MapContainer center={[20, 0]} zoom={2} style={{ height: "100%", width: "100%" }}>
// // //           <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
// // //           {fromCoords && <Marker position={fromCoords} icon={customIcon}><Popup>Start</Popup></Marker>}
// // //           {toCoords && <Marker position={toCoords} icon={customIcon}><Popup>Destination</Popup></Marker>}
// // //           {fromCoords && toCoords && <Route from={fromCoords} to={toCoords} />}
// // //         </MapContainer>
// // //       </div>
// // //     </main>
// // //   );
// // // }


// // //C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\app\map\page.tsx
// // "use client";

// // import React, { useState, useEffect } from "react";
// // import dynamic from "next/dynamic";
// // import "leaflet/dist/leaflet.css";

// // // SSR-safe dynamic imports for react-leaflet
// // const MapContainer = dynamic(() => import("react-leaflet").then(mod => mod.MapContainer), { ssr: false });
// // const TileLayer = dynamic(() => import("react-leaflet").then(mod => mod.TileLayer), { ssr: false });
// // const Marker = dynamic(() => import("react-leaflet").then(mod => mod.Marker), { ssr: false });
// // const Popup = dynamic(() => import("react-leaflet").then(mod => mod.Popup), { ssr: false });
// // const useMap = dynamic(() => import("react-leaflet").then(mod => mod.useMap), { ssr: false });

// // export default function MapPage() {
// //   const [from, setFrom] = useState("");
// //   const [to, setTo] = useState("");
// //   const [fromCoords, setFromCoords] = useState<[number, number] | null>(null);
// //   const [toCoords, setToCoords] = useState<[number, number] | null>(null);
// //   const [LInstance, setLInstance] = useState<any>(null);
// //   const [customIcon, setCustomIcon] = useState<any>(null);

// //   // Load Leaflet + Routing Machine dynamically (client only)
// //   useEffect(() => {
// //     if (typeof window === "undefined") return;

// //     const L = require("leaflet");
// //     require("leaflet-routing-machine");

// //     // Fix default marker icons
// //     delete L.Icon.Default.prototype._getIconUrl;
// //     L.Icon.Default.mergeOptions({
// //       iconUrl:
// //         "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
// //       iconRetinaUrl:
// //         "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
// //       shadowUrl:
// //         "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
// //     });

// //     setLInstance(L);

// //     // Create custom marker after Leaflet is loaded
// //     setCustomIcon(
// //       new L.Icon({
// //         iconUrl:
// //           "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
// //         iconRetinaUrl:
// //           "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
// //         shadowUrl:
// //           "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
// //         iconSize: [25, 41],
// //         iconAnchor: [12, 41],
// //       })
// //     );
// //   }, []);

// //   // Route Component
// //   const Route = ({ from, to }: { from: [number, number]; to: [number, number] }) => {
// //     const map = useMap();

// //     useEffect(() => {
// //       if (!map || !LInstance || !from || !to) return;

// //       const control = LInstance.Routing.control({
// //         waypoints: [LInstance.latLng(from[0], from[1]), LInstance.latLng(to[0], to[1])],
// //         routeWhileDragging: false,
// //         show: false,
// //       }).addTo(map);

// //       return () => map.removeControl(control);
// //     }, [map, from, to, LInstance]);

// //     return null;
// //   };

// //   // Geocoding
// //   const getCoordinates = async (place: string): Promise<[number, number] | null> => {
// //     try {
// //       const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${place}`);
// //       const data = await res.json();
// //       if (!data || data.length === 0) return null;
// //       return [parseFloat(data[0].lat), parseFloat(data[0].lon)];
// //     } catch {
// //       return null;
// //     }
// //   };

// //   const handleRoute = async () => {
// //     const start = await getCoordinates(from);
// //     const end = await getCoordinates(to);
// //     if (!start || !end) return alert("Location not found");
// //     setFromCoords(start);
// //     setToCoords(end);
// //   };

// //   return (
// //     <main className="min-h-screen bg-gray-50 px-4 py-6 md:px-10">
// //       <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">Travel Route Finder</h1>

// //       <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-6">
// //         <input
// //           type="text"
// //           placeholder="From (e.g. Dhaka)"
// //           value={from}
// //           onChange={(e) => setFrom(e.target.value)}
// //           className="border p-3 rounded w-full md:w-64"
// //         />
// //         <input
// //           type="text"
// //           placeholder="To (e.g. London)"
// //           value={to}
// //           onChange={(e) => setTo(e.target.value)}
// //           className="border p-3 rounded w-full md:w-64"
// //         />
// //         <button
// //           onClick={handleRoute}
// //           className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded w-full md:w-auto transition"
// //         >
// //           Show Route
// //         </button>
// //       </div>

// //       <div className="w-full h-[400px] md:h-[500px] lg:h-[650px] rounded-xl overflow-hidden shadow">
// //         {LInstance && customIcon && (
// //           <MapContainer center={[20, 0]} zoom={2} style={{ height: "100%", width: "100%" }}>
// //             <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
// //             {fromCoords && <Marker position={fromCoords} icon={customIcon}><Popup>Start</Popup></Marker>}
// //             {toCoords && <Marker position={toCoords} icon={customIcon}><Popup>Destination</Popup></Marker>}
// //             {fromCoords && toCoords && <Route from={fromCoords} to={toCoords} />}
// //           </MapContainer>
// //         )}
// //       </div>
// //     </main>
// //   );
// // }


// //C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\app\map\page.tsx
// "use client";

// import React, { useState, useEffect } from "react";
// import dynamic from "next/dynamic";
// import "leaflet/dist/leaflet.css";

// // SSR-safe dynamic imports for react-leaflet components
// const MapContainer = dynamic(
//   () => import("react-leaflet").then((mod) => mod.MapContainer),
//   { ssr: false }
// );
// const TileLayer = dynamic(
//   () => import("react-leaflet").then((mod) => mod.TileLayer),
//   { ssr: false }
// );
// const Marker = dynamic(
//   () => import("react-leaflet").then((mod) => mod.Marker),
//   { ssr: false }
// );
// const Popup = dynamic(
//   () => import("react-leaflet").then((mod) => mod.Popup),
//   { ssr: false }
// );

// // Leaflet hooks (useMap) cannot be dynamically imported
// import { useMap } from "react-leaflet";

// export default function MapPage() {
//   const [from, setFrom] = useState("");
//   const [to, setTo] = useState("");
//   const [fromCoords, setFromCoords] = useState<[number, number] | null>(null);
//   const [toCoords, setToCoords] = useState<[number, number] | null>(null);
//   const [LInstance, setLInstance] = useState<any>(null);
//   const [customIcon, setCustomIcon] = useState<any>(null);

//   // Load Leaflet + Routing Machine dynamically (client only)
//   useEffect(() => {
//     if (typeof window === "undefined") return;

//     const L = require("leaflet");
//     require("leaflet-routing-machine");

//     // Fix default marker icons
//     delete L.Icon.Default.prototype._getIconUrl;
//     L.Icon.Default.mergeOptions({
//       iconUrl:
//         "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
//       iconRetinaUrl:
//         "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
//       shadowUrl:
//         "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
//     });

//     setLInstance(L);

//     // Create custom marker
//     setCustomIcon(
//       new L.Icon({
//         iconUrl:
//           "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
//         iconRetinaUrl:
//           "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
//         shadowUrl:
//           "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
//         iconSize: [25, 41],
//         iconAnchor: [12, 41],
//       })
//     );
//   }, []);

//   // Route Component
//   const Route = ({ from, to }: { from: [number, number]; to: [number, number] }) => {
//     const map = useMap();

//     useEffect(() => {
//       if (!map || !LInstance || !from || !to) return;

//       const control = LInstance.Routing.control({
//         waypoints: [LInstance.latLng(from[0], from[1]), LInstance.latLng(to[0], to[1])],
//         routeWhileDragging: false,
//         show: false,
//       }).addTo(map);

//       return () => map.removeControl(control); // cleanup
//     }, [map, from, to, LInstance]);

//     return null;
//   };

//   // Geocoding function
//   const getCoordinates = async (place: string): Promise<[number, number] | null> => {
//     try {
//       const res = await fetch(
//         `https://nominatim.openstreetmap.org/search?format=json&q=${place}`
//       );
//       const data = await res.json();
//       if (!data || data.length === 0) return null;
//       return [parseFloat(data[0].lat), parseFloat(data[0].lon)];
//     } catch {
//       return null;
//     }
//   };

//   const handleRoute = async () => {
//     const start = await getCoordinates(from);
//     const end = await getCoordinates(to);
//     if (!start || !end) return alert("Location not found");
//     setFromCoords(start);
//     setToCoords(end);
//   };

//   return (
//     <main className="min-h-screen bg-gray-50 px-4 py-6 md:px-10">
//       <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">
//         Travel Route Finder
//       </h1>

//       <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-6">
//         <input
//           type="text"
//           placeholder="From (e.g. Dhaka)"
//           value={from}
//           onChange={(e) => setFrom(e.target.value)}
//           className="border p-3 rounded w-full md:w-64"
//         />
//         <input
//           type="text"
//           placeholder="To (e.g. London)"
//           value={to}
//           onChange={(e) => setTo(e.target.value)}
//           className="border p-3 rounded w-full md:w-64"
//         />
//         <button
//           onClick={handleRoute}
//           className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded w-full md:w-auto transition"
//         >
//           Show Route
//         </button>
//       </div>

//       <div className="w-full h-[400px] md:h-[500px] lg:h-[650px] rounded-xl overflow-hidden shadow">
//         {LInstance && customIcon && (
//           <MapContainer center={[20, 0]} zoom={2} style={{ height: "100%", width: "100%" }}>
//             <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//             {fromCoords && <Marker position={fromCoords} icon={customIcon}><Popup>Start</Popup></Marker>}
//             {toCoords && <Marker position={toCoords} icon={customIcon}><Popup>Destination</Popup></Marker>}
//             {fromCoords && toCoords && <Route from={fromCoords} to={toCoords} />}
//           </MapContainer>
//         )}
//       </div>
//     </main>
//   );
// }




"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

// ✅ dynamic import (ONLY components)
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);

// ✅ hook direct import (IMPORTANT)
import { useMap } from "react-leaflet";

export default function MapPage() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [fromCoords, setFromCoords] = useState<[number, number] | null>(null);
  const [toCoords, setToCoords] = useState<[number, number] | null>(null);
  const [LInstance, setLInstance] = useState<any>(null);
  const [customIcon, setCustomIcon] = useState<any>(null);

  // ✅ Load Leaflet client-side
  useEffect(() => {
    if (typeof window === "undefined") return;

    const L = require("leaflet");
    require("leaflet-routing-machine");

    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
      iconRetinaUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
      shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    });

    setLInstance(L);

    setCustomIcon(
      new L.Icon({
        iconUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
        iconRetinaUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
        shadowUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
      })
    );
  }, []);

  // ✅ Route Component (FIXED)
  const Route = ({ from, to }: { from: [number, number]; to: [number, number] }) => {
    const map = useMap();

    useEffect(() => {
      if (!map || !LInstance || !from || !to) return;

      const control = LInstance.Routing.control({
        waypoints: [
          LInstance.latLng(from[0], from[1]),
          LInstance.latLng(to[0], to[1]),
        ],
        routeWhileDragging: false,
        show: false,
      }).addTo(map);

      return () => {
        map.removeControl(control);
      };
    }, [map, from, to, LInstance]);

    return null;
  };

  // ✅ Geocoding
  const getCoordinates = async (place: string): Promise<[number, number] | null> => {
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${place}`
      );
      const data = await res.json();
      if (!data || data.length === 0) return null;

      return [parseFloat(data[0].lat), parseFloat(data[0].lon)];
    } catch {
      return null;
    }
  };

  const handleRoute = async () => {
    const start = await getCoordinates(from);
    const end = await getCoordinates(to);

    if (!start || !end) {
      alert("Location not found");
      return;
    }

    setFromCoords(start);
    setToCoords(end);
  };

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-6 md:px-10">
      <h1 className="text-3xl font-bold text-center mb-6">
        Travel Route Finder
      </h1>

      <div className="flex flex-col md:flex-row gap-4 justify-center mb-6">
        <input
          placeholder="From"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="border p-3 rounded"
        />
        <input
          placeholder="To"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="border p-3 rounded"
        />
        <button
          onClick={handleRoute}
          className="bg-blue-500 text-white px-6 py-3 rounded"
        >
          Show Route
        </button>
      </div>

      <div className="h-[500px]">
        {LInstance && customIcon && (
          <MapContainer center={[23.685, 90.3563]} zoom={7} style={{ height: "100%" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {fromCoords && (
              <Marker position={fromCoords} icon={customIcon}>
                <Popup>Start</Popup>
              </Marker>
            )}

            {toCoords && (
              <Marker position={toCoords} icon={customIcon}>
                <Popup>Destination</Popup>
              </Marker>
            )}

            {fromCoords && toCoords && (
              <Route from={fromCoords} to={toCoords} />
            )}
          </MapContainer>
        )}
      </div>
    </main>
  );
}