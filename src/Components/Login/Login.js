import React from 'react';
import { useLocation, useHistory, } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { googleSignIn, setError } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirectUrl = location.state?.from || "/shop";


    const handleLogin = () => {
        googleSignIn()
            .then(result => {
                history.push(redirectUrl)
            })
            .catch(error => {
                setError(error.message.slice(8));
            });
    }


    return (
        <div className="text-center">
            <h2>Login</h2>
            <button onClick={handleLogin}>Login With Google</button>
        </div>
    );
};

export default Login;