import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
// import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {
    const {logInUser} = useContext(AuthContext)
    console.log(logInUser);
    // this can be protected


    const handleLogin = (e) =>{  
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);
        logInUser(name, email, password);
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
                    <input name='password' type="text" className='input input-bordered w-full max-w-xs' />
                </div>
                <button type='submit' className='btn btn-primary'>Button</button>
            </form>
        </div>
        </div>
    );
};

export default Login;