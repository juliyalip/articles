import { createContext, ReactNode, useState, useEffect, useContext } from 'react'
import api from '../service-api/interceptors'
import userServiceApi from '../service-api/userServiceApi'
import { User } from '../interfaces/user'
import axios from 'axios'

export const BASE_URL = 'https://api-articles-hy8o.onrender.com/api'

interface IProp {
    children: ReactNode
}

interface UserContex {
    user: User | null,
    isAuthorized: boolean,
    token: string | null,
    loading: boolean,
    onLogin: (email: string, password: string) => void
    onLogout: () => void,
}

const defaultContext: UserContex = {
    user: null,
    loading: false,
    isAuthorized: false,
    token: null,
    onLogin: () => { },
    onLogout: () =>{}
}

export const UserContext = createContext<UserContex>(defaultContext);

export const UserProvider = ({ children }: IProp) => {

    const [user, setUser] = useState(null);
    const [token, setToken] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)
    const [isAuthorized, setIsAuthorized]=useState(false)

    useEffect(() => {
        const initionAuth = async () => {
            const accessToken = window.localStorage.getItem('accessToken');
            if (accessToken) {
                setToken(accessToken);
        
                await fetchCurrentUser()
            } 
        };

        initionAuth();
    }, [token]);

    const fetchCurrentUser = async () => {
        setLoading(true);
        try {
            const response = await userServiceApi.fetchCurrentUser();
            setUser(response.user);
            setIsAuthorized(true)
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };
   
    const onLogin = async (email: string, password: string) => {
        try {
            const accessToken = await userServiceApi.onLogin(email, password);
            window.localStorage.setItem('accessToken', accessToken);
            setToken(accessToken);
       
             setIsAuthorized(true)
        } catch (error) {
            console.log(error);
        }
    }

    console.log('user', user)
    const onLogout = async () => {
      
        try {
         
          const result =  await userServiceApi.onLogoutUser();
           console.log(result)
            window.localStorage.clear();

            setToken('')
            setUser(null)
            setIsAuthorized(false)
            axios.defaults.headers.common.Authorization = ""

        } catch (error) {
            console.log(error)
        }
    }

    return (<UserContext.Provider value={{ user, loading, token, onLogin, onLogout , isAuthorized}}>
        {children}
    </UserContext.Provider>

    )
}

export const useUserContext = () => useContext(UserContext)


//   const onLogin = async (email: string, password: string) => {
//       try {
//           const accessToken = await userServiceApi.onLogin(email, password);
//           window.localStorage.setItem('accessToken', accessToken);
//           setToken(accessToken);
//           api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
//            setIsAuthorized(true)
//       } catch (error) {
//           console.log(error);
//       }
//   }