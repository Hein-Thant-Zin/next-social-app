'use client'
import React from 'react'
import {motion} from 'framer-motion'
export default function FadeIn() {
  return (
      <motion.h1 initial={{ opacity: 0 , y : -5 }} animate={{ opacity : 1 ,y : 0}} transition={{ duration : 1 }} className='text-2xl font-semibold text-center'>New Feeds</motion.h1>
  )
}
