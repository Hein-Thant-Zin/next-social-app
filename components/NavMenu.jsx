import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function NavMenu() {
  return (
    <nav className='py-2'>
      <div className="container flex items-center justify-between mx-auto">
        <Link href='/'>
           <Image src='/next.svg' width={214} height={30} alt='social logo' />
        </Link>

        <ul className='flex items-center justify-between max-w-3xl'>
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
