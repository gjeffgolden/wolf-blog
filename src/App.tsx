import { BrowserRouter, Route } from 'react-router-dom';
import AllPosts from './pages/AllPosts';
import OnePost from './pages/OnePost';
import Footer from './components/Footer';
import Header from './components/Header';


import './App.css';

//https://www.sanity.io/guides/build-your-first-blog-using-react


function App() {

  return (
    <BrowserRouter>
      <Header />
      <div>
        <Route component={AllPosts} path="/" exact />
        <Route component={OnePost} path="/:slug" />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
