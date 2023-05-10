import { useForm } from "react-hook-form"
import './Register.css'
import { API } from "../../services/Api";
import {useNavigate} from "react-router-dom"


const Register = () => {
  const {register, handleSubmit} = useForm();
  const navigate = useNavigate();
  const onSubmit = (formData) => {
    // console.log(formData);
    API.post("users", formData).then ((res)=>{
      console.log(res)
    })
    navigate("/login")
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <label htmlFor="name">Name:</label>
    <br />
    <input type="name" id="name" {...register("name", {required: true})} />
    <br />
    <label htmlFor="email">Email:</label>
    <br />
    <input type="email" id="email" {...register("email", {required: true})} />
    <br />
    <label htmlFor="password">Password:</label>
    <br />
    <input type="password" id="password" {...register("password", {required: true})} />
    <br />
    <label htmlFor="avatar">Avatar</label>
    <br />
    <select name="avatar" id="avatar" {...register("avatar", {required: true})} >
      <option value="😎">😎</option>
      <option value="🤖">🤖"</option>
      <option value="🐯">🐯"</option>
    </select>
    <br />
    <button type="submit">Registrarse</button>
</form>
  )
}

export default Register
