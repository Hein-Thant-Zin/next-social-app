import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import FollowButton from "@/components/FollowButton/FollowButton";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import Image from "next/image";
import React from "react";

export default async function UserDetails({ params }) {
  const session = await getServerSession(authOptions);
  const currentUserEmail = session?.user?.email;
  const currentUserId = await prisma.user
    .findUnique({
      where: {
        email: currentUserEmail,
      },
    })
    .then((user) => user.id);
  const user = await prisma.user.findUnique({
    where: {
      id: params.id,
    },
  });

  const { id, name, image, age, bio } = user ?? {};

  return (
    <main className="max-w-lg p-4 mx-auto mt-6 text-center shadow bg-slate-100">
      <div className="font-semibold"> User Details</div>
      <Image
        className="mx-auto mt-2 rounded-sm aspect-square "
        src={image}
        width={80}
        height={80}
        alt={name}
      />
      <h2 className="mt-2">{name}</h2>
      <h3>{bio}</h3>
      <p>{age ? `${age} years` : ""} </p>
      {currentUserId !== id ? <FollowButton targetUserId={id} /> : ""}
    </main>
  );
}
