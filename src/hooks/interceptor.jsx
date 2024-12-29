import axios from "axios";
import { useEffect } from "react";
import useAuth from "./Hook";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_LOCALHOST}`,
  withCredentials: true,
});

const useAxios = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    const interceptor = axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        if (error.response?.status === 401 || error.response?.status === 403) {
          console.log("need to logout the user");
          try {
            await logOut().then(() => {
              console.log("logout user");
              navigate("/login");
            });
          } catch (err) {
            console.log(err);
          }
        }
        return Promise.reject(error);
      }
    );
    return () => {
      axiosInstance.interceptors.response.eject(interceptor);
    };
  }, [logOut, navigate]);
  return axiosInstance;
};
export default useAxios;
