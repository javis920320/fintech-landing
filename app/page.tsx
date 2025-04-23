
"use client";  

import Image from "next/image";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { useState } from "react";
import { Categorys, Product } from "./types/product";
import styled from "styled-components";

export default function Home() {
  const[filteresProducts, setFilteredProducts] = useState<Categorys[]>([
    { id: "1", name: "Ahorro" },
    { id: "2", name: "Inversiones" },
    { id: "3", name: "Prestamos" },
    { id: "4", name: "Tarjetas de credito" },
    { id: "5", name: "Seguros" },
    { id: "6", name: "Hipotecas" },
    { id: "7", name: "Fondos de inversion" },
    { id: "8", name: "Planes de pensiones" }, 
  ]); 
  
  
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
      {filteresProducts.map((category) => (<Badge key={category.id} className="mr-2">{category.name}</Badge>))}  

    </div>
    <ProductList />
  </main>
  );
}
