import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
        <div className='flex items-center space-x-2'>
            <Link href="/">
            <h1 className='text-transparent font-bold tracking-tight  bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-400'>F5antos</h1>
            </Link>
        </div>
        <div>
        </div>
    </header>
  )
}

export default Header