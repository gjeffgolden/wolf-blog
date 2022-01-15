import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import sanityClient from "../client"
import BlockContent from "@sanity/block-content-to-react"
import imageUrlBuilder from "@sanity/image-url"

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

export default function OnePost () {
  const [postData, setPostData] = useState<PostState | null>(null)
  const { slug } = useParams()

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
    <div className="bg-gray-100 min-h-screen p-12">
      <div className="container shadow-lg mx-auto bg-green-100 rounded-lg">
        <div className="relative">
          <div className="absolute h-full w-full flex items-center justify-center p-8">
            <div className="bg-white bg-opacity-75 rounded p-12">
              <h2 className="cursive text-3xl lg:text-6xl mb-4">
                {postData.title}
              </h2>
              <div className="flex justify-center text-gray-800">
                <img
                  className="w-10 h-10 rounded-full"
                  src={`${urlFor(postData.authorImage).width(100).url()}`}
                  alt="Jeff Golden Author"
                />
                <h4 className="cursive flex items-center pl-2 text-2xl">
                  {postData.name}
                </h4>
              </div>
            </div>
          </div>
          <img
            className="w-full object-cover rounded-t"
            src={String(urlFor(postData.mainImage).width(2000).url())}
            alt="Gray Wolf"
            style={{ height: "400px" }}
          />
        </div>
        <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
          <BlockContent
            blocks={postData.body}
            projectId={sanityClient.clientConfig.projectId}
            dataset={sanityClient.clientConfig.dataset}
          />
        </div>
      </div>
    </div>
  )
}
