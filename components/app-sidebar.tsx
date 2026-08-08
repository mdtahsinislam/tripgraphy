


// // // //C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\components\app-sidebar.tsx
// // // "use client"

// // // import * as React from "react"

// // // import { NavDocuments } from "@/components/nav-documents"
// // // import { NavMain } from "@/components/nav-main"
// // // import { NavSecondary } from "@/components/nav-secondary"
// // // import { NavUser } from "@/components/nav-user"
// // // import {
// // //   Sidebar,
// // //   SidebarContent,
// // //   SidebarFooter,
// // //   SidebarHeader,
// // //   SidebarMenu,
// // //   SidebarMenuButton,
// // //   SidebarMenuItem,
// // // } from "@/components/ui/sidebar"
// // // import { LayoutDashboardIcon, ListIcon, ChartBarIcon, FolderIcon, UsersIcon, CameraIcon, FileTextIcon, Settings2Icon, CircleHelpIcon, SearchIcon, DatabaseIcon, FileChartColumnIcon, FileIcon, CommandIcon } from "lucide-react"

// // // const data = {
// // //   user: {
// // //     name: "shadcn",
// // //     email: "m@example.com",
// // //     avatar: "/avatars/shadcn.jpg",
// // //   },
// // //   navMain: [
// // //     {
// // //       title: "Shop",
// // //       url: "/shop",  // i want user click show C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\app\shop\page.tsx  in //C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\app\dashboard\page.tsx how implement this shadcn dashboard

// // //       icon: (
// // //         <LayoutDashboardIcon
// // //         />
// // //       ),
// // //     },
// // //     {
// // //       title: "Lifecycle",
// // //       url: "#",
// // //       icon: (
// // //         <ListIcon
// // //         />
// // //       ),
// // //     },
// // //     {
// // //       title: "Analytics",
// // //       url: "#",
// // //       icon: (
// // //         <ChartBarIcon
// // //         />
// // //       ),
// // //     },
// // //     {
// // //       title: "Projects",
// // //       url: "#",
// // //       icon: (
// // //         <FolderIcon
// // //         />
// // //       ),
// // //     },
// // //     {
// // //       title: "Team",
// // //       url: "#",
// // //       icon: (
// // //         <UsersIcon
// // //         />
// // //       ),
// // //     },
// // //   ],
// // //   navClouds: [
// // //     {
// // //       title: "Capture",
// // //       icon: (
// // //         <CameraIcon
// // //         />
// // //       ),
// // //       isActive: true,
// // //       url: "#",
// // //       items: [
// // //         {
// // //           title: "Active Proposals",
// // //           url: "#",
// // //         },
// // //         {
// // //           title: "Archived",
// // //           url: "#",
// // //         },
// // //       ],
// // //     },
// // //     {
// // //       title: "Proposal",
// // //       icon: (
// // //         <FileTextIcon
// // //         />
// // //       ),
// // //       url: "#",
// // //       items: [
// // //         {
// // //           title: "Active Proposals",
// // //           url: "#",
// // //         },
// // //         {
// // //           title: "Archived",
// // //           url: "#",
// // //         },
// // //       ],
// // //     },
// // //     {
// // //       title: "Prompts",
// // //       icon: (
// // //         <FileTextIcon
// // //         />
// // //       ),
// // //       url: "#",
// // //       items: [
// // //         {
// // //           title: "Active Proposals",
// // //           url: "#",
// // //         },
// // //         {
// // //           title: "Archived",
// // //           url: "#",
// // //         },
// // //       ],
// // //     },
// // //   ],
// // //   navSecondary: [
// // //     {
// // //       title: "Settings",
// // //       url: "#",
// // //       icon: (
// // //         <Settings2Icon
// // //         />
// // //       ),
// // //     },
// // //     {
// // //       title: "Get Help",
// // //       url: "#",
// // //       icon: (
// // //         <CircleHelpIcon
// // //         />
// // //       ),
// // //     },
// // //     {
// // //       title: "Search",
// // //       url: "#",
// // //       icon: (
// // //         <SearchIcon
// // //         />
// // //       ),
// // //     },
// // //   ],
// // //   documents: [
// // //     {
// // //       name: "Data Library",
// // //       url: "#",
// // //       icon: (
// // //         <DatabaseIcon
// // //         />
// // //       ),
// // //     },
// // //     {
// // //       name: "Reports",
// // //       url: "#",
// // //       icon: (
// // //         <FileChartColumnIcon
// // //         />
// // //       ),
// // //     },
// // //     {
// // //       name: "Word Assistant",
// // //       url: "#",
// // //       icon: (
// // //         <FileIcon
// // //         />
// // //       ),
// // //     },
// // //   ],
// // // }

// // // export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
// // //   return (
// // //     <Sidebar collapsible="offcanvas" {...props}>
// // //       <SidebarHeader>
// // //         <SidebarMenu>
// // //           <SidebarMenuItem>
// // //             <SidebarMenuButton
// // //               asChild
// // //               className="data-[slot=sidebar-menu-button]:p-1.5!"
// // //             >
// // //               <a href="#">
// // //                 <CommandIcon className="size-5!" />
// // //                 <span className="text-base font-semibold">Acme Inc.</span>
// // //               </a>
// // //             </SidebarMenuButton>
// // //           </SidebarMenuItem>
// // //         </SidebarMenu>
// // //       </SidebarHeader>
// // //       <SidebarContent>
// // //         <NavMain items={data.navMain} />
// // //         <NavDocuments items={data.documents} />
// // //         <NavSecondary items={data.navSecondary} className="mt-auto" />
// // //       </SidebarContent>
// // //       <SidebarFooter>
// // //         <NavUser user={data.user} />
// // //       </SidebarFooter>
// // //     </Sidebar>
// // //   )
// // // }

// // //C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\components\app-sidebar.tsx
// // // Example of the nav items (adjust according to your current file)
// // const data = {
// //   navMain: [
// //     {
// //       title: "Dashboard",
// //       url: "/dashboard",
// //       icon: LayoutDashboardIcon, // or whatever icon you use
// //     },
// //     {
// //       title: "Users",
// //       url: "/dashboard/users",
// //       icon: UsersIcon,
// //     },
// //     {
// //       title: "Settings",
// //       url: "/dashboard/settings",
// //       icon: SettingsIcon,
// //     },
// //   ],
// //   // ... rest of your data
// // }



// //
// // "use client"

// // import * as React from "react"
// // import {
// //   LayoutDashboardIcon,
// //   UsersIcon,
// //   Settings2Icon,
// //   CommandIcon,
// // } from "lucide-react"

// // import { NavMain } from "@/components/nav-main"
// // import { NavUser } from "@/components/nav-user"
// // import {
// //   Sidebar,
// //   SidebarContent,
// //   SidebarFooter,
// //   SidebarHeader,
// //   SidebarMenu,
// //   SidebarMenuButton,
// //   SidebarMenuItem,
// // } from "@/components/ui/sidebar"

// // const data = {
// //   user: {
// //     name: "Admin",
// //     email: "admin@tripgraphy.com",
// //     avatar: "/avatars/shadcn.jpg",
// //   },
// //   navMain: [
// //     {
// //       title: "Dashboard",
// //       url: "/dashboard",
// //       icon: LayoutDashboardIcon,
// //     },
// //     {
// //       title: "Users",
// //       url: "/dashboard/users",
// //       icon: UsersIcon,
// //     },
// //     {
// //       title: "Settings",
// //       url: "/dashboard/settings",
// //       icon: Settings2Icon,
// //     },
// //   ],
// // }

// // export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
// //   return (
// //     <Sidebar collapsible="offcanvas" {...props}>
// //       <SidebarHeader>
// //         <SidebarMenu>
// //           <SidebarMenuItem>
// //             <SidebarMenuButton
// //               asChild
// //               className="data-[slot=sidebar-menu-button]:p-1.5!"
// //             >
// //               <a href="/dashboard">
// //                 <CommandIcon className="size-5!" />
// //                 <span className="text-base font-semibold">Tripgraphy</span>
// //               </a>
// //             </SidebarMenuButton>
// //           </SidebarMenuItem>
// //         </SidebarMenu>
// //       </SidebarHeader>

// //       <SidebarContent>
// //         <NavMain items={data.navMain} />
// //       </SidebarContent>

// //       <SidebarFooter>
// //         <NavUser user={data.user} />
// //       </SidebarFooter>
// //     </Sidebar>
// //   )
// // }



// // //C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\components\app-sidebar.tsx

// // "use client"

// // import * as React from "react"
// // import {
// //   LayoutDashboardIcon,
// //   UsersIcon,
// //   Settings2Icon,
// //   CommandIcon,
// // } from "lucide-react"

// // import { NavMain } from "@/components/nav-main"
// // import { NavUser } from "@/components/nav-user"
// // import {
// //   Sidebar,
// //   SidebarContent,
// //   SidebarFooter,
// //   SidebarHeader,
// //   SidebarMenu,
// //   SidebarMenuButton,
// //   SidebarMenuItem,
// // } from "@/components/ui/sidebar"

// // const data = {
// //   user: {
// //     name: "Admin",
// //     email: "admin@tripgraphy.com",
// //     avatar: "/avatars/shadcn.jpg",
// //   },
// //   navMain: [
// //     {
// //       title: "Dashboard",
// //       url: "/dashboard",
// //       icon: <LayoutDashboardIcon />,
// //     },
// //     {
// //       title: "Users",
// //       url: "/dashboard/users",
// //       icon: <UsersIcon />,
// //     },
// //     {
// //       title: "Settings",
// //       url: "/dashboard/settings",
// //       icon: <Settings2Icon />,
// //     },
// //   ],
// // }

// // export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
// //   return (
// //     <Sidebar collapsible="offcanvas" {...props}>
// //       <SidebarHeader>
// //         <SidebarMenu>
// //           <SidebarMenuItem>
// //             <SidebarMenuButton
// //               asChild
// //               className="data-[slot=sidebar-menu-button]:p-1.5!"
// //             >
// //               <a href="/dashboard">
// //                 <CommandIcon className="size-5!" />
// //                 <span className="text-base font-semibold">Tripgraphy</span>
// //               </a>
// //             </SidebarMenuButton>
// //           </SidebarMenuItem>
// //         </SidebarMenu>
// //       </SidebarHeader>

// //       <SidebarContent>
// //         <NavMain items={data.navMain} />
// //       </SidebarContent>

// //       <SidebarFooter>
// //         <NavUser user={data.user} />
// //       </SidebarFooter>
// //     </Sidebar>
// //   )
// // }




// //C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\components\app-sidebar.tsx

// "use client"

// import * as React from "react"
// import {
//   LayoutDashboardIcon,
//   UsersIcon,
//   Settings2Icon,
//   CommandIcon,
//   CalendarIcon,
//   MapIcon,
//   BookOpenIcon,
//   ShoppingBagIcon,
// } from "lucide-react"

// import { NavMain } from "@/components/nav-main"
// import { NavUser } from "@/components/nav-user"
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarFooter,
//   SidebarHeader,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
// } from "@/components/ui/sidebar"

// const data = {
//   user: {
//     name: "Admin",
//     email: "admin@tripgraphy.com",
//     avatar: "/avatars/shadcn.jpg",
//   },
//   navMain: [
//     {
//       title: "Dashboard",
//       url: "/dashboard",
//       icon: <LayoutDashboardIcon />,
//     },
//     {
//       title: "Users",//admin route
//       url: "/dashboard/all-user",
//       icon: <MapIcon />,
//     },
//     {
//       title: "All User Package",//admin route
//       url: "/dashboard/all-package",
//       icon: <MapIcon />,
//     },
//     {
//       title: "All User Shoping",//admin route
//       url: "/dashboard/all-user-shop-data",
//       icon: <ShoppingBagIcon />,
//     },
//     {
//       title: "create-shop-data",//admin route // tourguide route
//       url: "/dashboard/create-shop-data",
//       icon: <ShoppingBagIcon />,
//     },
//     {
//       title: "Create-package",//admin route // tourguide route
//       url: "/dashboard/create-package",
//       icon: <Settings2Icon />,
//     },
//     {
//       title: "Profile",//user route //admin route // tourguide route
//       url: "/dashboard/profile",
//       icon: <UsersIcon />,
//     },
//     {
//       title: "My Post",//user route //admin route // tourguide route
//       url: "/dashboard/my-posts",
//       icon: <BookOpenIcon/>,
//     },
//     {
//       title: "My Products",//user route //admin route // tourguide route
//       url: "/dashboard/my-products",
//       icon: <ShoppingBagIcon />,
//     },
//     {
//       title: "My Package",// user route //admin route // tourguide route
//       url: "/dashboard/my-package",
//       icon: <MapIcon />,
//     }

//   ],
// }

// export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
//   return (
//     <Sidebar collapsible="offcanvas" {...props}>
//       <SidebarHeader>
//         <SidebarMenu>
//           <SidebarMenuItem>
//             <SidebarMenuButton
//               asChild
//               className="data-[slot=sidebar-menu-button]:p-1.5! text-blue-500"
//             >
//               <a href="/">
//                 <CommandIcon className="size-5!" />
//                 <span className="text-base font-semibold">Travel Tripgraphy</span>
//               </a>
//             </SidebarMenuButton>
//           </SidebarMenuItem>
//         </SidebarMenu>
//       </SidebarHeader>

//       <SidebarContent>
//         <NavMain items={data.navMain} />
//       </SidebarContent>

//       <SidebarFooter>
//         <NavUser user={data.user} />
//       </SidebarFooter>
//     </Sidebar>
//   )
// }





"use client"

import * as React from "react"
import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import {
  LayoutDashboardIcon,
  UsersIcon,
  Settings2Icon,
  CommandIcon,
  MapIcon,
  BookOpenIcon,
  ShoppingBagIcon,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

type NavItem = {
  title: string
  url: string
  icon: React.ReactNode
  roles: string[] // কোন রোল দেখতে পারবে
}

const allNavItems: NavItem[] = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: <LayoutDashboardIcon />,
    roles: ["admin", "tourguide", "user"],
  },
  {
    title: "Users",
    url: "/dashboard/all-user",
    icon: <UsersIcon />,
    roles: ["admin"],
  },
  {
    title: "All User Package",
    url: "/dashboard/all-package",
    icon: <MapIcon />,
    roles: ["admin"],
  },
  {
    title: "All User Shopping",
    url: "/dashboard/all-user-shop-data",
    icon: <ShoppingBagIcon />,
    roles: ["admin"],
  },
  {
    title: "Create Shop Data",
    url: "/dashboard/create-shop-data",
    icon: <ShoppingBagIcon />,
    roles: ["admin", "tourguide"],
  },
  {
    title: "Create Package",
    url: "/dashboard/create-package",
    icon: <Settings2Icon />,
    roles: ["admin", "tourguide"],
  },
  {
    title: "Profile",
    url: "/dashboard/profile",
    icon: <UsersIcon />,
    roles: ["admin", "tourguide", "user"],
  },
  {
    title: "My Post",
    url: "/dashboard/my-posts",
    icon: <BookOpenIcon />,
    roles: ["admin", "tourguide", "user"],
  },
  {
    title: "My Products",
    url: "/dashboard/my-products",
    icon: <ShoppingBagIcon />,
    roles: ["admin", "tourguide", "user"],
  },
  {
    title: "My Package",
    url: "/dashboard/my-package",
    icon: <MapIcon />,
    roles: ["admin", "tourguide", "user"],
  },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: session } = useSession()
  const [role, setRole] = useState<string>("user")
  const [userInfo, setUserInfo] = useState({
    name: "User",
    email: "",
    avatar: "",
  })

  useEffect(() => {
    if (!session?.user?.email) return

    const fetchRole = async () => {
      try {
        const res = await fetch(
          `/api/user/profile?email=${session.user.email}`
        )
        const data = await res.json()

        if (data.user) {
          setRole(data.user.role || "user")
          setUserInfo({
            name: data.user.name || session.user.name || "User",
            email: data.user.email || session.user.email || "",
            avatar: data.user.photo || session.user.image || "",
          })
        } else {
          setUserInfo({
            name: session.user.name || "User",
            email: session.user.email || "",
            avatar: session.user.image || "",
          })
        }
      } catch (error) {
        console.error(error)
      }
    }

    fetchRole()
  }, [session])

  // রোল অনুযায়ী মেনু ফিল্টার
  const filteredNav = allNavItems.filter((item) =>
    item.roles.includes(role)
  )

  return (
    <Sidebar collapsible="offcanvas" className="bg-white shadow-lg border-r  p-4 overflow-y-auto" {...props}>
      <SidebarHeader className="bg-white">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5! text-blue-500"
            >
              <a href="/">
                <CommandIcon className="size-5!" />
                <span className="text-base font-semibold">
                  Travel Tripgraphy
                </span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="bg-white">
        <NavMain items={filteredNav} />
      </SidebarContent>

      <SidebarFooter className="bg-white">
        <NavUser user={userInfo} />
      </SidebarFooter>
    </Sidebar>
  )
}