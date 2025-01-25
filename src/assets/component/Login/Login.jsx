import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {
    const {logInUser} = useContext(AuthContext)

    const handleLogin = (e) =>{
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const confirmpassword = e.target.confirmpassword.value;
        console.log(name, email, confirmpassword);
        logInUser(name, email, confirmpassword);
    }

    return (
        <div>
             <div className='text-center'>
            <h2>I'm a LogIN section</h2>
            <form onSubmit={handleLogin} action="">
                <div>
                    <p>Nama</p>
                    <input name='name' type="text" className='input input-bordered w-full max-w-xs' />
                </div>
                <div>
                    <p>Email</p>
                    <input name='email' type="text" className='input input-bordered w-full max-w-xs' />
                </div>
                <div>
                    <p>Confirm Password</p>
                    <input name='confirmpassword' type="text" className='input input-bordered w-full max-w-xs' />
                </div>
                <button type='submit' className='btn btn-primary'>Button</button>
            </form>
        </div>
        </div>
    );
};

export default Login;