import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }){
  const [items, setItems] = useState([])
  const add = (product) => {
    setItems((s) => {
      const found = s.find(i => i.id === product.id)
      if(found) return s.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i)
      return [...s, { ...product, qty: 1 }]
    })
  }
  const remove = (id) => setItems(s => s.filter(i => i.id !== id))
  const clear = () => setItems([])
  const total = items.reduce((acc, i) => acc + i.price * i.qty, 0)
  return (
    <CartContext.Provider value={{ items, add, remove, clear, total }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)