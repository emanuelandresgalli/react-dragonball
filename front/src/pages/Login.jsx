import { useContext } from "react"
import { JwtContext } from "../context/jwtContext"
import {useForm} from "react-hook-form"
import './Login.css'
import { API } from "../../services/Api"
import { useNavigate } from "react-router-dom"
// import {video} from "../assets/abstract-son-goku-super-saiyan-blue-dragon-ball-super-moewalls.com.mp4"
  // import jwt from 'jsonwebtoken';


const Login = () => {
     const {setJwt} = useContext(JwtContext)
     const navigate = useNavigate();
    const {register, handleSubmit} = useForm();
    const onSubmit = (formData) => {
        // console.log(formData);
        API.post("login",formData).then((res)=>{
            console.log(res.data.accessToken);
              localStorage.setItem("token", res.data.accessToken)
          localStorage.setItem("token", res.data.user.name)
              setJwt(localStorage.getItem("token"))
              navigate('/gallery');
        })
    }
  return (

 
    <form className="form_login" onSubmit={handleSubmit(onSubmit)}>

        <label htmlFor="email">Email:</label>
        <br />
        <input type="email" id="email" {...register("email", {required: true})} />
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input type="password" id="password" {...register("password", {required: true})} />
        <br />
        <button className="button_logearse" type="submit">Logearse</button>
        
    </form>
  
  )
}

export default Login
