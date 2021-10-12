import firebaseInit from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
firebaseInit();

const useFirebase = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState({});
    const [error, setError] = useState('');


    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);

    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
        })
    }, [auth])

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser(null);
            })
    }


    return {
        user,
        error,
        setUser,
        setError,
        googleSignIn,
        logOut
    };
};

export default useFirebase;