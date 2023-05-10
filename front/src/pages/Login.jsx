import { useContext } from "react"
import { JwtContext } from "../context/jwtContext"
import {useForm} from "react-hook-form"
import './Login.css'
import { API } from "../../services/Api"
// import jwt from 'jsonwebtoken';


const Login = () => {
     const {setJwt} = useContext(JwtContext)

    const {register, handleSubmit} = useForm();
    const onSubmit = (formData) => {
        // console.log(formData);
        API.post("login",formData).then((res)=>{
            console.log(res.data.accessToken);
              localStorage.setItem("token", res.data.accessToken)
          localStorage.setItem("token", res.data.user.name)
              setJwt(localStorage.getItem("token"))
        })
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>

        <label htmlFor="email">Email:</label>
        <br />
        <input type="email" id="email" {...register("email", {required: true})} />
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input type="password" id="password" {...register("password", {required: true})} />
        <br />
        <button type="submit">Logearse</button>
    </form>
  )
}

export default Login
