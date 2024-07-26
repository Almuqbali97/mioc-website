import React from 'react';

const OosPageFooter = () => {
    return (
        <div>
            <section
                className="relative overflow-hidden bg-gradient-to-b from-red-100 via-transparent to-transparent pt-24 rotate-180 h-36">
                <div className="relative z-10">
                    <div
                        className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
                        <svg className="h-[60rem] w-[100rem] flex-none stroke-red-600 opacity-20" aria-hidden="true">
                            <defs>
                                <pattern id="e9033f3e-f665-41a6-84ef-756f6778e6fe" width="200" height="200" x="50%" y="50%"
                                    patternUnits="userSpaceOnUse" patternTransform="translate(-100 0)">
                                    <path d="M.5 200V.5H200" fill="none"></path>
                                </pattern>
                            </defs>
                            <svg x="50%" y="50%" className="overflow-visible fill-blue-50">
                                <path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" stroke-width="0"></path>
                            </svg>
                            <rect width="100%" height="100%" stroke-width="0" fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)">
                            </rect>
                        </svg>
                    </div>
                </div>
                <div className="relative z-20 mx-auto max-w-7xl px-6 -mt-2 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">

                    </div>

                </div>
            </section>
        </div>
    );
}

export default OosPageFooter;