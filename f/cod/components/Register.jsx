import { NavLink, useNavigate } from "react-router-dom";
import "../Style/Register.css";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PasswordChecklist from "react-password-checklist";

const Register = () => {
  const navigate = useNavigate(); // for redirecting after success

  const [user, setuser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleinput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setuser({
      ...user,
      [name]: value,
    });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    if (!isValid) {
      toast.error("Please meet all password requirements!", {
        toastId: "password-validation",
      });
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/user/signup", {
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

      toast.success("Signup successful!", {
        toastId: "signup-success",
      });

      setTimeout(() => navigate("/login"), 1000); // Navigate to login after success
    } catch (error) {
      toast.error("Network error. Please try again.", {
        toastId: "network-error",
      });
    }
  };

  return (
    <>
      <div className="typetext">
        <h2 className="typewriter">Register Yourself</h2>
      </div>

      <div className="register">
        <div className="registerimg">
          <img src="../src/assets/wallpaperflare.com_wallpaper.jpg" />
        </div>
        <div className="registerform">
          <form onSubmit={handlesubmit}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              value={user.username}  
              onChange={handleinput}
              id="username"
              placeholder="Enter username"
            />

            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter email"
              value={user.email}
              onChange={handleinput}
            />

            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              name="phone"
              value={user.phone}
              onChange={handleinput}
              id="phone"
              placeholder="Enter phone"
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleinput}
              id="password"
              placeholder="Enter password"
            />

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              id="confirmPassword"
              placeholder="Confirm password"
            />

            {/* Password Checklist */}
            <PasswordChecklist
              rules={["minLength", "specialChar", "number", "capital", "match"]}
              minLength={7}
              value={user.password}
              valueAgain={confirmPassword}
              onChange={(isValid) => setIsValid(isValid)}
              messages={{
                minLength: "At least 7 characters",
                specialChar: "At least 1 special character",
                number: "At least 1 number",
                capital: "At least 1 capital letter",
                match: "Passwords match",
              }}
            />

            <button type="submit" className="submitbutton">
              Submit
            </button>
            <button className="submitbutton submitbutton2">
              <NavLink to="/login">Login</NavLink>
            </button>
          </form>
        </div>
      </div>

      <ToastContainer position="top-right" theme="dark" autoClose={1000} />
    </>
  );
};

export default Register;
