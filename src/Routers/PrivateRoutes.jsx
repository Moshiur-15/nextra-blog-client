import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/Hook';
import Loading from '../Components/Loading';
export default function PrivateRoutes({children}) {
  const {user, loading} = useAuth();
  const location = useLocation();
  if (loading) {
    return <Loading/>
  }
  if(user){
    return children;
  }
  return <Navigate state={location?.pathname} to="/login"></Navigate>;
}
