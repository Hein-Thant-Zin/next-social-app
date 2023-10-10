import { prisma } from "@/lib/prisma";

export default async function UserBio() {
    const user = await prisma.user.findUnique({
        where: {
        email: currentUserEmail,
      },
    });
  const userBio = user.bio;
  // console.log(userBio);
    return userBio;
}
