
"use client";  

import Image from "next/image";
import Header from "./components/Header";
import productData from "./data/products.json" ;
import ProductList from "./components/ProductList";

import { useState } from "react";
import { Categorys, Product } from "./types/product";
import styled from "styled-components";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(productData);
  const handleCategoryClick = (category: string|null) => {
    setSelectedCategory(category);
    if (category) {
      setFilteredProducts(productData.filter((product) => product.category === category));
    } else {
      setFilteredProducts(productData); // Mostrar todos los productos si no hay filtro
    }
  };

  
  const categories: Categorys[] = [
    { id: "1", name: "Ahorros" },
    { id: "2", name: "Inversiones" },
    { id: "3", name: "Préstamos" },
    { id: "4", name: "Tarjetas de crédito" },
    { id: "5", name: "Seguros" },
    { id: "6", name: "Hipotecas" },
    { id: "7", name: "Fondos de inversión" },
    { id: "8", name: "Planes de pensiones" },
  ];
  
  
   const Badge=styled .div.attrs({ 
    className: 'bg-[#0B0B16] text-[#1D1B2A] font-bold text-sm px-2 py-1 rounded-full border border-[#3D2C8D]  cursor-pointer shadow-[0_0_20px_rgba(93,52,230,0.3)]',  
  })``; 
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 sm:p-12">
    <Header />
    <h1 className="text-2xl sm:text-4xl font-bold text-center">
      Bienvenido a la app de productos
    </h1>
    <p className="mt-4 text-base sm:text-lg text-center">
      Explora nuestros productos y servicios financieros.
    </p>
    <div className="mt-6 flex flex-wrap justify-center">
  <Badge
    key="all"
    className={`mr-2 ${selectedCategory === null ? "bg-indigo-500 text-white" : ""}`}
    onClick={() => handleCategoryClick(null)}
  >
    Todos
  </Badge>
  {categories.map((category) => (
    <Badge
      key={category.id}
      className={`mr-2 ${selectedCategory === category.name ? "bg-indigo-500 text-white" : ""}`}
      onClick={() => handleCategoryClick(category.name)}
    >
      {category.name}
    </Badge>
  ))}
</div>
    <ProductList  products={filteredProducts}/>
  </main>
  );
}
