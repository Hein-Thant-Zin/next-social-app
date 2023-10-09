'use client';
import { useRouter } from 'next/navigation';
import React, { useState, useTransition } from 'react'

export default function FollowClient({ isFollowing, targetUserId }) {
    const router = useRouter();
    const [isFetching, setIsFetching] = useState(false);
    const [isPending, startTransition] = useTransition();
    const isMutating = isFetching || isPending;

    async function follow() {
        setIsFetching(true);

       const res = await fetch('/api/follow', {
           method: 'POST',
           body: JSON.stringify({ targetUserId }),
           headers: {
               'Content-Type': 'appication/json'
           }
       });
    //    console.log(res);

        setIsFetching(false);
        
        startTransition(() => {
            //only rendering backend state without interferencing frontend
       router.refresh();    
        })

       
    }
    async function unfollow() {
        setIsFetching(true);

        await fetch(`/api/follow?targetUserId=${targetUserId}`, {
            method: 'DELETE',
        })

        setIsFetching(false);
        startTransition(() => {
            //only rendering backend state without interferencing frontend
       router.refresh();    
        }) 
    }
  if (isFollowing) {
        return <button className='transition follow-btn hover:bg-slate-700' onClick={unfollow}>{ isMutating ? '...' : 'Unfollow' }</button>
    } else {
      return <button className='transition follow-btn hover:bg-slate-700' onClick={follow}>{ isMutating ? '...' : 'Follow' }</button>
    }
}
