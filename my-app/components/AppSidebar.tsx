"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { LayoutDashboard, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from "@/const/locale";

type MenuItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  localized?: boolean;
};

const CONTACT_LOCALE_COOKIE = "NEXT_LOCALE";

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
    localized: true,
  },
];

function readCookieValue(name: string) {
  if (typeof document === "undefined") {
    return null;
  }

  const cookie = document.cookie.split("; ").find((entry) => entry.startsWith(`${name}=`));

  if (!cookie) {
    return null;
  }

  return decodeURIComponent(cookie.substring(name.length + 1));
}

export function AppSidebar() {
  const pathname = usePathname();
  const [locale, setLocale] = useState(DEFAULT_LOCALE);

  useEffect(() => {
    const cookieLocale = readCookieValue(CONTACT_LOCALE_COOKIE);
    if (!cookieLocale || !SUPPORTED_LOCALES.includes(cookieLocale)) {
      return;
    }

    setLocale((current) => (current === cookieLocale ? current : cookieLocale));
  }, []);

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
            const targetHref = item.localized ? `${item.href}/${locale}` : item.href;
            const isActive = pathname === targetHref || (item.localized && pathname === item.href);
            return (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton asChild isActive={isActive}>
                  <Link href={targetHref} className={cn("flex items-center gap-2", isActive && "bg-accent")}>
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
