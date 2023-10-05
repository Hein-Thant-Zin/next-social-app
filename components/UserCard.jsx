import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

export default function UserCard({ user }) {
   const { age, id, name, image }=user;
    // console.log({name});
    return (
         <Link className='container mx-auto' href={`/users/${id}`}>
        <article className='container items-center w-32 mx-auto text-center transition border rounded shadow hover:shadow-md hover:border hover:bg-slate-200'>
            <Image className='mx-auto mt-2 rounded-sm ' src={image}  width={80} height={80} alt={name} />
            {/* <div className='items-center'><img src={ user.image } alt={user.name} width={50} height={50} /></div> */}
          <div>
              <h3 className='m-2'>{name}</h3>
              <p>{age}</p>
         </div>
    </article>
        </Link>
  )
}
