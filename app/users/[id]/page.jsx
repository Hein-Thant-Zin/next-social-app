import FollowButton from '@/components/FollowButton/FollowButton';
import { prisma } from '@/lib/prisma'
import Image from 'next/image';
import React from 'react'

export default async function UserDetails({ params }) {
  const user = await prisma.user.findUnique({
    where: {
      id: params.id,
    }
  });

  const {id,name,image,age,bio} = user ?? {}


  return (
    <div className='max-w-lg p-3 mx-auto text-center bg-green-50'>
         <div className='font-semibold'> User Details</div>
      <h2>{name}</h2>
    <Image className='mx-auto mt-2 rounded-sm aspect-square ' src={image}  width={80} height={80} alt={name} />
      <h3>{ bio }</h3>
      <p>{age} years</p>

     <FollowButton targetUserId={id} />
    </div>
  )
}
