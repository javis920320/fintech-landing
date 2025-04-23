"use client"
import  { useState } from 'react'
import { Product } from '../types/product'
import productData from "../data/products.json" ;
import ProductCard from './ProductCard';


const ProductList = () => {
    const[products, setProducts] = useState<Product[]>(productData);
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6' 
    >
        {products.map((product)=>(
            <ProductCard key={product.id} product={product} />  
        ))}
    </div>
  )
}

export default ProductList