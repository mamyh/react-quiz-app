import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseApp from "../firebase/initialize";

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const auth = getAuth(firebaseApp);
  async function signup(email, password, userName) {
    //create user with email and password
    await createUserWithEmailAndPassword(auth, email, password);

    // update user (user name and photo url)
    await updateProfile(auth.currentUser, { displayName: userName });

    setUser({ ...user, user: auth.currentUser });
    setLoading(false);
  }
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }
  useEffect(() => {
    const unscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return unscribe;
  }, [auth]);

  return { user, signup, login, logout, loading };
};

export default useFirebase;
