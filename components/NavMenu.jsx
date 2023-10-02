import { SignInButton, SignOutButton } from '@/components/buttons'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AuthCheck from './AuthCheck'

export default function NavMenu() {
  return (
    <nav className='p-4 py-2 border-b'>
      <div className="container flex items-center justify-between mx-auto">
        <Link href='/'>
           <Image src='/next.svg' width={200} height={30} alt='social logo' />
        </Link>

        <ul className='flex items-center justify-between max-w-3xl gap-8'>
          
          <li className='hover-transition'>
            <Link  href='/users'>Users</Link>
          </li>
          <li className='hover-transition'>
            <Link href='/about'>About</Link>
          </li>
          <li className='hover-transition'>
            <SignInButton />
          </li>
          <li className=''>
            <AuthCheck>
            <SignOutButton />
          </AuthCheck>
          </li>
        </ul>
      </div>
    </nav>
  )
}
