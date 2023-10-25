import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  //
  const [user, setuser] = useState(null);
  //
  const login = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setuser(userData);
  };
  //
  return (
    <>
      <AuthContext.Provider value={{ user, login }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export { AuthContext, AuthContextProvider };
