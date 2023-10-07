'use client'
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route';
import { useSession } from 'next-auth/react';

export default  function UserProfile() {
    const { data: session, status } = useSession(authOptions);
    
 
    // console.log(session);
    
    async function handleSubmit(e) {
       
    e.preventDefault();

    const formData = new FormData(e.target);

    const body = {
      name: formData.get('name'),
      bio: formData.get('bio'),
    };

    const res = await fetch('/api/user', {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
      // console.log(res);

      await res.json();
  };
  if (status === 'loading') return null;
  const user = session.user;
  return (
      <div className='max-w-xl p-5 mx-auto mt-8 border rounded-md shadow'>
          <h2 className='my-1 text-lg font-semibold text-center'>Update your profile</h2>
          <form onSubmit={handleSubmit}>
              <div className='mt-4'>
                   <label className='block' htmlFor="name">Name</label>
                  <input type="text" className='w-full p-2 mt-1 border rounded-md shadow-sm focus:border-slate-400 outline-0' name='name' id="name" defaultValue={user?.name ?? ''} />
              </div>
                <div className='mt-6'>
                   <label className='block' htmlFor="bio">Bio</label>
                  <textarea className='w-full p-2 pt-1 border rounded-md shadow-sm focus:border-slate-400 outline-0'  name='bio' id="bio" defaultValue={user?.bio ?? ''} />
              </div>
              <button  className='px-4 mt-4 rounded shadow bg-slate-300' type='submit'>Save</button>
      </form>
    </div>
  )
}
