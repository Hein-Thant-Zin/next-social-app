// import { getServerSession } from "next-auth";
// import { authOptions } from "./auth/[...nextauth]/route";
// import { prisma } from "@/lib/prisma";

// export default async function getCurrentUser() {
//   const session = await getServerSession(authOptions);
//   const currentUserEmail = session?.user?.email;
//   const currentUserId = await prisma.user
//     .findUnique({
//       where: {
//         email: currentUserEmail,
//       },
//     })
//     .then((user) => user.id);
//   return currentUserId;
// }
