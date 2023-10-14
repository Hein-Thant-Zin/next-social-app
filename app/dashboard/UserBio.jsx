import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function UserBio() {
   const session = await getServerSession(authOptions);
    const currentUserEmail = session?.user?.email;
    const userAge = await prisma.user.findMany().then((user)=>user.age);
  // const userBio = user.age;
  console.log(userAge);
  return userAge;
}
