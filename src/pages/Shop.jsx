import React from 'react'
import products from '../data/products.json'
import ProductCard from '../components/ProductCard'

export default function Shop(){
  return (
    <div>
      <h1 className='text-2xl font-bold mb-4'>Boutique</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}