import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, updateProfile} from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialization from "../../../../Firebase/firebase.init";


firebaseInitialization();
const auth = getAuth();

const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true)
    const [admin, setAdmin] = useState(false);

    console.log(admin);



    const registerUser = (email, password, name, location, navigate) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                navigate(destination);
                const newUser = { email, displayName: name }
                setUser(newUser)
                saveUser(email, name);
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });
                setError('');
                // history.replace('/')

            })
            .catch((error) => {

                const errorMessage = error.message;
                setError(errorMessage);

            })
            .finally(() => setIsLoading(false));

    }

    const loginUser = (email, password, location, navigate) => {
        setIsLoading(true);
        fetch(`http://localhost:5000/userCheck?email=${email}`)
        .then(res => res.json())
        .then(data => {
            if(data.role === 'bookmaker')
            {
                signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    navigate('/BookMakerDashboard');
                    // Signed in 
                    setError('');
        
                })
                .catch((error) => {
        
                    const errorMessage = error.message;
                    setError(errorMessage);
                })
                .finally(() => setIsLoading(false));
            }
            else{
                signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const destination = location?.state?.from || '/';
                    navigate(destination);
                    // Signed in 
                    setError('');
        
                })
                .catch((error) => {
        
                    const errorMessage = error.message;
                    setError(errorMessage);
                })
                .finally(() => setIsLoading(false));
            }
        })
    
    }

    //google signIn
    const signInWithGoogle = (location, navigate) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log('google sign in is clicked');
                const destination = location?.state?.from || '/';
                navigate(destination);
                // const user = result.user;
                // saveUser(user.email, user.displayName, 'PUT')
                setError('');

            }).catch((error) => {

                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {

            if (user) {
                console.log(user);
                setUser(user)

            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [])

    const logout = (navigate) => {
        setIsLoading(true)
        signOut(auth).then(() => {
            navigate('/')
        }).catch((error) => {
            setError(error.message)
        })
            .finally(() => setIsLoading(false));
    }

    const saveUser = (email, name) => {

        const user = { email, name }

        fetch('http://localhost:5000/userPost', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {

            })
    }
    return {
        user,
        admin,
        registerUser,
        loginUser,
        signInWithGoogle,
        error,
        logout,
        isLoading,

    };

};

export default useFirebase;