import api from './interceptors'
import { IArticle } from '../interfaces/articles'

type CreateArticle = Omit<IArticle, "_id" | "author" | "published">;

export async function getAllArticles(currentPage: number) {
    try {
        const res = await api.get(`/articles?page=${currentPage}&limit=4`);
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export async function createArticles(article: CreateArticle) {
    try {
        const res = await api.post(`/articles`, article);
        return res.data
    } catch (error) {
        console.log(error)
    }
}
