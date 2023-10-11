import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function UserBio() {
   const session = await getServerSession(authOptions);
    const currentUserEmail = session?.user?.email;
    const user = await prisma.user.findUnique({
        where: {
        email: currentUserEmail,
      },
    }).then((user)=>user.bio);
  const userBio = user.bio;
  console.log(userBio);
  return userBio;
}
