import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../client';
import FeaturedPost from '../components/FeaturedPost';

export interface Post {
    mainImage: {
        asset: {
            _id: string,
            url: string
        }
    },
    slug: {
        _type: string,
        current: string
    },
    title: string
    _createdAt: string
    categories?: string[]
}

export default function AllPosts() {
    const [allPostsData, setAllPosts] = useState([])

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "post"]{
                    title,
                    categories,
                    fields,
                    _createdAt,
                    slug,
                    mainImage{
                        asset->{
                            _id,
                            url
                        }
                    }
                }
                `
            )
            .then((data) => setAllPosts(data))
            .catch(console.error)
    }, [])

    const sortedPosts = [...allPostsData].sort((a: Post, b: Post) =>
        a._createdAt < b._createdAt ? 1 : -1,
    );

    const featuredPost = sortedPosts[0];
    console.log(sortedPosts);

    return (
        <div className="bg-gray-100 min-h-screen p-12">
            <FeaturedPost post={featuredPost} />
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allPostsData &&
                        sortedPosts.map((post: Post, index: number) => (
                            <Link to={"/" + post.slug.current} key={post.slug.current}>
                                <span 
                                    className="block h-64 relative rounded shadow leading-snug bg-white border-1-8 border-green-400" 
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
                                            className="text-gray-800 cursive w-full text-lg text-center font-bold px-3 py-4 bg-blue-800 text-red-100 bg-opacity-75 rounded break-word"
                                        >
                                            {post.title}
                                        </h2>
                                    </span>
                                </span>
                            </Link>
                        ))}
                </div>
            </div>
        </div>
    )
}
