import { Post } from '../pages/AllPosts';
import { Link } from 'react-router-dom';

interface FeaturedPostProps {
    post: Post
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({ post }) => {
    return (
        <div className="pb-12" style={{height: "36rem"}}>
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
                            className="block relative h-full flex justify-end items-end pr-4 pb-4"
                        >
                            <h2
                                className="text-gray-800 text-lg font-bold px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded"
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

export default FeaturedPost;
