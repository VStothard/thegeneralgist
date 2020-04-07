import Link from 'next/link'

const topNavigation = () => {
  return (
    <div className="bg-gray-200 py-2">
      <div className="container mx-auto">
        <div className="flex justify-around max-w-xl mx-auto">
          <Link href="home"><a>Home</a></Link>
          <Link href="blog"><a>Blog</a></Link>
          <Link href="videos"><a>Videos</a></Link>
          <Link href="illustration"><a>Illustration</a></Link>
        </div>
      </div>
    </div>
  )
}

export default topNavigation;