import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserContext } from '../context/userContext';

interface IProp{
    children: React.ReactNode
}

const PrivatRoute = ({children}:IProp) =>{
    const {isAuthorized} = useUserContext()

return     isAuthorized ? <> {children } </>: <Navigate to="/login" replace/>

}

export default PrivatRoute