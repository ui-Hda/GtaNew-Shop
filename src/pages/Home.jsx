import React from 'react'

export default function Home(){
  return (
    <div className='space-y-6'>
      <header className='bg-white p-6 rounded shadow'>
        <h1 className='text-3xl font-bold'>Bienvenue sur la boutique du serveur RP</h1>
        <p className='text-slate-600 mt-2'>Supporte le serveur, achète des cosmétiques, des packs VIP et plus.</p>
      </header>
      <section className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div className='p-4 bg-white rounded shadow'>Promo du mois</div>
        <div className='p-4 bg-white rounded shadow'>Top ventes</div>
        <div className='p-4 bg-white rounded shadow'>Stats</div>
      </section>
    </div>
  )
}