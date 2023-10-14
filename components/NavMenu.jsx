'use client'
import { SignInButton, SignOutButton } from '@/components/buttons'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AuthCheck from './AuthCheck'
import {motion} from 'framer-motion'

export default function NavMenu() {
  return (
    <motion.nav initial={{ opacity: 0 , y : -10 }} animate={{ opacity : 1 ,y : 0}} transition={{ duration : 2 }} className='p-4 py-2 border-b shadow'>
      <div className="container flex items-center justify-between mx-auto">
        <Link href='/'>
           <h1 className='font-serif text-4xl font-extrabold tracking-wider'>ANTIDOTE</h1>
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
    </motion.nav>
  )
}
