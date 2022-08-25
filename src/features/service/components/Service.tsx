import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
// import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
// import InsertService, { GetService } from '../services/ServiceServices';
import { GetService, useCheckAuth } from '../services/ServiceServices';

 interface ServiceInterface {
    gameId: string;
    unitId: string;
    price: number;
    description: string;
  }

function Service() {
  const [button, setButton] = useState(false);
  //   const [services, setServices] = useState([]);

  // const axiosPrivate = useAxiosPrivate();

  // useEffect(() => {
  //   let isMounted = true;
  //   const controller = new AbortController();

  //   const getServices = async () => {
  //     try {
  //       const response = await axiosPrivate.get('/Auth/check', {
  //         signal: controller.signal,
  //       });
  //         // console.log(response.data.data);
  //       if (isMounted) {
  //         console.log(`authcheck: ${response.data}`);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   getServices();

  //   return () => {
  //     isMounted = false;
  //     controller.abort();
  //   };
  // }, []);

  //  input
  //   react hook form
  const {
    register,
    // handleSubmit,
    formState: { errors },
  } = useForm<ServiceInterface>();

  // react query
  const {
    data: dataService, isLoading, isError, error,
  } = useQuery(['servicedata'], GetService);

  if (isLoading) {
    return <p>loading ...</p>;
  }
  if (isError) {
    return <p>{`error : ${error}`}</p>;
  }

  // const { data: dataAuth } = useQuery(['authdata'], CheckAuth);
  // console.log('retrieve auth : ', dataAuth);
  const { data: dataAuth } = useCheckAuth();
  console.log('auth : ', dataAuth);

  //   const queryClient = useQueryClient();
  //   const { mutateAsync } = useMutation(InsertService, {
  //     onSettled: async (data, err : any) => {
  //       if (data) {
  //         queryClient.invalidateQueries(['servicedata']);
  //       }
  //       if (err) {
  //         console.log('onsettled err : ', err);
  //       }
  //     },
  //   });

  //   const onFormSubmit = async (data : any) => {
  //     await mutateAsync([data]);
  //   };

  //   const onSubmit = handleSubmit(async (data) => {
  //     onFormSubmit(data);
  //   });

  // close input
  return (
    <>
      <div className="switch-form m-10">
        <button
          className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={() => setButton(!button)}
        >
          {button ? 'form' : 'table'}
        </button>
      </div>
      {button ? (
        <div className="table m-10">
          <table className="table border border-black">
            <thead>
              <tr>
                <th>No</th>
                <th>Player</th>
                <th>Game</th>
                <th>Price</th>
                <th>Unit</th>
              </tr>
            </thead>
            <tbody>
              {dataService?.data?.map((item : any, i: number) => (
                <tr key={item.id}>
                  <td>{i + 1}</td>
                  <td>{item.user.name}</td>
                  <td>{item.game.name}</td>
                  <td>{item.price}</td>
                  <td>
                    /
                    {' '}
                    {item.unit}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="w-96 m-10">
          <h1 className="text-center text-xl uppercase">nyoba input service</h1>
          {/* <form onSubmit={onSubmit}> */}
          <form>
            <div className="mb-4">
              <label>game id</label>
              <input
                type="text"
                className="border border-blue-700 rounded w-full py-2 px-3 text-gray-700"
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...register('gameId', { required: 'Game ID is Required' })}
              />
              {errors.gameId && <small className="text-danger">{errors.gameId.message}</small> }
            </div>
            <div className="mb-4">
              <label>unit id</label>
              <input
                type="text"
                className="border border-blue-700 rounded w-full py-2 px-3 text-gray-700"
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...register('unitId', { required: 'Unit ID is Required' })}
              />
              {errors.unitId && <small className="text-danger">{errors.unitId.message}</small> }
            </div>
            <div className="mb-4">
              <label>price</label>
              <input
                type="text"
                className="border border-blue-700 rounded w-full py-2 px-3 text-gray-700"
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...register('price', { required: 'Unit ID is Required' })}
              />
              {errors.price && <small className="text-danger">{errors.price.message}</small> }
            </div>
            <div className="mb-4">
              <label>description</label>
              <input
                type="text"
                className="border border-blue-700 rounded w-full py-2 px-3 text-gray-700"
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...register('description', { required: 'Unit ID is Required' })}
              />
              {errors.description && <small className="text-danger">{errors.description.message}</small> }
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default Service;
