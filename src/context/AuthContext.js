import React, { createContext, useState, useEffect } from "react";

// Create a context named AuthContext
export const AuthContext = createContext();

// AuthContextProvider component, used to provide authentication context to its children

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    // Store user data in local storage as a string
    localStorage.setItem("user", JSON.stringify(userData));
    // Update the user state with the provided userData
    setUser(userData);
  };

  const logout = () => {
    // Remove the user data from local storage
    localStorage.removeItem("user");
    setUser(null); // Set the user state to null
  };

  // useEffect is used to initialize the user state when the component mounts

  useEffect(() => {
    // Retrieve the saved user data from local storage
    const savedUser = JSON.parse(localStorage.getItem("user"));

    // If savedUser exists in local storage, set it as the user state
    if (savedUser) {
      console.log("useEffect of AuthContextProvider");
      setUser(savedUser);
    }
  }, []); // The empty dependency array ensures this effect runs once on component mount

  // Provide the user, login, and logout functions to the components wrapped by this context
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
