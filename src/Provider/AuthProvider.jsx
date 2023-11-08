import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const authContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    //user create korar somsoy loading hobe
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("current user", currentUser);

      //user create hoy gele
      setLoading(false);
    });

    //user ber hoye gele seta return kore dibe and memory dhore rakhbe na
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
  };

  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
