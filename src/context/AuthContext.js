import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  //
  const [user, setUser] = useState(null);
  //
  const login = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };
  //
  useEffect(() => {
    // Retrieve the saved user data from local storage
    const savedUser = JSON.parse(localStorage.getItem("user"));

    // console.log("savedUser : ", savedUser);

    // If savedUser exists in local storage, set it as the user state
    if (savedUser) {
      console.log("useEffect of AuthContextProvider");
      setUser(savedUser);
    }
  }, []);
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
