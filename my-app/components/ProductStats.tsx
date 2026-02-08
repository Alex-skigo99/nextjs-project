'use client';

import { Product } from '@/types/generalTypes';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ProductStatsProps {
  products: Product[];
}

export function ProductStats({ products }: ProductStatsProps) {
  const totalProducts = products.length;
  const totalInventory = products.reduce((sum, p) => sum + p.count, 0);
  const totalValue = products.reduce((sum, p) => sum + p.price * p.count, 0);
  const avgPrice = products.length > 0 ? products.reduce((sum, p) => sum + p.price, 0) / products.length : 0;

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Products</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalProducts}</div>
          <p className="text-xs text-muted-foreground">different models</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Inventory</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalInventory}</div>
          <p className="text-xs text-muted-foreground">units in stock</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Average Price</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${avgPrice.toFixed(2)}</div>
          <p className="text-xs text-muted-foreground">per bike</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Value</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${totalValue.toLocaleString('en-US', { maximumFractionDigits: 0 })}</div>
          <p className="text-xs text-muted-foreground">inventory value</p>
        </CardContent>
      </Card>
    </div>
  );
}
