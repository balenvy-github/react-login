import React, {
  useEffect, useRef, useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../../api/axios';
import useAuth from '../../../hooks/useAuth';

const LOGIN_URL = '/Auth/login';

// interface LocationState {
//   state: {
//     from: {
//       pathname: string;
//     };
//   }
// }

function Login() {
  const { setAuth } : any = useAuth();

  const navigate = useNavigate();
  // const location = useLocation();
  // const from = location.state?.from?.pathname || '/';
  // const from = '/';
  const userRef = useRef<HTMLInputElement>(null);
  const errRef = useRef<HTMLParagraphElement | null>(null);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // useEffect(() => {
  //   userRef.current.focus();
  // }, []);

  useEffect(() => {
    setErrorMessage('');
  }, [username, password]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // console.log(username, password);

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ username, password, savePassword: false }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        },
      );
      // console.log(response.data);
      const accessToken = response?.data?.accessToken;
      const refreshToken = response?.data?.refreshToken;
      setAuth({ username, accessToken, refreshToken });
      setUsername('');
      setPassword('');
      // navigate(from, { replace: true });
      navigate('/service', { replace: true });
    } catch (error: any) {
      if (!error?.response) {
        setErrorMessage('No Server Response');
      } else if (error.response?.status === 400) {
        setErrorMessage('Username atau Password Salah');
      } else if (error.response?.status === 401) {
        setErrorMessage('Unauthorized');
      } else {
        setErrorMessage('Login Failed');
      }
    }
  };

  return (
    <div>
      <p ref={errRef} aria-live="assertive" className={errorMessage ? 'text-red-600' : 'text-purple-500'}>
        {errorMessage}
      </p>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col w-96 m-10">
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          className="border border-black"
          ref={userRef}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          required
        />

        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          className="border border-black"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />

        <button
          type="submit"
          className="border border-black mt-5"
        >
          Masuk
        </button>
      </form>
    </div>
  );
}

export default Login;
