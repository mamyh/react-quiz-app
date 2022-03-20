import { createContext } from "react";
import useFirebase from "../hooks/useFirebase";

export const authContext = createContext();

export const AuthContext = ({ children }) => {
  const userObject = useFirebase();
  return (
    <authContext.Provider value={userObject}>
      {!userObject.loading && children}
    </authContext.Provider>
  );
};
