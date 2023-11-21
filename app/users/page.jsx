import UserCard from "@/components/UserCard";
import { prisma } from "@/lib/prisma";
import Image from "next/image";
import React from "react";

export default async function Users() {
  // throw new Error('error');
  const users = await prisma.user.findMany();

  return (
    <section>
      <h2 className="mt-4 font-semibold text-center">Users</h2>
      <div className="container flex flex-wrap mx-auto mt-2">
        {users.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
      </div>
    </section>
  );
}
