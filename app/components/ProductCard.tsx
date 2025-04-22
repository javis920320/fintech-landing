'use client'
import styled from 'styled-components';
import { Product } from '@/types/product';

type Props = {
    product: Product
}

const Card = styled.div`
@apply bg-white dark:bg-gray-800 shadow-md rounded-xl p-4 hover:shadow-lg transition duration-300 ease-in-out;
`
const Title = styled.h3`
@apply text-lg font-semibold  mb-2 text-gray-800 dark:text-white;
`

const Category = styled.span`
@apply text-sm text-indigo-600 dark:text-indigo-400;
`

const Risk = styled.span<{ risk: string }>`
@apply text-sm font-medium px-2 py-1 rounded;
background-color: ${({ risk }) =>
        risk === "Alto" ? "#f87171" :
            risk === "Medio" ? "#fbbf24" :
                risk === "Bajo" ? "#34d399" :
                    "#9ca3af"}; 
    color:${({ risk }) =>
        risk === "Alto" ? "#b91c1c" :
            risk === "Medio" ? "#92400e" :
                risk === "Bajo" ? "#166534" :
                    "#000"};

`


import React, { use } from 'react'
import Link from 'next/link';


const ProductCard = ({ product }: Props) => {
    return (
        <Link href={`/products/${product.id}`}>
            <Card>
                <Title>{product.name}</Title>
                <Category>{product.category}</Category>
                <p className='text-sm mt-2'>
                    Tasa de Interes:
                    <span className='font-semibold'>
                        {product.interestRate ?? "No aplica"}
                    </span>
                </p>
                <div className=' mt-2
                '>  
                Riesgo:<Risk risk={product.riskLevel}>{product.riskLevel}</Risk>

                </div>
                <button className='mt-4 text-indigo-600 hover:underline text-sm'>Ver mas detalles →</button>

                <Risk risk={product.riskLevel}>{product.riskLevel}</Risk>
                {product.interestRate && <p>Interés: {product.interestRate}</p>}
            </Card>
        </Link>


    )
}

export default ProductCard