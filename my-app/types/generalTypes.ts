export type StringKeys<T> = {
  [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];

export type Product = {
  id: number;
  brand: string;
  model: string;
  type: string;
  level: string;
  year: number;
  price: number;
  count: number;
  color: string;
  max_discount: number;
  store_branch: string;
  wheel_size: string;
  description: string;
};
