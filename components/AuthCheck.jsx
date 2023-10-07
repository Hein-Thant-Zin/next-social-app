'use client';
import { useSession } from 'next-auth/react';

export default function AuthCheck({ children }) {
  const { data: session, status } = useSession();

  // console.log(session);

  if (status === 'authenticated') {
    return <>{children}</>;
  } else {
    return <></>;
  }
}
