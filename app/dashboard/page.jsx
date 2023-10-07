import { getServerSession } from "next-auth";
import UserProfile from "./UserProfile";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from 'next/navigation';
import { useSession } from "next-auth/react";

export default async function UserDashboard() {
   
const session = await getServerSession(authOptions);
  // console.log(session);
  if (!session) {
    redirect ('api/auth/signin')
  }
  return (
    <section>
      <div className="container mx-auto">
        <UserProfile />
    </div>
    </section>
  )
}
