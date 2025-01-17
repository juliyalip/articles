export type ObjectId = string & { readonly __brand: unique symbol };

  
  export interface IArticle{
   _id: ObjectId,
   country: string,
   description: string,
   title: string,
   coverImg?: string,
   city: string,
   spoiler: string,
   published: boolean,
   category: ObjectId,
   author: ObjectId
  }

  export interface ICategory{
    _id: ObjectId,
    title: string,
    url: string
  }