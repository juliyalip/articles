import React , {useEffect, useState }from 'react';
import List from '../List/List';
import ArticleItem from '../ArticleItem/ArticleItem';
import { IArticle } from '../../interfaces/articles';


interface IProp {
  items: IArticle[];
}

export default function TopArticlesList({ items }: IProp) {
  const [articles, setArticles] = useState([])
  
  return (
    <List display="flex"
      items={items}
      getRender={(item: IArticle) => (
        <ArticleItem item={item} key={item._id} styleItem='top'/>
      )}
    />
  );
}
