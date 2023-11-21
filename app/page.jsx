export const dyanamic = "force-static";
export const revalidate = 360;
import AuthCheck from "@/components/AuthCheck";
import FadeIn from "@/components/FadeIn";
import SlideAnimation from "@/components/SlideAnimation";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
// import {motion} from 'framer-motion'

export async function generateStaticParams() {
  const posts = await prisma.post.findMany();
}

export default async function Home() {
  const posts = await prisma.post.findMany();

  return (
    <main className="container mx-auto my-2">
      <section className="mx-auto">
        <div className="container mx-auto text-center">
          <FadeIn />
          <SlideAnimation posts={posts} />
          <AuthCheck />
        </div>
      </section>
    </main>
  );
}
