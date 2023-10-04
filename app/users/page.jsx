import React from 'react'

export default async function Users() {
  const users = await prisma.user.findMany();
  console.log({users});
  return (
    <main>
      Home page of users
    </main>
  )
}
