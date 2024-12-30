import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivatRoute from './components/PrivatRouter';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import CreateArticle from './pages/CreateArticle/CreateArticle';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ArticlePage from './pages/ArticlePage/ArticlePage';


import NoMatch from './pages/NoMatch/NoMatch';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/countries" element={<CategoryPage/>}/>
      
        <Route path=':country' element={<CategoryPage />}>
       <Route path=":id" element={<ArticlePage />} />
       </Route>
           <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      
          <Route path='/create-article' element={          
              <CreateArticle />                     
        } />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;


//  @ts-ignore
