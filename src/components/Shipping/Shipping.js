import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import Register from '../Register/Register';

const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div className="text-center">
            <h2 className="my-3">Shipping</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Name" defaultValue={user.displayName} {...Register("name")} />
                <br />
                <input placeholder="Email" defaultValue={user.email} className="m-3" {...register("email", { required: true })} />
                {errors.email && <span className="text-danger">This field is required </span>}
                <br />
                <input placeholder="Address" defaultValue="" {...Register("address")} />
                <br />
                <input placeholder="City" className="m-3" defaultValue="" {...Register("city")} />
                <br />
                <input placeholder="Phone" defaultValue="" {...Register("phone")} />
                <br />
                <input className="btn btn-warning mt-2" type="submit" />
            </form>
        </div>
    );
};

export default Shipping;