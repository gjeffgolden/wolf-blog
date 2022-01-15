import { BrowserRouter, Route, Routes } from "react-router-dom"
import AboutMe from "./pages/AboutMe"
import AllPosts from "./pages/AllPosts"
import OnePost from "./pages/OnePost"
import Footer from "./components/Footer"
import Header from "./components/Header"

import "./App.css"

// https://www.sanity.io/guides/build-your-first-blog-using-react

function App () {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<AllPosts />} path="/" />
        <Route element={<OnePost />} path="/:slug" />
        <Route element={<AboutMe />} path="/about-the-author" />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
