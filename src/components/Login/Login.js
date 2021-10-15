import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(res => {
                history.push(redirect_uri);
            })
    }

    return (
        <div className="text-center" >
            <h2>Login</h2>
            <form className="m-4">
                <input type="email" name="email" placeholder="Your Email" />
                <br />
                <input className="m-3" type="password" name="password" placeholder="Your Password" />
                <br />
                <input className="btn btn-warning" type="submit" value="Submit"></input>
            </form>
            <p>New to ema-john? <Link to="/register">Create Account</Link></p>
            <div>-----Or-----</div>
            <button className="btn btn-warning" onClick={handleGoogleLogin}>Google sign in</button>
        </div>
    );
};

export default Login;