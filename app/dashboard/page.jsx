// 'use client'
import { getServerSession } from "next-auth";
import UserProfile from "./UserProfile";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from 'next/navigation';

export default async function UserDashboard() {
   

  // console.log({res});
  // if (!session) {
  //   redirect ('api/auth/signin')
  // }
  return (
    <section>
      <div className="container mx-auto">
        <UserProfile />
    </div>
    </section>
  )
}
