import React from 'react';
import List from '../List/List';
import ArticleItem from '../ArticleItem/ArticleItem';
import { IArticle } from '../../interfaces/articles';

interface IProp {
  items: IArticle[];
}

export default function TopArticlesList({ items }: IProp) {
  return (
    <List disp="flex"
      items={items}
      getRender={(item: IArticle) => (
        <ArticleItem item={item} key={item.story_id} styleTop='top'/>
      )}
    />
  );
}
