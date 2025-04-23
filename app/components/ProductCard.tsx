'use client';

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Product } from '../types/product';
import { FaTag, FaExclamationTriangle } from 'react-icons/fa';

type Props = {
  product: Product;
};

const Card = styled.div.attrs({
  className:
    'bg-white border border-[#6C3BFF] shadow-[0_0_10px_#6C3BFF] hover:scale-[1.02] transition-all duration-300 dark:bg-gradient-to-r from-[#3B0D99] to-[#1C043B] text-white font-bold text-sm tracking-wide w-full max-w-[400px] h-auto sm:h-[450px] shadow-md rounded-xl p-4 hover:shadow-lg',
})``;

const Divider = styled.div.attrs({
  className: 'h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent my-6',
})``;

const Title = styled.h2.attrs({
  className: 'text-2xl text-center font-[var(--font-poppins)] font-bold mb-2 text-gray-800 dark:text-white',
})``;

const Category = styled.div.attrs({
  className: 'text-sm text-gray-600 dark:text-gray-300 flex items-center mb-2',
})``;

const Risk = styled.span<{ risk: string }>`
  display: inline-block;
  margin-left: 0.5rem;
  padding: 0.25rem 0.75rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  background-color: ${({ risk }) =>
    risk === 'Alto' ? '#fee2e2' : risk === 'Medio' ? '#fef9c3' : '#dcfce7'};
  color: ${({ risk }) =>
    risk === 'Alto' ? '#b91c1c' : risk === 'Medio' ? '#92400e' : '#166534'};
`;

const ProductCard = ({ product }: Props) => {
  return (
    <Link href={`/product/${product.id}`} className="relative block focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded-xl">
      <Card>
        <Title>{product.name}</Title>
    
        <Divider />

        <Category>
          <FaTag className="mr-2" /> {product.category}
        </Category>

        <div className="mb-4">
          <div className="flex items-center text-sm">
            <FaExclamationTriangle className="mr-2 text-yellow-500" />
            Riesgo:
            <Risk risk={product.riskLevel}>{product.riskLevel}</Risk>
          </div>
          {product.interestRate && (
            <p className="text-sm mt-2 text-gray-700 dark:text-gray-300">
              Interés: <span className="font-semibold">{product.interestRate}</span>
            </p>
          )}
        </div>

        <div>
          <h3 className="text-gray-800 dark:text-gray-200 text-base font-semibold mb-1">Características:</h3>
          <p className="text-gray-600 dark:text-gray-400 font-[var(--font-inter)] text-sm">
            lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
          </p>
        </div>

        <footer className="absolute bottom-2 left-0 w-full flex justify-center">
          <button className="mt-4 text-white py-2 px-6 rounded-full text-sm bg-indigo-500 hover:bg-indigo-600 transition-colors duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-400">
            Ver más detalles →
          </button>
        </footer>
      </Card>
    </Link>
  );
};

export default ProductCard;
