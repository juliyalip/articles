import axios from 'axios';
import api from './interceptors';


const onLogin = async (email: string, password: string) =>{
    try{
        const response = await api.post("/login", {email, password})
         return response.data.accessToken
    }catch (error){
        console.log(error)
    }
}

const fetchCurrentUser = async()=>{
          try{  
         const response = await api.get("/current");
         return response.data    

        }catch(error){
            console.log(error)
        }
    
}

const onLogoutUser = async ()=>{
    try{
     const response = await axios.post('/logout')
        return response
    }catch(error){
        console.log(error)
    }
   
}

export default{onLogin, fetchCurrentUser, onLogoutUser}
