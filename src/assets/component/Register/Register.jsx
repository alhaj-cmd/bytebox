import React,{useContext} from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
// import {AuthContext} from '../AuthProvider/AuthProvider'
const Register = () => {
   const {registerUser} = useContext(AuthContext);
   console.log(registerUser, 'tumi nai')

    const handleRegister = (e) =>{
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmpassword = e.target.confirmpassword.value;
        console.log(name, photo, email, password, confirmpassword);
        registerUser(email, password);

    } 

    return (
        <div className='text-center'>
            <h2>I'm a Register section</h2>
            <form onSubmit={handleRegister} action="">
                <div>
                    <p>Nama</p>
                    <input name='name' type="text" className='input input-bordered w-full max-w-xs' />
                </div>
                <div>
                    <p>Photo</p>
                    <input name='photo' type="text" className='input input-bordered w-full max-w-xs' />
                </div>
                <div>
                    <p>Email</p>
                    <input name='email' type="text" className='input input-bordered w-full max-w-xs' />
                </div>
                <div>
                    <p>Password</p>
                    <input name='password' type="text" className='input input-bordered w-full max-w-xs' />
                </div> 
                <div>
                    <p>Confirm Password</p>
                    <input name='confirmpassword' type="text" className='input input-bordered w-full max-w-xs' />
                </div>
                <button type='submit' className='btn btn-primary'>Button</button>
            </form>
        </div>
    );
};

export default Register;