import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="text-center">
            <h2>Register: Create Account</h2>
            <form className="m-4" onSubmit="">
                <input type="email" name="email" placeholder="Your Email"></input>
                <br />
                <input className="m-3" type="password" name="Password" placeholder="Your Password"></input>
                <br />
                <input className="mb-4" type="password" name="Password" placeholder="Re-enter Password"></input>
                <br />
                <input className="btn btn-warning" type="submit" value="Submit" />
                <br />
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p>
            <div>-----Or-----</div>
            <button className="btn btn-warning">Google Sign up</button>
        </div>
    );
};

export default Register;