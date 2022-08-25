import { createContext, useMemo, useState } from 'react';

const AuthContext = createContext({});

export function AuthProvider({ children } : any) {
  const [auth, setAuth] = useState({});

  const authValue = useMemo(() => ({
    auth, setAuth,
  }), [auth]);

  return (
    <AuthContext.Provider value={authValue}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
