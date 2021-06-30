import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import AllPosts from './components/AllPosts'
import OnePost from './components/OnePost'


import './App.css';

//https://www.sanity.io/guides/build-your-first-blog-using-react
//Stopped at "Building React Components"

function App() {

  return (
    <BrowserRouter>
      <main>
        <Route component={AllPosts} path="/" exact />
        <Route component={OnePost} path="/:slug" />
      </main>
    </BrowserRouter>
  );
}

export default App;
