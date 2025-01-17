import React from 'react'
import { useArticlesContext } from '../../context/articlesContext'
import Container from '../../components/Container/Container'
import CreateFormArticle from '../../components/CreateFormArticle/CreateFormArticle'



export default function CreateArticle (){
    const {categories} = useArticlesContext()
    
    console.log(categories)
    return(
        <Container >
            <CreateFormArticle />
          

        </Container>

    )
}