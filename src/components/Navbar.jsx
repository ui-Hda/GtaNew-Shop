import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Navbar(){
  const { items } = useCart()
  const itemCount = items.reduce((s,i)=> s + i.qty, 0)
  return (
    <nav className='bg-white shadow-sm'>
      <div className='container mx-auto p-4 flex justify-between items-center'>
        <div className='flex items-center gap-4'>
          <Link to='/' className='font-bold text-xl'>RP Shop</Link>
          <Link to='/shop' className='text-slate-600 hover:text-slate-900'>Boutique</Link>
        </div>
        <div className='flex items-center gap-4'>
          <Link to='/account' className='text-slate-600 hover:text-slate-900'>Compte</Link>
          <button className='relative'>
            Panier
            {itemCount > 0 && (
              <span className='absolute -top-2 -right-6 bg-red-500 text-white rounded-full px-2 text-xs'>{itemCount}</span>
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}