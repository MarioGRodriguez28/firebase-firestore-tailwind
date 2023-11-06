import {createContext, useEffect, useState} from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {auth} from "../firebase";

export const UserContext = createContext();

const UserProvider = ({children}) => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        const {email, photoURL, displayName, uid} = user;
        setUser({email, photoURL, displayName, uid});
      } else {
        setUser(null);
      }
    });
    return () => unsuscribe();
  }, []);

  const registerUser = (email, paswword) =>
    createUserWithEmailAndPassword(auth, email, paswword);

  const loginUser = (email, paswword) =>
    signInWithEmailAndPassword(auth, email, paswword);

  const signOutUser = () => signOut(auth);

  return (
    <UserContext.Provider
      value={{user, setUser, registerUser, loginUser, signOutUser}}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
