import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import sanityClient from '../client'
import BlockContent from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(sanityClient)

const urlFor = (source: string) => {
    return builder.image(source)
}

interface PostChild {
    marks?: [];
    text: string;
    _key: string;
    _type: string;
}

interface Post {
    children: PostChild[];
    markDefs?: [];
    style: string;
    _key: string;
    _type: string;
}

interface PostState {
    authorImage: string;
    body: Post[];
    mainImage: string;
    name: string;
    slug: {
        _type: string,
        current: string 
    };
    title: string;
}

interface Slug {
    slug: string;
}

export default function OnePost() {
    const [postData, setPostData] = useState<PostState | null>(null)
    const { slug } = useParams<Slug>()

    console.log(slug)

    useEffect(() => {
        sanityClient
            .fetch(
                `*[slug.current == $slug]{
                    title,
                    slug,
                    mainImage{
                        asset->{
                            _id,
                            url
                        }
                    },
                    body,
                    "name": author->name,
                    "authorImage": author->image
                }`,
                { slug }
            )
            .then((data) => setPostData(data[0]))
            .catch(console.error)
    }, [slug])

    if (!postData) return <div>Loading...</div>

    return (
        <div>
            <div>
                <h2>{postData.title}</h2>
                <div>
                    <img
                        src={String(urlFor(postData.authorImage).width(100).url())}
                        alt="Jeff Golden Author"
                    />
                    <h4>{postData.name}</h4>
                </div>
            </div>
            <img src={String(urlFor(postData.mainImage).width(200).url())} alt="Gray Wolf" />
            <div>
                <BlockContent
                    blocks={postData.body}
                    projectId={sanityClient.clientConfig.projectId}
                    dataset={sanityClient.clientConfig.dataset}
                />
            </div>
        </div>
    )
}
