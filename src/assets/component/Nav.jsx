import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        // console.log(cal);
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])

    console.log(theme, 'Too');
    const hangleToggle = (e) => {
        console.log(e, 'data click')
        if (e.target.checked) {
            setTheme('dark')
        }
        else { setTheme('light') }
    }
    return (
        <div>
            <div className="navbar bg-base-100 shadow-lg  px-4 fixed ">
                <div className="flex-1">
                    <a className="btn btn-ghost gap-0 text-midnight text-xl">TOFEL<span className='text-purple'>viwe</span>
                    </a>
                </div>
                <div className="flex-none gap-2">
                    <ul className="menu menu-horizontal font-bold px-1 gap-4 mr-4">
                        {/* <li className='font-bold text-primary'><a>Home</a></li> */}
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "text-primary" : "text-secondary"
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/Bannar"
                            className={({ isActive }) =>
                                isActive ? "text-primary" : "text-secondary"
                            }
                        >
                            Blogs
                        </NavLink>
                        <NavLink
                            to="/Bookmark"
                            className={({ isActive }) =>
                                isActive ? "text-primary" : "text-secondary"
                            }
                        >
                            BookMarks
                        </NavLink>
                        <NavLink to='/login'
                            className={({ isActive }) => isActive ? 'text-primary' : 'text-secondary'}

                        >Login</NavLink>
                        <NavLink to='register' className={({ isActive }) => isActive ? 'text-primary' : 'text-secondary'}>Register</NavLink>
                    </ul>
                </div>
                <label className="grid cursor-pointer place-items-center">
                    <input
                        onChange={hangleToggle}
                        type="checkbox"
                        // value="synthwave"
                        className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1" />
                    <svg
                        className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <circle cx="12" cy="12" r="5" />
                        <path
                            d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                    </svg>
                    <svg
                        className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                </label>
            </div>
        </div>
    );
};

export default Nav;