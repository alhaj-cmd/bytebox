import React from 'react';

const Register = () => {

    const handleRegister = (e) =>{
        e.preventDefault()
        const name = e.target.name.value;

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