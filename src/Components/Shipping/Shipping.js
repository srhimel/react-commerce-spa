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
                <p>Shipping Information</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue={user.displayName} {...register("name")} />
                    <br />
                    <input defaultValue={user.email} {...register("email", { required: true })} />
                    {/* errors will return when field validation fails  */}
                    {errors.email && <span>This field is required</span>}
                    <br />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Shipping;