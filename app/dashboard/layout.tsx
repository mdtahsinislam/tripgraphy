
// // // //C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\app\dashboard\layout.tsx



// // import { TooltipProvider } from "@/components/ui/tooltip";

// // export default function DashboardLayout({
// //   children,
// // }: {
// //   children: React.ReactNode;
// // }) {
// //   return (
// //     <TooltipProvider>
// //       <div className="min-h-screen bg-gray-100">
// //         {children}
// //       </div>
// //     </TooltipProvider>
// //   );
// // }



// import { AppSidebar } from "@/components/app-sidebar"
// import { SiteHeader } from "@/components/site-header"
// import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
// import { TooltipProvider } from "@/components/ui/tooltip"

// export default function DashboardLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <TooltipProvider>
//       <SidebarProvider
//         style={
//           {
//             "--sidebar-width": "calc(var(--spacing) * 72)",
//             "--header-height": "calc(var(--spacing) * 12)",
//           } as React.CSSProperties
//         }
//       >
//         <AppSidebar variant="inset" />
//         <SidebarInset>
//           <SiteHeader />
//           <div className="flex flex-1 flex-col">
//             <div className="@container/main flex flex-1 flex-col gap-2">
//               {children}
//             </div>
//           </div>
//         </SidebarInset>
//       </SidebarProvider>
//     </TooltipProvider>
//   )
// }


//C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\app\dashboard\layout.tsx
// import { SiteHeader } from "@/components/site-header"
// import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
// import { TooltipProvider } from "@/components/ui/tooltip"

// export default function DashboardLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <TooltipProvider>
//       <SidebarProvider
//         style={
//           {
//             "--sidebar-width": "calc(var(--spacing) * 72)",
//             "--header-height": "calc(var(--spacing) * 12)",
//           } as React.CSSProperties
//         }
//       >
//         {/* Temporarily removed AppSidebar */}
//         {/* <AppSidebar variant="inset" /> */}
        
//         <SidebarInset>
//           <SiteHeader />
//           <div className="flex flex-1 flex-col">
//             <div className="@container/main flex flex-1 flex-col gap-2">
//               {children}
//             </div>
//           </div>
//         </SidebarInset>
//       </SidebarProvider>
//     </TooltipProvider>
//   )
// }

import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { TooltipProvider } from "@/components/ui/tooltip"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <TooltipProvider>
      <SidebarProvider
        style={
          {
            "--sidebar-width": "calc(var(--spacing) * 72)",
            "--header-height": "calc(var(--spacing) * 12)",
          } as React.CSSProperties
        }
      >
        <AppSidebar variant="inset" />
        <SidebarInset>
          <SiteHeader />
          <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-2">
              {children}
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  )
}