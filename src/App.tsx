import { BrowserRouter, Route, Routes } from "react-router-dom"
import AboutMe from "./pages/AboutMe"
import AllPosts from "./pages/AllPosts"
import Essays from "./pages/Essays"
import Footer from "./components/Footer"
import Header from "./components/Header"
import OnePost from "./pages/OnePost"
import Stories from "./pages/Stories"
import WolfNews from "./pages/WolfNews"

import "./App.css"

function App () {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<AboutMe />} path="/about-the-author" />
        <Route element={<AllPosts />} path="/" />
        <Route element={<Essays />} path="/essays" />
        <Route element={<OnePost />} path="/:slug" />
        <Route element={<Stories />} path="/short-stories" />
        <Route element={<WolfNews />} path="/wolf-news" />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
