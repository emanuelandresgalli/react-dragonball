import { useContext } from "react";
import { JwtContext } from "../context/jwtContext";
import { useNavigate } from "react-router-dom";
import './ButtonLogout.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)



export const ButtonLogout = () => {

  const { setJwt } = useContext(JwtContext);
  const navigate = useNavigate();
  


  const logout = () => {
    MySwal.fire({
      title: '¿Estás seguro?',
      text: '¿Estás seguro de que quieres cerrar tu sesión?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setJwt(null);
        navigate("/");
      }
    });
  };

return <button className="button_nav" onClick={logout}>LogOut</button>;
  };

  
// };