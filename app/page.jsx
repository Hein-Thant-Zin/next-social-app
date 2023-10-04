export const dyanamic = 'force-static';
export const revalidate = 360;
import AuthCheck from '@/components/AuthCheck';
import Link from 'next/link';

export async function generateStaticParams() {
  const posts = await fetch('http://localhost:3000/api/posts').then((res) => res.json());
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function Home() {
  const posts = await fetch('http://localhost:3000/api/posts', {
    cache : 'no-cache'
  }).then((res) => res.json());

  return (
    <main className='container mx-auto my-2'>
      <section className='mx-auto'>
        <div className="container mx-auto text-center">
          <h2 className='text-2xl font-semibold text-center '>New Feeds</h2>

          <ul className='max-w-3xl mx-auto mt-2 space-y-4'>
              {posts.map((post) => (
                <article className='p-2 text-center transition border rounded shadow hover:bg-slate-100' key={post.slug}>
                  <Link  href={`/posts/${post.slug}`}><h3 className=''>{post.title}</h3>
                 </Link>  
              </article>
            ))}
          </ul>
          <AuthCheck />
        </div>
      </section>
    </main>
  )
}
