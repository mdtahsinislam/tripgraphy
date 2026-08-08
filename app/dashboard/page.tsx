


// //C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\app\dashboard\page.tsx

// import { AppSidebar } from "@/components/app-sidebar"
// //import { ChartAreaInteractive } from "@/components/chart-area-interactive"
// //import { DataTable } from "@/components/data-table"
// //import { SectionCards } from "@/components/section-cards"
// import { SiteHeader } from "@/components/site-header"
// import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

// //import data from "./data.json"

// export default function Page() {
//   return (
//     <SidebarProvider
//       style={
//         {
//           "--sidebar-width": "calc(var(--spacing) * 72)",
//           "--header-height": "calc(var(--spacing) * 12)",
//         } as React.CSSProperties
//       }
//     >
//       <AppSidebar variant="inset" />
//       <SidebarInset>
//         <SiteHeader />
//         <div className="flex flex-1 flex-col">
//           <div className="@container/main flex flex-1 flex-col gap-2">
//             <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
//               {/* <SectionCards /> */}
              
//               <div className="px-4 lg:px-6">
//                 {/* <ChartAreaInteractive /> */}
//               </div>
//               {/* <DataTable data={data} /> */}
//             </div>
//           </div>
//         </div>
//       </SidebarInset>
//     </SidebarProvider>
//   )
// }



// import { ChartAreaInteractive } from "@/components/chart-area-interactive"
// import { DataTable } from "@/components/data-table"
// import { SectionCards } from "@/components/section-cards"
// import data from "./data.json"

// export default function DashboardPage() {
//   return (
//     <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
//       <SectionCards />
//       <div className="px-4 lg:px-6">
//         <ChartAreaInteractive />
//       </div>
//       <DataTable data={data} />
//     </div>
//   )
// }
//C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\app\dashboard\page.tsx

//এখনে দুটি Lotte file দিব  right side left side  উপরে দিব welcome travel & tour website  lotte file গুলো কীভাবে দিব help কর সুন্দর একটা setup dashboard page বানায় দিবে

"use client";

import Lottie from "lottie-react";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [travelAnim, setTravelAnim] = useState(null);
  const [worldAnim, setWorldAnim] = useState(null);

  useEffect(() => {
    // Lottie JSON লোড
    fetch("/lottie/travel.json")
      .then((res) => res.json())
      .then(setTravelAnim)
      .catch(() => console.log("Travel lottie not found"));

    fetch("/lottie/world.json")
      .then((res) => res.json())
      .then(setWorldAnim)
      .catch(() => console.log("World lottie not found"));
  }, []);

  return (
    <div className="flex flex-col gap-6 py-6 px-4 lg:px-6">
      {/* Welcome Section */}
      <div className="text-center mb-2">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Welcome to{" "}
          <span className="text-blue-600">Travel Tripgraphy</span>
        </h1>
        <p className="text-muted-foreground mt-2 text-lg">
          Your complete Travel & Tour management dashboard
        </p>
      </div>

      {/* Two Lottie Side by Side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Left Lottie */}
        <div className="bg-white border rounded-2xl shadow-sm p-6 flex flex-col items-center justify-center min-h-[320px]">
          {travelAnim ? (
            <Lottie
              animationData={travelAnim}
              loop={true}
              className="w-full max-w-[280px]"
            />
          ) : (
            <div className="text-6xl">✈️</div>
          )}
          <p className="mt-4 font-medium text-gray-600">Explore the World</p>
        </div>

        {/* Right Lottie */}
        <div className="bg-white border rounded-2xl shadow-sm p-6 flex flex-col items-center justify-center min-h-[320px]">
          {worldAnim ? (
            <Lottie
              animationData={worldAnim}
              loop={true}
              className="w-full max-w-[280px]"
            />
          ) : (
            <div className="text-6xl">🌍</div>
          )}
          <p className="mt-4 font-medium text-gray-600">Plan Your Journey</p>
        </div>
      </div>

      {/* Quick Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-5 shadow">
          <p className="text-sm opacity-90">Packages</p>
          <p className="text-3xl font-bold mt-1">12+</p>
        </div>
        <div className="bg-gradient-to-br from-amber-500 to-orange-500 text-white rounded-xl p-5 shadow">
          <p className="text-sm opacity-90">Shop Products</p>
          <p className="text-3xl font-bold mt-1">30+</p>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-xl p-5 shadow">
          <p className="text-sm opacity-90">Bookings</p>
          <p className="text-3xl font-bold mt-1">Active</p>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white rounded-xl p-5 shadow">
          <p className="text-sm opacity-90">Tour Guides</p>
          <p className="text-3xl font-bold mt-1">Ready</p>
        </div>
      </div>
    </div>
  );
}