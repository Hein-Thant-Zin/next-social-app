import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  const session = await getServerSession(authOptions);
  const currentUserEmail = session?.user?.email;
  const currentUserId = await prisma.user
    .findUnique({
      where: {
        email: currentUserEmail,
      },
    })
    .then((user) => user.id);

  const { targetUserId } = await req.json();

  // console.log({ currentUserEmail, targetUserId });

  const record = await prisma.follows.create({
    data: {
      followerId: currentUserId,
      followingId: targetUserId,
    },
  });
  return NextResponse.json(record);
}
export async function DELETE(req) {
  const session = await getServerSession(authOptions);
  const currentUserEmail = session?.user?.email;
  const currentUserId = await prisma.user
    .findUnique({
      where: {
        email: currentUserEmail,
      },
    })
    .then((user) => user.id);
  //another method
  const targetUserId = req.nextUrl.searchParams.get("targetUserId");
  const record = await prisma.follows.delete({
    where: {
      followerId_followingId: {
        followerId: currentUserId,
        followingId: targetUserId,
      },
    },
  });
  return NextResponse.json(record);
}
