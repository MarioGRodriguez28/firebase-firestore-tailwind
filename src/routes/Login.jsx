import {useContext} from "react";
import {userContext} from "../context/UserProvider";

const Login = () => {
  const {user, setUser} = useContext(userContext);

  return (
    <>
      <h1>Login</h1>
      <h2>{user ? "En linea" : "Fuera de Linea"}</h2>
      <button onClick={()=> setUser(true)}>Acceder</button>
    </>
  );
};
export default Login;
