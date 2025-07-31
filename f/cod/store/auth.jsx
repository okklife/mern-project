import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setuser] = useState();
  const validtoken = token;
  const validuser = user;

  const isloggedin = !!token;
  const deletetoken = () => {
    return localStorage.removeItem("token"), setToken(null);
  };
  const storeToken = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  };
  const storeUser = (user) => {
    setuser(user)
  };
  const deleteuser =()=>{
    setuser("")
  }
  return (
    <AuthContext.Provider
      value={{ storeToken, deletetoken, isloggedin, token, validtoken,storeUser,validuser ,deleteuser}}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
