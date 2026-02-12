"use client";

import { useTranslations } from "next-intl";
import { Product } from "@/types/generalTypes";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProductStatsProps {
  products: Product[];
  totalCount?: number;
  pageSize?: number;
}

export function ProductStats({ products, totalCount = 0, pageSize = 10 }: ProductStatsProps) {
  const t = useTranslations("dashboard");
  // For stats, use totalCount if available, otherwise fall back to current page products
  const displayTotalProducts = totalCount || products.length;
  const totalInventory = products.reduce((sum, p) => sum + p.count, 0);
  // Total value and average price should be calculated from current page products
  const totalValue = products.reduce((sum, p) => sum + p.price * p.count, 0);
  const avgPrice = products.length > 0 ? products.reduce((sum, p) => sum + p.price, 0) / products.length : 0;

  return (
    <div className="mb-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{t("statsProduct.title")}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{displayTotalProducts}</div>
          <p className="text-muted-foreground text-xs">{t("statsProduct.units")}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{t("statsInventory.title")}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalInventory}</div>
          <p className="text-muted-foreground text-xs">{t("statsInventory.units")}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{t("statsAveragePrice.title")}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${avgPrice.toFixed(2)}</div>
          <p className="text-muted-foreground text-xs">{t("statsAveragePrice.units")}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{t("statsValue.title")}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${totalValue.toLocaleString("en-US", { maximumFractionDigits: 0 })}</div>
          <p className="text-muted-foreground text-xs">{t("statsValue.units")}</p>
        </CardContent>
      </Card>
    </div>
  );
}
