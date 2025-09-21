import React from 'react'
import { useCart } from '../context/CartContext'

export default function ProductCard({ product }){
  const { add } = useCart()
  return (
    <div className='bg-white shadow rounded overflow-hidden'>
      <img src={product.image} alt={product.title} className='w-full h-44 object-cover' />
      <div className='p-4'>
        <h3 className='font-semibold'>{product.title}</h3>
        <p className='text-sm text-slate-600 mt-1'>{product.description}</p>

        <div className='mt-4 flex items-center justify-between'>
          <div className='text-lg font-bold'>{product.price} €</div>
          <button onClick={() => add(product)} className='px-3 py-1 bg-indigo-600 text-white rounded'>Ajouter</button>
        </div>
      </div>
    </div>
  )
}