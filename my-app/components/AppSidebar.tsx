"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { LayoutDashboard, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import LocaleSwitcher from "./LocaleSwitcher";
import { Locale } from "next-intl";
import { changeLocaleAction } from "@/utils/changeLocaleAction";

type MenuItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

const menuItems: MenuItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: Mail,
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  async function handleLocaleChange(locale: Locale) {
    await changeLocaleAction(locale);
  }

  return (
    <Sidebar>
      <SidebarHeader className="border-b">
        <div className="px-2 py-3">
          <h1 className="text-lg font-bold">🚴 BikeStore</h1>
          <p className="text-muted-foreground text-xs">Bicycle Inventory</p>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton asChild isActive={isActive}>
                  <Link href={item.href} className={cn("flex items-center gap-2", isActive && "bg-accent")}>
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="mb-12 border-t">
        <LocaleSwitcher handleLocaleChange={handleLocaleChange} />
      </SidebarFooter>
    </Sidebar>
  );
}
