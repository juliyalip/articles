import React from 'react'
import{Navigate} from 'react-router-dom'
import { useUserContext } from '../context/userContext'


interface IProp{
    children: React.ReactNode,
    restricted?: boolean,
    path?: string
}

const PublicRouter = ({children, restricted = false, path = "/create-article"}: IProp) =>{
    const {isAuthorized} = useUserContext()
    const shouldRedirect = isAuthorized && restricted;

    return shouldRedirect ? <Navigate to={path} /> : <>{children}</>
}

export default PublicRouter