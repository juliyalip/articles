import axios from 'axios';

const baseUrl: string = 'https://660ae586ccda4cbc75dc055b.mockapi.io';

interface IProps {
  title: string;
  body: string;
 }

export const addArticle = async (data: IProps) => {
  try {
    const response = await axios.post(`${baseUrl}/articles`, data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
