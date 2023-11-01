import {useContext, useState} from "react";
import {userContext} from "../context/UserProvider";
import {useNavigate} from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("mario@mario.com");
  const [password, setPassword] = useState("123123");

  const {loginUser} = useContext(userContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("procesando form:", email, password);
    try {
      await loginUser(email, password);
      console.log("Usuario logeado");
      navigate("/")
    } catch (error) {
     
      console.log(error.code)
    }
  };

  return (
    <>
      <h1>Login</h1>
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
        <button type="submit">Acceder</button>
      </form>
    </>
  );
};

export default Login;
