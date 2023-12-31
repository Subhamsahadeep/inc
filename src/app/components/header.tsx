"use client"
import Link from 'next/link';
import Image from 'next/image';
import Logo from "../../../assets/logo.png";

export default function Header() {
    return (
            <nav className="fixed w-full bg-white border-gray-200 text-black border border-gray-200 h-20">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link href="https://flowbite.com/" className="flex items-center">
                        <Image src={Logo}
                            width={30}
                            height={30}
                            alt="Picture of the author" 
                            className="h-8 mr-3" />
                        <div className="self-center text-sm whitespace-nowrap text-black">
                            <div className="font-semibold">H.K Patil</div> 
                            <div>Indian National Congress</div> 
                        </div>
                    </Link>
                    {/* <div className="flex items-center md:order-2">
                        <button type="button" 
                        className="flex mr-3 text-sm bg-white-800 rounded-full md:mr-0 focus:ring-4" 
                        id="user-menu-button" 
                        aria-expanded="false" 
                        data-dropdown-toggle="user-dropdown"
                        aria-controls="user-dropdown" 
                        data-dropdown-placement="bottom">
                            <span className="sr-only">Open user menu</span>
                            <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/logo.svg" alt="user photo" />
                        </button>

                        <div id="user-dropdown" className="z-50 hidden my-4 text-base list-none bg-black divide-y divide-gray-900 rounded-lg shadow">
                            <div className="px-4 py-3">
                                <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                            </div>
                            <ul className="py-2" aria-labelledby="user-menu-button">
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                                </li>
                            </ul>
                        </div>
                        <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div> */}
                    <div id="navbar-user" className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                            <Link href="/about" className="block py-2 pl-3 pr-4 text-black rounded hover:bg-black-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">About
                            </Link>
                            <Link href="/news" className="block py-2 pl-3 pr-4 text-black rounded hover:bg-black-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">News
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
    );
}