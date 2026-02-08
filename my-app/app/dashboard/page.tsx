'use client';

import { useProducts } from '@/hooks/useProducts';
import { ProductStats } from '@/components/ProductStats';
import { ProductsList } from '@/components/ProductsList';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Dashboard() {
  const { products, isPending, error } = useProducts();

  return (
    <div className="flex-1 p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Bicycle Store Dashboard</h1>
        <p className="text-muted-foreground">Manage your bicycle inventory and sales</p>
      </div>

      {error && (
        <Card className="mb-6 border-red-200 bg-red-50">
          <CardContent className="pt-6">
            <p className="text-red-800">Error: {error}</p>
          </CardContent>
        </Card>
      )}

      <ProductStats products={products} />

      <Card>
        <CardHeader>
          <CardTitle>Products Inventory</CardTitle>
          <CardDescription>All available bicycles in the store</CardDescription>
        </CardHeader>
        <CardContent>
          <ProductsList products={products} isPending={isPending} />
        </CardContent>
      </Card>
    </div>
  );
}
