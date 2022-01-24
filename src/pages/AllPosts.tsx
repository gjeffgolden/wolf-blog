import { FC } from "react"
import { Link } from "react-router-dom"
import FeaturedPost from "../components/FeaturedPost"
import { Post } from "../interfaces"

interface AllPostsProps {
  sortedPosts: Post[];
}

const AllPosts: FC<AllPostsProps> = ({ sortedPosts }) => {
  const featuredPost = sortedPosts[0]
  return (
    <main className="bg-green-100 min-h-screen p-12">
      <FeaturedPost featuredPost={featuredPost} />
      <div className="container mx-auto">
        <article className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {!!sortedPosts &&
            sortedPosts.map((post: Post, index: number) => (
              <Link to={"/" + post.slug.current} key={post.slug.current}>
                <span
                  className='block h-64 relative rounded shadow leading-snug bg-white border-1-8 border-green-400'
                  key={index}
                >
                  <img
                    className="w-full h-full rounded-r object-cover absolute"
                    src={post.mainImage.asset.url}
                    alt="Blog main header"
                  />
                  <span
                    className="block relative h-full flex justify-end items-end pb-4"
                  >
                    <h2
                      className="text-gray-800 header w-full text-lg text-center font-bold px-3 py-4 bg-blue-800 text-red-100 bg-opacity-75 rounded break-word"
                    >
                      {post.title}
                    </h2>
                  </span>
                </span>
              </Link>
            ))}
        </article>
      </div>
    </main>
  )
}

export default AllPosts
