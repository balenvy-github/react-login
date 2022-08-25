import { useQuery } from '@tanstack/react-query';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import axios from '../../../api/axios';

export default async function InsertService(data : any) {
  const response = await axios.post('/Service', data);
  //   console.log('axios resp : ', response);
  return response.data;
}

export async function GetService() {
  const response = await axios.get('/Service');
  //   console.log('get axios resp : ', response);
  return response.data;
}

// const axiosPrivate = useAxiosPrivate();
// export async function CheckAuth() {
//   const response = await axiosPrivate.get('/Auth/check');
//   console.log('axios auth : ', response);

//   return response.data;
// }

export function useCheckAuth() {
  const axiosPrivate = useAxiosPrivate();
  return useQuery(['authData'], async () => {
    const { data } = await axiosPrivate.get(
      '/Auth/check',
    );
    return data;
  });
}
