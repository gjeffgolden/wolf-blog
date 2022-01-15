import { FC } from "react"
import { Post } from "../pages/AllPosts"
import { Link } from "react-router-dom"

interface FeaturedPostProps {
    post: Post
}

const FeaturedPost: FC<FeaturedPostProps> = ({ post }) => {
  return (
    <div className="pb-12" style={{ height: "36rem" }}>
      {post &&
        <Link to={"/" + post.slug.current} key={post.slug.current}>
          <span
            className="block h-full relative rounded shadow leading-snug bg-white border-1-8 border-green-400"
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
                className="text-gray-800 cursive w-full text-center text-6xl font-bold px-3 py-4 bg-green-800 text-red-100 bg-opacity-75 uppercase"
              >
                {post.title}
              </h2>
            </span>
          </span>
        </Link>
      }
    </div>
  )
}

export default FeaturedPost
