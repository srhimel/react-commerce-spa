import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const { user } = useAuth();
    return (
        <div className="container">
            <div className="shipping">
                <h2 className="text-center">Shipping Information</h2>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <label htmlFor="">Full Name</label>
                    <input defaultValue={user.displayName} {...register("name")} />
                    <label htmlFor="">Email Address</label>
                    <input defaultValue={user.email} {...register("email", { required: true })} />
                    {/* errors will return when field validation fails  */}
                    {errors.email && <span>This field is required</span>}

                    <input type="submit" className="addToCart" />
                </form>
            </div>
        </div>
    );
};

export default Shipping;