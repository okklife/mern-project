import {  createContext, useContext, useState } from "react";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {

  const [token,setToken] =useState(localStorage.getItem("token"))
  const validtoken = token
 
 const isloggedin = !!token;

  const deletetoken = ()=>{
    return localStorage.removeItem("token"),
    setToken(null)
 

  }
  const storeToken = (token) => {
    localStorage.setItem("token", token);
    setToken(token) 
   
  };
  return (
    <AuthContext.Provider value={{ storeToken ,deletetoken,isloggedin,token,validtoken}}>
        {children}
        </AuthContext.Provider>
  );
};     

export const useAuth =()=>{
    return useContext(AuthContext)
}