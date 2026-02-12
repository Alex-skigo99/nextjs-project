import { useState, useEffect } from "react";
import { PaginationState } from "@tanstack/react-table";
import { Product } from "@/types/generalTypes";

interface PaginationData {
  pageIndex: number;
  pageSize: number;
  totalCount: number;
  pageCount: number;
}

export function useProducts(pagination: PaginationState) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [paginationData, setPaginationData] = useState<PaginationData | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsPending(true);
        const params = new URLSearchParams({
          page: String(pagination.pageIndex),
          pageSize: String(pagination.pageSize),
        });
        const response = await fetch(`/api/products?${params}`);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const result = await response.json();
        setProducts(result.data);
        setPaginationData(result.pagination);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error occurred");
        setProducts([]);
      } finally {
        setIsPending(false);
      }
    };

    fetchProducts();
  }, [pagination.pageIndex, pagination.pageSize]);

  return { products, isPending, error, paginationData };
}
