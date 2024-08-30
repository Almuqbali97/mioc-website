import React from 'react';
import SocialIcons from './SocialIcons';
const svgBg = `data:image/svg+xml;base64,${btoa(
    `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" width="1440" height="560" preserveAspectRatio="none" viewBox="0 0 1440 560">
    <g mask="url(&quot;#SvgjsMask1178&quot;)" fill="none">
        <rect width="1440" height="560" x="0" y="0" fill="url(&quot;#SvgjsLinearGradient1179&quot;)"></rect>
        <path d="M1440 0L1155.32 0L1440 84.38z" fill="rgba(255, 255, 255, .1)"></path>
        <path d="M1155.32 0L1440 84.38L1440 186.20999999999998L587.1099999999999 0z" fill="rgba(255, 255, 255, .075)"></path>
        <path d="M587.1099999999999 0L1440 186.20999999999998L1440 231.77999999999997L496.7799999999999 0z" fill="rgba(255, 255, 255, .05)"></path>
        <path d="M496.77999999999986 0L1440 231.77999999999997L1440 335.96L395.73999999999984 0z" fill="rgba(255, 255, 255, .025)"></path>
        <path d="M0 560L681.94 560L0 380.32z" fill="rgba(0, 0, 0, .1)"></path>
        <path d="M0 380.32L681.94 560L843.1 560L0 285.48z" fill="rgba(0, 0, 0, .075)"></path>
        <path d="M0 285.48L843.1 560L1044.66 560L0 118.89000000000001z" fill="rgba(0, 0, 0, .05)"></path>
        <path d="M0 118.88999999999999L1044.66 560L1266.66 560L0 70.23999999999998z" fill="rgba(0, 0, 0, .025)"></path>
    </g>
    <defs>
        <mask id="SvgjsMask1178">
            <rect width="1440" height="560" fill="#ffffff"></rect>
        </mask>
        <linearGradient x1="15.28%" y1="-39.29%" x2="84.72%" y2="139.29%" gradientUnits="userSpaceOnUse" id="SvgjsLinearGradient1179">
            <stop stop-color="#0e2a47" offset="0"></stop>
            <stop stop-color="rgba(1, 102, 153, 1)" offset="1"></stop>
        </linearGradient>
    </defs>
</svg>`
)}`

const MapSection = () => {
    return (
        <section className="" style={{
            backgroundImage: `url(${svgBg})`,
            backgroundSize: 'cover',
            width: '100%',
            // height: '100vh'
        }}>
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="my-7">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="rounded-lg overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14627.625307802917!2d58.306235074996955!3d23.57180754583634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8e00f6179b8d43%3A0x6f79c844903bc554!2sOman%20Convention%20Centre!5e0!3m2!1sen!2som!4v1717076429038!5m2!1sen!2som"
                                width="100%" height="480" style={{ border: "0" }} allowFullScreen="" loading="lazy"></iframe>
                        </div>
                        <div>
                            <div className="max-w-full mx-auto rounded-lg overflow-hidden">

                                <div className="px-6 py-4">
                                    <h2 className="text-3xl font-bold mb-2 text-white">Let's get in touch</h2>
                                    <p className="mt-1 text-white">We appreciate your comments, suggestions and questions.</p>
                                </div>
                                <div className="px-6 py-4">
                                    <h3 className="text-lg font-medium text-white">Our Address</h3>
                                    <p className="mt-1 text-white">Convention & Exhibition Centre, Muscat, Oman</p>
                                </div>
                                <div className="border-t border-gray-200 px-6 py-4">
                                    <h3 className="text-lg font-medium text-white">Contact</h3>
                                    <p className="mt-1 text-white">
                                        Email: <a href="mailto:info@mioc.org.om" className="text-blue-200 font-semibold hover:underline">info@mioc.org.om</a>
                                    </p>
                                    <p className="mt-1 text-white">
                                        Support: <a href="mailto:support@mioc.org.om" className="text-blue-200 font-semibold hover:underline">support@mioc.org.om</a>
                                    </p>
                                    <p className="mt-1 text-white">
                                        Phone: <a href="tel:+96879191556" className="text-blue-200 font-semibold hover:underline">+968 79191556</a>
                                    </p>
                                </div>

                                <div className="border-t border-gray-200 px-6 py-4">
                                    <h3 className="text-lg font-medium text-white">Social</h3>

                                    <ul className='flex text-white'>
                                        <li>
                                            <a className="text-muted inline-flex items-center rounded-lg p-2.5 pl-0 text-sm hover:scale-110 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MapSection;
