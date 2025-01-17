import { createContext, ReactNode, useState, useEffect, useContext } from "react";
import { ICategory , IArticle} from "../interfaces/articles";
import { getAllCategories } from "../service-api/categories-api";

interface IProp{
    children: ReactNode
}

interface ArticleContext{
    categories: ICategory[]
    articles: IArticle[]
}

const defaultContext: ArticleContext ={
    categories: [],
    articles: []
}

export const ArticleContext = createContext<ArticleContext>(defaultContext)

export const ArticleProvider = ({children}: IProp) =>{
    const [categories, setCategories] = useState([])
    const [articles, setArticles] = useState([])

    useEffect(()=>{
const getCategories = async() =>{
    const categories = await getAllCategories();
    setCategories(categories)
}; getCategories()
    }, [])

return(
    < ArticleContext.Provider value={{categories, articles}}>
    {children}
    </ArticleContext.Provider>
)
};

export const useArticlesContext = () => useContext(ArticleContext)
