import React, { useEffect, useState } from 'react';
import TopArticlesList from '../../components/TopArticlesList/TopArticlesList';
import imgSl1 from '../../images/slovenia/imgSl1.jpg';
import { IArticle } from '../../interfaces/articles';

export default function Home() {
  const [articles, setArticlesTop] = useState<IArticle[]>([]);
  const [loader, setLoader] = useState<boolean>(false);
  useEffect(() => {
    setLoader(true);
    //  @ts-ignore
    const getData = async () => {
      const res = await fetch(
        `https://hn.algolia.com/api/v1/search?query=story&page=1`,
      );
      const { hits } = await res.json();

      const allData: IArticle[] = hits.map(({ title, story_id }: IArticle) => {
        return {
          title,
          story_id,
          url: imgSl1,
        };
      });
      setArticlesTop(allData);
    };
    getData();
  }, []);

  const topArticles = articles.slice(0, 4);
  const allArticlesList = articles.slice(4, 9);

  return (
    <div>{articles.length > 0 && <TopArticlesList items={topArticles} />}</div>
  );
}
