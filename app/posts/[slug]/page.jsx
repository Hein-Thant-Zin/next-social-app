export const revalidate = 10;
export default async function PostsDetails({params}) {
    const posts = await fetch('http://localhost:3000/api/posts').then((res) => res.json());
    
    const post = posts.find((item) => item.slug === params.slug);
    // console.log(post);
  return (
    <section>
      <article className='max-w-3xl p-4 mx-auto mt-6 border rounded shadow'>
             <h3 className='text-xl font-semibold'>{post.title}</h3>
             <p className='mt-2'>{post.body}</p>
      </article>
    </section>
  )
}
