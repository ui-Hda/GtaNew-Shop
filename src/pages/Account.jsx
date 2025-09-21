import React from 'react'

export default function Account(){
  return (
    <div>
      <h1 className='text-2xl font-bold mb-4'>Mon compte</h1>
      <p>Connexion via Discord (stub).</p>
      <a className='inline-block mt-4 px-4 py-2 bg-gray-800 text-white rounded' href={`https://discord.com/api/oauth2/authorize?client_id=${import.meta.env.VITE_DISCORD_CLIENT_ID}&redirect_uri=${encodeURIComponent(location.origin + '/account')}&response_type=code&scope=identify`}>Se connecter avec Discord</a>
    </div>
  )
}