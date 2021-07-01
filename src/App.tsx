import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import AllPosts from './components/AllPosts'
import OnePost from './components/OnePost'


import './App.css';

//https://www.sanity.io/guides/build-your-first-blog-using-react


function App() {

  return (
    <BrowserRouter>
      <section>
        <Route component={AllPosts} path="/" exact />
        <Route component={OnePost} path="/:slug" />
      </section>
    </BrowserRouter>
  );
}

export default App;
