import api from './interceptors'

export async function getAllArticles(currentPage: number) {
    try {
        const res = await api.get(`/articles?page=${currentPage}&limit=4`);
        return res.data
    } catch (error) {
        console.log(error)
    }
}


