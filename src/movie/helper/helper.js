
import jwt from 'jsonwebtoken';

const keyToken = 'RJ2011B';
const saveTokens = (token) =>
{
   if (token !== null && token !== '')
   {
       localStorage.setItem('token_login',token)
   } 
}

const removeTokens = () =>
{
    localStorage.removeItem('token_login')
}
const getTokensFromLocalStorage = () =>{
    const token = localStorage.getItem('token_login')
    return token;
}

const decodeTokenLocalStorage = () =>{
    let token= getTokensFromLocalStorage();
    let decodeToken = null;
    if (token !== null && token !== '')
    {
        decodeToken = jwt.verify(token,keyToken)
    };
    return decodeToken;
}
const IsEmptyObject = (obj) => {
    for(let prop in obj) {
      if(obj.hasOwnProperty(prop)) {
        return false;
      }
    }
  
    return JSON.stringify(obj) === JSON.stringify({});
  }

  const isAuthenticated = () => {
      let token = decodeTokenLocalStorage();
      if(token !== null && token !== '' ){
          return true;
      }
      return false;
  }
export const helpers ={
    saveTokens,
    removeTokens,
    getTokensFromLocalStorage,
    decodeTokenLocalStorage,
    IsEmptyObject,
    isAuthenticated
}