export const dyanamic ='force-dynamic'
import NavMenu from '@/components/NavMenu'
import Image from 'next/image'
import Link from 'next/link';
export default async function Home() {
  // const [isOpen, setIsOpen] = useState(false);

  const posts = await fetch('http://localhost:3000/api/posts', {
    cache : 'no-cache'
  }).then((res) => res.json());

  return (
    <main className='container mx-auto my-2'>
      <section className='mx-auto'>
        <div className="container mx-auto text-center">
          <h2 className='text-2xl font-semibold text-center '>User Posts</h2>

          <ul className='max-w-3xl mx-auto mt-2 space-y-4'>
              {posts.map((post) => (
                <article className='p-2 text-center border rounded shadow hover:bg-slate-100' key={post.slug}>
                  <Link  href={`/posts/${post.slug}`}><h3 className=''>{post.title}</h3>
                 </Link>
               
              </article>
            ))}
        </ul>
        </div>
      </section>
    </main>
  )
}
