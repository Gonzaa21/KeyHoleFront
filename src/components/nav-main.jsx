"use client"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar"
import { useBreadcrumb } from "@/components/breadcrumb-context";
import { useNavigate } from "react-router-dom";

export function NavMain({ items }) {
  const { setBreadcrumb } = useBreadcrumb();
  const navigate = useNavigate();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
      {items.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton onClick={() => { setBreadcrumb(item.title); navigate(item.url); }}>
            <item.icon className="size-4 mr-2" />
            {item.title}
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
    </SidebarGroup>
  );
}
