import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import AuthContext from "../context/AuthContext";
const Service = () => {
  const theme = useContext(ThemeContext);
  const user=useContext(AuthContext);

  return(
  <div>
    <h1>{theme}</h1>
    <p>Id:{user.Id}</p>
    <p>Name:{user.Name}</p>
    <p>Email:{user.Email}</p>
  </div>
  )
};

export default Service;