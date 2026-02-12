"use client";

import { ProductsList } from "@/components/ProductsList";
import { useTranslations } from "next-intl";

export default function Dashboard() {
  const t = useTranslations("dashboard");

  return (
    <div className="flex-1 p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">{t("pageTitle")}</h1>
        <p className="text-muted-foreground">{t("welcomeMessage")}</p>
      </div>

      <ProductsList />
    </div>
  );
}
