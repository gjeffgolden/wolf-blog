import { useState, useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import sanityClient from "./client"

import AboutMe from "./pages/AboutMe"
import AllPosts from "./pages/AllPosts"
import Essays from "./pages/Essays"
import Footer from "./components/Footer"
import Header from "./components/Header"
import OnePost from "./pages/OnePost"
import Stories from "./pages/Stories"
import WolfNews from "./pages/WolfNews"
import { Post } from "./interfaces"

function App () {
  const [allPostsData, setAllPosts] = useState<Post[]>([])

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
                    title,
                    _createdAt,
                    slug,
                    mainImage{
                        asset->{
                            _id,
                            url
                        }
                    },
                    categories[] -> {
                      title
              },
                }
                `
      )
      .then((data: Post[]) => setAllPosts(data))
      .catch(console.error)
  }, [])

  const sortedPosts = [...allPostsData].sort((a: Post, b: Post) =>
    a._createdAt < b._createdAt ? 1 : -1
  )

  const wolfNews = allPostsData.filter(
    post => post?.categories.map(
      category => category.title
    ).includes("News")
  )

  const essays = allPostsData.filter(
    post => post?.categories.map(
      category => category.title
    ).includes("Essays")
  )

  const stories = allPostsData.filter(
    post => post?.categories.map(
      category => category.title
    ).includes("Stories")
  )
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<AboutMe />} path="/about-the-author" />
        <Route element={<AllPosts sortedPosts={sortedPosts} />} path="/" />
        <Route element={<Essays essays={essays} />} path="/essays" />
        <Route element={<OnePost />} path="/:slug" />
        <Route element={<Stories stories={stories} />} path="/short-stories" />
        <Route element={<WolfNews wolfNews={wolfNews} />} path="/wolf-news" />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
