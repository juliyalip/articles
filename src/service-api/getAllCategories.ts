import axios, {AxiosResponse} from 'axios';
import { ICategory } from '../interfaces/articles';

export const BASE_URL = 'https://api-articles-hy8o.onrender.com/api'

export async function getAllCategories (){
try{
    const res =await axios.get(`${BASE_URL}/categories`)
    return res.data

}catch(error){
    console.log(error)
}
}