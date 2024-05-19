import React from 'react';

const SocialIcons = () => {
    return (
            <ul className='hidden sm:flex justify-center items-center text-white'>
                <li>
                    <a className="text-muted inline-flex items-center rounded-lg p-2.5 text-sm hover:scale-110 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                    aria-label="Twitter" href="https://x.com/mioc_oman?s=21&t=g3Pqb7NMI7Y9YyKlI08wzw"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                            strokeLinejoin="round" className="h-5 w-5">
                            <path
                                d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z">
                            </path>
                        </svg>
                    </a>
                </li>

                <li>
                    <a className="text-muted inline-flex items-center rounded-lg p-2.5 text-sm hover:scale-110 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                    aria-label="Instagram" href="https://www.instagram.com/mioc_oman?igsh=dzQ5bGZ0M2h3M2Z2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                            strokeLinejoin="round" className="h-5 w-5">
                            <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
                            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                            <path d="M16.5 7.5l0 .01"></path>
                        </svg>
                    </a>
                </li>

                <li>
                    <a className="text-muted inline-flex items-center rounded-lg p-2.5 text-sm hover:scale-110 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                    aria-label="Facebook" href="https://www.facebook.com/profile.php?id=100063872257919&mibextid=LQQJ4d"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                            strokeLinejoin="round" className="h-5 w-5">
                            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                        </svg>
                    </a>
                </li>
            </ul>
    );
}

export default SocialIcons;
