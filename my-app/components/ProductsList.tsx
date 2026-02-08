'use client';

import { ColumnDef, PaginationState } from '@tanstack/react-table';
import { Product } from '@/types/generalTypes';
import GeneralTable from '@/components/tables/GeneralTable';
import { useState } from 'react';

interface ProductsListProps {
  products: Product[];
  isPending: boolean;
}

export function ProductsList({ products, isPending }: ProductsListProps) {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const columns: ColumnDef<Product>[] = [
    {
      accessorKey: 'brand',
      header: 'Brand',
      size: 120,
    },
    {
      accessorKey: 'model',
      header: 'Model',
      size: 150,
    },
    {
      accessorKey: 'type',
      header: 'Type',
      size: 120,
    },
    {
      accessorKey: 'level',
      header: 'Level',
      size: 100,
    },
    {
      accessorKey: 'year',
      header: 'Year',
      size: 80,
      cell: ({ row }) => row.original.year,
    },
    {
      accessorKey: 'price',
      header: 'Price',
      size: 100,
      cell: ({ row }) => `$${row.original.price.toFixed(2)}`,
    },
    {
      accessorKey: 'count',
      header: 'Stock',
      size: 80,
    },
    {
      accessorKey: 'color',
      header: 'Color',
      size: 100,
    },
    {
      accessorKey: 'wheel_size',
      header: 'Wheel Size',
      size: 100,
    },
    {
      accessorKey: 'store_branch',
      header: 'Branch',
      size: 120,
    },
    {
      accessorKey: 'max_discount',
      header: 'Max Discount %',
      size: 120,
      cell: ({ row }) => `${row.original.max_discount}%`,
    },
    {
      accessorKey: 'description',
      header: 'Description',
      size: 250,
    },
  ];

  return (
    <GeneralTable<Product, Product, unknown>
      columns={columns}
      data={products}
      isPending={isPending}
      isPaginationNeeded={true}
      pagination={pagination}
      setPagination={setPagination}
      totalRows={products.length}
      customNoResultsMessage="No products found"
    />
  );
}
