import React from 'react';

const Register = () => {
    return (
        <div className='text-center'>
            <h2>I'm a Register section</h2>
            <form action="">
                <div>
                    <p>Nama</p>
                    <input type="text" className='input input-bordered w-full max-w-xs' />
                </div>
                <div>
                    <p>Nama</p>
                    <input type="text" className='input input-bordered w-full max-w-xs' />
                </div>
                <div>
                    <p>Nama</p>
                    <input type="text" className='input input-bordered w-full max-w-xs' />
                </div>
                <div>
                    <p>Nama</p>
                    <input type="text" className='input input-bordered w-full max-w-xs' />
                </div>
                <button className='btn btn-primary'>Button</button>
            </form>
        </div>
    );
};

export default Register;