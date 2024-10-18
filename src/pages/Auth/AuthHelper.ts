
import axios from "axios";

const logIn = async (username: string, password: string) => {
    try {
      const axiosData = await axios.post("http://localhost:3000/login", {
        username: username,
        password: password,
      });
      const response = axiosData.data;
      if (response.auth) {
        console.log("User is authenticated");
        localStorage.setItem("token", response.token);
        localStorage.setItem("user", response.user);
      } else {
        console.log("User is not authenticated");
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };
  
  export { logIn, logOut };
  