import { useContext } from "react";
import { JwtContext } from "../context/jwtContext";
import { useNavigate } from "react-router-dom";
import './ButtonLogout.css'

export const ButtonLogout = () => {
  
  const { setJwt } = useContext(JwtContext);
  const navigate = useNavigate();
  const logout = () => {
  

    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setJwt(null);
    navigate("/login");
  };

  return <button className="button_nav" onClick={logout}>LogOut</button>;
};