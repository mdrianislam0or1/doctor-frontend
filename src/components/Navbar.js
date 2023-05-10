import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    Collapse,
    initTE,
} from "tw-elements";
import { logout } from '../redux/actions/userAction';

initTE({ Collapse });
const Navbar = () => {
const dispatch = useDispatch();
const userLogin = useSelector((state) => state.userLogin)
const {userInfo} = userLogin

const logOutHandler = () => {
    dispatch(logout())
    // localStorage.removeItem('userInfo')
    window.location.to = '/login'
}

    return (
        <div>
            <nav
                className="relative flex w-full flex-nowrap items-center justify-between bg-neutral-100 py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:flex-wrap lg:justify-start lg:py-4"
                data-te-navbar-ref>
                <div className="flex w-full flex-wrap items-center justify-between px-3">

                    <button
                        className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
                        type="button"
                        data-te-collapse-init
                        data-te-target="/navbarSupportedContent3"
                        aria-controls="navbarSupportedContent3"
                        aria-expanded="false"
                        aria-label="Toggle navigation">

                        <span className="[&>svg]:w-7">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-7 w-7">
                                <path
                                    fill-rule="evenodd"
                                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                    clip-rule="evenodd" />
                            </svg>
                        </span>
                    </button>


                    <div
                        className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
                        id="navbarSupportedContent3"
                        data-te-collapse-item>

                        <Link className="pr-2 text-xl text-black dark:text-neutral-200" to="/"
                        >Navbar</Link>

                        <ul
                            className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row"
                            data-te-navbar-nav-ref>

                            <li className="my-4 lg:my-0 lg:pr-2" data-te-nav-item-ref>
                                <Link
                                    className="active disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                                    aria-current="page"
                                    to="/"
                                    data-te-nav-link-ref
                                >Home</Link>
                            </li>

                            {userInfo ?(
                                <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                                    <Link to='/profile'>
                                        <li>Profile {userInfo.name}</li>
                                    </Link>

                                    <li onClick={logOutHandler}>
                                        Logout
                                    </li>
                                </li>
                            ):(
                                <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                                <Link
                                    className="p-0 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                                    to="/"
                                    data-te-nav-link-ref
                                >Features</Link>
                            </li>
                            )}

                            
                            {userInfo && userInfo.isAdmin && (
                                <div>
                              
                                <div class="">
                                  <Link to="/admin/userlist" class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                    Admin
                                  </Link>
                                  <Link to="/admin/doctorlist" class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                    Doctor List
                                  </Link>
                                  
                                  <Link to="/admin/bookedlist" class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                    Booked List
                                  </Link>
                                  
                                </div>
                              </div>
                            )}




                            <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                                <Link
                                    className="p-0 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                                    to="/process"
                                    data-te-nav-link-ref
                                >Process</Link>
                            </li>
                            <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                                <Link
                                    className="p-0 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                                    to="/login"
                                    data-te-nav-link-ref
                                >Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar