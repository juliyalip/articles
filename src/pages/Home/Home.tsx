import React, { useEffect, useState, useContext } from 'react';
import TopArticlesList from '../../components/TopArticlesList/TopArticlesList';
import Container from '../../components/Container/Container';
import List from '../../components/List/List';
import ArticleItem from '../../components/ArticleItem/ArticleItem';
import imgSl1 from '../../images/slovenia/imgSl1.jpg';
import { getAllArticles } from '../../service-api/articles-api';
import { IArticle } from '../../interfaces/articles';
import Button from '../../components/Button/Button';

import style from './Home.module.scss'

export default function Home() {
  const [articles, setArticles] = useState<IArticle[]>([]); 
  const [page, setPage] = useState<number>(1); 
  const [loading, setLoading] = useState<boolean>(false); 
const [hasArticles, setHasArticles] = useState<boolean>(true)


  useEffect(() => {
    let isMounted = true; 
    setLoading(true); 

    const getArticles = async () => {
      try {
        const {data, hasMoreArticles} = await getAllArticles(page); 
 if(isMounted){
  setArticles(prevState => [...prevState, ...data])
  setHasArticles(hasMoreArticles)
 }
      } catch (error) {
        console.error(error); 
      } finally {
        if (isMounted) {
          setLoading(false); 
        }
      }
    };
    getArticles();
    return () => {
      isMounted = false; 
    };
  }, [page]); 

  const handleOnLoadMore = () => {
    setPage((prevPage) => prevPage + 1); 
  };

  return (
    <Container>
      {loading && <p>Loading...</p>} 
      {articles.length > 0 && (
        <List
          items={articles}
          getRender={(article: IArticle) => (
            <ArticleItem key={article._id} styleItem="standart" item={article} />
          )}
        />
      )}
      {(!loading && hasArticles) && (
        <Button type="button" onClick={handleOnLoadMore}>
          Load more
        </Button>
      )}
    </Container>
  );
}

