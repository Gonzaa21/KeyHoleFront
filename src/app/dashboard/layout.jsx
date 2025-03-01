import { Outlet } from "react-router-dom";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { BreadcrumbProvider } from "@/components/breadcrumb-context";

export default function Layout() {
  return (
    <div className="[--header-height:calc(theme(spacing.14))]">
      <BreadcrumbProvider>
        <SidebarProvider className="flex flex-col">
          <SiteHeader />
          <div className="flex flex-1">
            <AppSidebar />
            <SidebarInset>
              <div className="flex flex-1 flex-col gap-4 p-4">
                <Outlet />
              </div>
            </SidebarInset>
          </div>
        </SidebarProvider>
      </BreadcrumbProvider>
    </div>
  );
}