import Link from "next/link";

async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Home() {
  const data = await getPosts()
  
  return (
    <main>
      <section className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">
            <div className="w-full max-w-3xl mx-auto">
            {/* <!-- Vertical Timeline #1 --> */}
                <div className="-my-6">
                  {data?.map((post, index) => (
                    <Link key={index} className="relative pl-8 sm:pl-32 py-6 group cursor-pointer " href={`/${post.id}`}>
                    {/* <!-- Purple label --> */}
                        <div className="font-medium text-indigo-500 mb-1 sm:mb-0">{post.id}</div>
                        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">USER ID: {post.userId}</time>
                            <div className="text-xl font-bold text-slate-900">{post.title}</div>
                        </div>
                        {/* <!-- Content --> */}
                        <div className="text-slate-500">{post.body}</div>
                  
                    </Link>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
