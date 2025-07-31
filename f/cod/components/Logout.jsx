import { useEffect } from "react"
import { useAuth } from "../store/auth"
import { useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Home";


const Logout= ()=>{
    const {deletetoken,deleteuser} = useAuth()
    const navigate = useNavigate()
    useEffect(()=>{
     deletetoken()
     deleteuser()
    
     toast.success("Logout Success", {
       toastId: "logout-success",
     });
     setTimeout(() => {
         navigate("/");
     }, 1500);
    },[])
    return (
      <>
      <Home/>
        <ToastContainer position="top-right" theme="dark" autoClose={1000} />
      </>
    );
}

export default Logout