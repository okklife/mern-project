import { useState } from "react";
import "../Style/Login.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { storeToken,storeUser } = useAuth();
  const handleinput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handlesubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await fetch("http://localhost:3000/api/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      if (!response.ok) {
        toast.error(data.error || "Something went wrong!", {
          toastId: "signup-error",
        });
        return;
      }
      
      storeToken(data.token);
      storeUser(data.user)
      toast.success("Loign Sucessfull", {
        toastId: "login-success",
      });
      setTimeout(() => navigate("/"), 1500);
    } catch (error) {
      toast.error("Network error. Please try again.", {
        toastId: "network-error",
      });
    }
  };

  return (
    <>
      <div className="mainlogin">
        <div className="loginimage">
          <img src="../src/assets/ai-generated-8775235.png" alt="" />
        </div>
        <form onSubmit={handlesubmit}>
          <div className="loginform">
            <label htmlFor="email">Enter Email</label>
            <input
              type="email"
              name="email"
              placeholder="enter email"
              onChange={handleinput}
            />
            <label htmlFor="password">Enter Password</label>
            <input
              type="password"
              name="password"
              placeholder="enter password"
              onChange={handleinput}
            />
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
      <ToastContainer position="top-right" theme="dark" autoClose={1000} />
    </>
  );
};
export default Login;
