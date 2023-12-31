'use client';
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export  function SignInButton() {
  const { data: session, status } = useSession();
  // console.log(session);
    if (status === 'loading') {
        return '...'
    }
    if (status === 'authenticated') {
            return (
                <Link href='/dashboard'>
                    <Image className="border rounded border-x-neutral-800" src={session.user?.image} alt='user image' width={32} height={32} />
              </Link>
      )
    }
    return <button onClick={()=> signIn()}>Sign In</button>
}

export  function SignOutButton() {
  return (
    <button onClick={()=>signOut()}>
      Sign Out
    </button>
  )
}
