import {UserContext} from "./context/UserProvider";
import {Routes, Route} from "react-router-dom";
import {useContext} from "react";

import Register from "./routes/Register";
import NotFound from "./routes/NotFound";
import Perfil from "./routes/Perfil";
import Login from "./routes/Login";
import Home from "./routes/Home";

import LayoutContainerForm from "./components/layout/LayoutContainerForm";
import LayoutRequireAuth from "./components/layout/LayoutRequireAuth";
import LayoutRedirect from "./components/layout/LayoutRedirect";
import Navbar from "./components/Navbar";

Routes;
const App = () => {
  const {user} = useContext(UserContext);
  if (user === false) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LayoutRequireAuth />}>
          <Route index element={<Home />} />
          <Route path="perfil" element={<Perfil />} />
        </Route>

        <Route path="/" element={<LayoutContainerForm />}>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Route>

        <Route path="/:nanoid" element={<LayoutRedirect />}>
          <Route index element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
