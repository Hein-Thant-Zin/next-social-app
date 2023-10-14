'use client'
import Link from 'next/link'
import React from 'react'
import {motion} from 'framer-motion'

export default function SlideAnimation({ posts }) {
    const itemVarients = {
        hidden: { opacity: 0 },
        visible:  (customDelay)=>( { opacity: 1, x: 0 ,duration : 1.5 ,delay : customDelay}),
        // transition : { duration : 1 }
    }
    return (
        <ul   className='max-w-3xl mx-auto mt-2 space-y-4'>
            {posts.map((post,index) => (
                <motion.li layoutId={posts.id} initial='hidden' variants={itemVarients} key={posts.id} transition={{ duration : 1.5 ,delay : (index + 1)*0.5}} animate='visible'  className='p-2 text-center transition border rounded shadow hover:bg-slate-100' key={post.slug}>
                  <Link  href={`/posts/${post.slug}`}><ul className=''>{post.title}</ul>
                </Link>  
      </motion.li>
      ))}
        </ul>
  )
}
