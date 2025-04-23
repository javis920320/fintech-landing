"use client"
import { Product } from '../../types/product';
import products from '../../data/products.json';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import styled from 'styled-components';
import { use } from 'react';

type Params = {
  params: {
    id: string;
  };
};

export default function ProductDetail({ params }: Params) {
  const product: Product | undefined = products.find(p => p.id === params.id);

  const Section=styled.div.attrs({    
    className: 'g-[#0B0B16]  w-[70%] bg-[#1D1B2A] content-center text-white rounded-2xl p-10 border border-[#3D2C8D] flex flex-col lg:flex-row gap-8 shadow-[0_0_20px_rgba(93,52,230,0.3)]',
  })``; 

  if (!product) return notFound();

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0B0B16]">
        {JSON.stringify(params)}
    <Section>
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <div className="mb-6 space-y-2">
        <p><strong>Tipo:</strong> {product.category}</p>
        <p><strong>Categoría:</strong> {product.category}</p>
        <p><strong>Tasa de interés:</strong> {product.interestRate ?? 'No aplica'}</p>
        <p><strong>Nivel de riesgo:</strong> {product.riskLevel}</p>
      </div>

      <Link href="/" className="text-indigo-400 hover:underline">
        ← Volver al catálogo
      </Link>
    </Section>
    </div>
  );
}
