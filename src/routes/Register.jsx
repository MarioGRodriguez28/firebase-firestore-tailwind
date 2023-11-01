import {useContext, useState} from "react";
import { userContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("mario@mario.com");
  const [password, setPassword] = useState("123123");

  const navigate = useNavigate()

  const {registerUser} = useContext(userContext)
   
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("procesando form", email, password);
    try {
        await registerUser(email, password)
        console.log("Usuario creado")
        navigate("/")
    } catch (error) {
     
        console.log(error.code)
    }
  };
  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="ingrese email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="ingrese password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Registro</button>
      </form>
    </>
  );
};
export default Register;
