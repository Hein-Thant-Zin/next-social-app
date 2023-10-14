'use client'
import Link from 'next/link'
import React from 'react'
import {motion} from 'framer-motion'

export default function SlideAnimation({ posts }) {
    const itemVarients = {
        hidden: { opacity: 0, x: -200 },
        visible: { opacity: 1, x: 0 },
        // transition : { duration : 1 }
    }
    return (
      <motion.ul variants={itemVarients} transition={{ duration : 1.5 }} animate='visible' initial='hidden' className='max-w-3xl mx-auto mt-2 space-y-4'>
            {posts.map((post) => (
                <motion.article  className='p-2 text-center transition border rounded shadow hover:bg-slate-100' key={post.slug}>
                  <Link  href={`/posts/${post.slug}`}><h2 className=''>{post.title}</h2>
                </Link>  
      </motion.article>
      ))}
        </motion.ul>
  )
}
