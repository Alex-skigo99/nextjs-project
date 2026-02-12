"use client";

import { ColumnDef, PaginationState } from "@tanstack/react-table";
import { Product } from "@/types/generalTypes";
import GeneralTable from "@/components/tables/GeneralTable";
import { useState } from "react";
import { useProducts } from "@/hooks/useProducts";
import { ProductStats } from "./ProductStats";

interface ProductsListProps {
  initialProducts?: Product[];
  initialIsPending?: boolean;
}

export function ProductsList({ initialProducts = [], initialIsPending = false }: ProductsListProps) {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const { products, isPending, paginationData } = useProducts(pagination);

  const columns: ColumnDef<Product>[] = [
    {
      accessorKey: "brand",
      header: "Brand",
      size: 120,
    },
    {
      accessorKey: "model",
      header: "Model",
      size: 150,
    },
    {
      accessorKey: "type",
      header: "Type",
      size: 120,
    },
    {
      accessorKey: "level",
      header: "Level",
      size: 100,
    },
    {
      accessorKey: "year",
      header: "Year",
      size: 80,
      cell: ({ row }) => row.original.year,
    },
    {
      accessorKey: "price",
      header: "Price",
      size: 100,
      meta: {
        columnClass: "text-right",
      },
      cell: ({ row }) => `$${row.original.price.toFixed(2)}`,
    },
    {
      accessorKey: "count",
      header: "Stock",
      size: 80,
    },
    {
      accessorKey: "color",
      header: "Color",
      size: 100,
    },
    {
      accessorKey: "wheel_size",
      header: "Wheel Size",
      size: 100,
    },
    {
      accessorKey: "store_branch",
      header: "Branch",
      size: 120,
    },
    {
      accessorKey: "max_discount",
      header: "Max Discount %",
      size: 120,
      cell: ({ row }) => `${row.original.max_discount}%`,
    },
    {
      accessorKey: "description",
      header: "Description",
      size: 250,
    },
  ];

  return (
    <div>
      <ProductStats products={products} totalCount={paginationData?.totalCount || 0} pageSize={pagination.pageSize} />
      <GeneralTable<Product, Product, unknown>
        columns={columns}
        data={products}
        isPending={isPending}
        isPaginationNeeded={true}
        pagination={pagination}
        setPagination={setPagination}
        totalRows={paginationData?.totalCount || 0}
        customNoResultsMessage="No products found"
      />
    </div>
  );
}
