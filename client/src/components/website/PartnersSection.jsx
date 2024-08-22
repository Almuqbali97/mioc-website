import emcoLogo from '../../assets/images/EMCOnoBg.png';
import iksLog from '../../assets/images/iksIcon.png';
import oosLogo from '../../assets/images/omanOSosColored-cropped.svg'
import oocLogo from '../../assets/images/oocColored.png'
const PartnersSection = () => {
    return (
        <div className='my-5 mx-4 pb-8 mb-8'>
            <div className="p-8">
                <div className="flex items-center justify-center">
                    <p className="font-bold text-3xl">
                        Our
                        <span className="text-primary_blue mx-1 font-extrabold text-4xl relative inline-block stroke-current">
                            Partners
                            <svg className="absolute -bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none">
                                <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" stroke="#d8a757" strokeWidth="2"></path>
                            </svg>
                        </span>
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 space-y-20 md:space-x-5 md:space-y-0">

                <div className="p-8  shadow-2xl relative">
                    <div className='flex flex-col h-full justify-between'>
                        <div
                            className="bg-indigo-100 rounded-full w-16 h-16 flex justify-center items-center text-[#1D5493]  shadow-2xl"
                        >
                            <img src={emcoLogo} />
                        </div>
                        <h2 className="uppercase mt-6 text-[#1D5493] font-medium mb-3">
                            Eastern Mediterranean Council of Optometry
                        </h2>
                        <p className="font-light text-sm text-gray-500 mb-3">
                            EMCO, founded in 2010, represents optometrists in the Eastern Mediterranean Region...
                        </p>
                        <a className="text-[#1D5493] flex items-center hover:translate-x-5 transition-all" href="http://www.emco-opt.org/">
                            Visit EMCO Website
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                    </div>
                    <span className="hidden md:block absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-primary_blue  to-primary_brown"></span>
                    <span className="md:hidden absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-primary_blue  to-primary_brown"></span>

                </div>
                <div className="p-8  shadow-2xl relative">
                    <div className='flex flex-col h-full justify-between'>
                        <div
                            className="bg-fuchsia-100 rounded-full w-16 h-16 flex justify-center items-center text-[#922ABA]  shadow-2xl"
                        >
                            <img src={iksLog} />
                        </div>
                        <h2 className="uppercase mt-6 text-[#922ABA] font-medium mb-3">
                            International Keratoconus Society
                        </h2>
                        <p className="font-light text-sm text-gray-500 mb-3">The IKS is an independent non-profit society registered in Muscat, Oman...
                        </p>
                        <a className="text-[#922ABA] flex items-center hover:translate-x-5 transition-all" href="https://www.ikc-society.org/">
                            Visit IKS Website
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                    </div>
                    <span className="hidden md:block absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-primary_blue  to-primary_brown"></span>
                    <span className="md:hidden absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-primary_blue  to-primary_brown"></span>
                </div>

                <div className="p-8  shadow-2xl relative">
                    <div className='flex flex-col h-full justify-between'>
                        <div
                            className="bg-red-100 rounded-full w-16 h-16 flex justify-center items-center text-[#D6261D]  shadow-2xl"
                        >
                            <img src={oosLogo} />
                        </div>
                        <h2 className="uppercase mt-6 text-[#D6261D] font-medium mb-3">
                            Oman Ophthalmic Society
                        </h2>
                        <p className="font-light text-sm text-gray-500 mb-3">
                            The objective of the society are cultivation and promotion of the study and practice of ophthalmic sciences, research and man-power development...
                        </p>
                        <a className="text-[#D6261D] flex items-center hover:translate-x-5 transition-all" href="https://www.omanophthalmicsociety.org/">
                            Visit OOS Website
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                    </div>
                    <span className="hidden md:block absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-primary_blue  to-primary_brown"></span>
                    <span className="md:hidden absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-primary_blue  to-primary_brown"></span>
                </div>


                <div className="p-8  shadow-2xl relative">
                    <div className='flex flex-col h-full justify-between'>
                        <div
                            className="bg-[#623cea24] rounded-full w-16 h-16 flex justify-center items-center text-[#623CEA]  shadow-2xl"
                        >
                            <img src={oocLogo} />
                        </div>
                        <h2 className="uppercase mt-6 text-[#623CEA] font-medium mb-3">
                            Oman Optometry Club
                        </h2>
                        <p className="font-light text-sm text-gray-500 mb-3">
                            The Oman Optometry Club is a non-profit organization founded in 2023 by a group of optometry graduates in the Sultanate of Oman...
                        </p>
                        <a className="text-[#623CEA] flex items-center hover:translate-x-5 transition-all" href="https://omanoptometryclub.com/">
                            Visit OOC Website
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                    </div>
                    <span className="hidden md:block absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-primary_blue  to-primary_brown"></span>
                    <span className="md:hidden absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-primary_blue  to-primary_brown"></span>

                </div>
            </div>
        </div>
    );
}

export default PartnersSection;
