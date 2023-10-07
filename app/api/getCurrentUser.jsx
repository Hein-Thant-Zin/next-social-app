import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]/route";

export default async function getCurrentUser() {
      const session = await getServerSession(authOptions);
     const currentUserEmail = session?.user?.email;
  return (
    <div>
      
    </div>
  )
}
