import { useState, useEffect } from 'react';
import { Product } from '@/types/generalTypes';

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsPending(true);
        const response = await fetch('/api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error occurred');
        setProducts([]);
      } finally {
        setIsPending(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, isPending, error };
}
