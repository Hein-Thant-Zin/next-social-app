import Image from 'next/image'
import React from 'react'

export default function UserCard({ user }) {
   const { age, id, name, image }=user;
    // console.log({name});
  return (
     <article className='container items-center w-32 mx-auto text-center border rounded shadow'>
            <Image className='mx-auto mt-2 rounded-sm ' src={image}  width={80} height={80} alt={name} />
            {/* <div className='items-center'><img src={ user.image } alt={user.name} width={50} height={50} /></div> */}
          <div>
              <h3 className='m-2'>{name}</h3>
              <p>{age}</p>
         </div>
    </article>
  )
}
