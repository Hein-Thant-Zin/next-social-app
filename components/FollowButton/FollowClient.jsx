'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function FollowClient({ isFollowing, targetUserId }) {
    const router = useRouter();
    const [isFetching, setIsFetching] = useState(false);

    async function follow() {
        setIsFetching(true);

       const res = await fetch('/api/follow', {
           method: 'POST',
           body: JSON.stringify({ targetUserId }),
           headers: {
               'Content-Type': 'appication/json'
           }
       });
       console.log(res);

       setIsFetching(false);

       //only rendering backend state without interferencing frontend
    //    router.refresh();
    }
    async function unfollow() {
        setIsFetching(true);

        await fetch(`/api/follow?targetUserId=${targetUserId}`, {
            method: 'DELETE',
            // body: JSON.stringify({ targetUserId }),
        //    headers: {
        //        'Content-Type': 'appication/json'
        //    }
            
        })

        setIsFetching(false);
        router.refresh();
    }
  if (isFollowing) {
        return <button className='follow-btn' onClick={unfollow}>{ isFetching ? '...' : 'Unfollow' }</button>
    } else {
      return <button className='follow-btn' onClick={follow}>{ isFetching ? '...' : 'Follow' }</button>
    }
}
