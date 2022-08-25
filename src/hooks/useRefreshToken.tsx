import axios from '../api/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
  const { auth, setAuth } : any = useAuth();

  const refresh = async () => {
    const response = await axios.post('/Auth/refreshToken', {
      refreshToken: auth.refreshToken,
    }, {
      withCredentials: true,
    });
    setAuth((prev : any) => {
      console.log(JSON.stringify(prev));
      console.log(response.data.accessToken);
      return { ...prev, accessToken: response.data.accessToken };
    });
    return response.data.accessToken;
  };

  return refresh;
};

export default useRefreshToken;
