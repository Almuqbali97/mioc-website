import React from 'react';

const TopBar = () => {
    return (
        <div className='h-[35px] bg-gradient-to-r from-[#33689C] to-[#D0A45D]'>
            <div className='flex justify-center items-center h-full sm:space-x-6'>
                <ul className='flex items-center text-sm  h-full space-x-6 justify-center place-self-center text-white font-light'>
                    <li className='hover:scale-110 transition-all'> <a href='/'>HOME</a></li>
                    <li className='hover:scale-110 transition-all'>SUBPPORT</li>
                    <li className='hover:scale-110 transition-all'>CONTACT</li>
                    <li className='hover:scale-110 transition-all'>ABOUT</li>
                </ul>
                <ul className='hidden sm:flex justify-center items-center text-white'>
                    <li>
                        <a class="text-muted inline-flex items-center rounded-lg p-2.5 text-sm hover:scale-110 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                            aria-label="Twitter" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="h-5 w-5">
                                <path
                                    d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z">
                                </path>
                            </svg>
                        </a>
                    </li>

                    <li>
                        <a class="text-muted inline-flex items-center rounded-lg p-2.5 text-sm hover:scale-110 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                            aria-label="Instagram" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="h-5 w-5">
                                <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
                                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                                <path d="M16.5 7.5l0 .01"></path>
                            </svg>
                        </a>
                    </li>

                    <li>
                        <a class="text-muted inline-flex items-center rounded-lg p-2.5 text-sm hover:scale-110 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                            aria-label="Facebook" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="h-5 w-5">
                                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default TopBar;
