import * as React from "react"
import {
  BookOpen,
  KeyRound,
  Bug,
  Pin,
  CalendarDays,
  CircleDollarSign,
  PiggyBank,
  Wallet,
  Github,
} from "lucide-react"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  navMain: [
    {
      title: "Documentation",
      url: "/docs",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        }
      ],
    },
    {
      title: "Objectives",
      url: "/objectives",
      icon: Pin
    },
    {
      title: "Calendar",
      url: "/calendar",
      icon: CalendarDays
    },
    {
      title: "Monthly Income",
      url: "/income",
      icon: CircleDollarSign,
      items: [
        {
          title: "Incomes summary",
          url: "#",
        },
        {
          title: "Source of incomes",
          url: "#",
        }
      ],
    },
    {
      title: "Monthly Expenses",
      url: "/spent",
      icon: Wallet,
      items: [
        {
          title: "Expenses summary",
          url: "#",
        },
        {
          title: "Expense's alerts",
          url: "#",
        }
      ],
    },
    {
      title: "Investments",
      url: "/investments",
      icon: PiggyBank
    }
  ],
  navSecondary: [
    {
      title: "GitHub",
      url: "https://github.com/Gonzaa21/KeyHoleFront",
      icon: Github,
    },
    {
      title: "Open Issue",
      url: "https://github.com/Gonzaa21/KeyHoleFront/issues",
      icon: Bug,
    },
  ]
}

export function AppSidebar({ ...props }) {
  return (
    (<Sidebar
      className="top-[--header-height] !h-[calc(100svh-var(--header-height))]"
      {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div
                  className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <KeyRound className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">KeyHole</span>
                  <span className="truncate text-xs">Web application</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
    </Sidebar>)
  );
}
