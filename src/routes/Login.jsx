import {useContext} from "react";
import {userContext} from "../context/UserProvider";
import {useNavigate} from "react-router-dom";

const Login = () => {
  const {user, setUser} = useContext(userContext);
  const navigate = useNavigate();
  const handleClickLogin = () => {
    setUser(true);
    navigate("/");
  };

  return (
    <>
      <h1>Login</h1>
      <h2>{user ? "En linea" : "Fuera de Linea"}</h2>
      <button onClick={handleClickLogin}>Acceder</button>
    </>
  );
};

export default Login;
