"use client";
import { Product } from "../types/product";
import ProductCard from "./ProductCard";

type ProductListProps = {
  products: Product[]; // Define que el componente espera un array de productos
};

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;