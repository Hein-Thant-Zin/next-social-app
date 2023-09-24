import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function NavMenu() {
  return (
    <nav className='p-4 py-2 border-b'>
      <div className="container flex items-center justify-between mx-auto">
        <Link href='/'>
           <Image src='/next.svg' width={200} height={30} alt='social logo' />
        </Link>

        <ul className='flex items-center justify-between max-w-3xl gap-4'>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/posts'>Posts</Link>
          </li>
          <li>
            <Link href='/users'>Users</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
