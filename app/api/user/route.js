import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getSession, useSession } from "next-auth/react";

export async function PUT(req) {
  const session = await prisma.user.findMany();
  // const session = await getServerSession(authOptions);
  // console.log({ session });
  const currentUserId = session.map((ses) => ses.id);
  // const id = currentUserId;
  // const currentUserId = session.indexOf();
  // const currentUserEmail = session?.user?.email;

  // console.log(currentUserId);
  //requested data from client
  const data = await req.json();
  const user = await prisma.user.update({
    where: {
      id: currentUserId[0],
    },
    data,
  });
  return NextResponse.json(user);
}
