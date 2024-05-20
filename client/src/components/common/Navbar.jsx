import { Fragment, useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/AuthProvider.jsx';
// import mainLogo from '../../assets/images/mainLogo.png'
import mainLogo from '../../assets/images/mainLogoBigger1.png'
// import mainLogo from '../../assets/images/mainLogoNoBg.png'
import { Dialog, Disclosure, Popover, PopoverGroup, PopoverPanel, Transition } from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
    DocumentTextIcon,
    InformationCircleIcon,
    HeartIcon, CalendarDaysIcon,
    UserGroupIcon,
    BuildingLibraryIcon,
    EyeIcon,
    BeakerIcon,
    AcademicCapIcon,
    ClipboardDocumentCheckIcon,
    GlobeAltIcon,
    BuildingOffice2Icon,
    TicketIcon,
    GlobeAsiaAustraliaIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

const organization = [
    { name: 'Welcom message', description: 'Warm greetings for all of you', href: '/welcom-message', icon: HeartIcon },
    { name: 'Important dates', description: 'Important dates regards the conference', href: '/important-dates', icon: CalendarDaysIcon },
    { name: 'Organizing committee', description: 'Get to know our people!', href: '/organising-committee', icon: UserGroupIcon },
    { name: 'Sientific committee', description: 'Get to know our sientific committee', href: '/sientific-committee', icon: BuildingLibraryIcon },
]
const registration = [
    { name: 'Online registration', description: 'Book your place for the conference!', href: '/online-registration', icon: GlobeAltIcon },
    { name: 'Registration checklist', description: 'Get to know what you need for the registration', href: '/registration-checklist', icon: ClipboardDocumentCheckIcon },
]

const abstract = [
    { name: 'Info', description: 'Get more info before sumitting an abstract!', href: '/abstract-info', icon: InformationCircleIcon },
    { name: 'Submit Abstract', description: 'Here you can sumbit your abstract', href: '/abstract-info', icon: DocumentTextIcon },
]

const program = [
    { name: 'CME', description: 'Info about conference certificates', href: '/cme', icon: InformationCircleIcon },
    { name: 'Program at a glance', description: 'get a quick look into our program', href: '/program-at-a-glance', icon: EyeIcon },
    { name: 'Sientific program', description: 'Here you can sumbit your abstract', href: '/sientific-program', icon: BeakerIcon },
    { name: 'Courses & Workshops', description: 'Get to know our work shops', href: '/courses-and-workshops', icon: AcademicCapIcon },
]

const travel = [
    { name: 'Muscat-your host city', description: 'Get to know more about Muscat!', href: '/muscat-city', icon: GlobeAsiaAustraliaIcon },
    { name: 'Transportation', description: 'Get a look at transportation options', href: '/transportation', icon: TicketIcon },
    { name: 'Visa information', description: 'Get more information about applying for visa!', href: '/visa-information', icon: InformationCircleIcon },
    { name: 'Accommodation', description: 'Check our recommendation for accommodation`', href: '/accommodation', icon: BuildingOffice2Icon },
]
const sponsersAndExhibitors = [
    { name: 'Reserve your place', description: 'Be part of our event!', href: '/reserve-your-space',  },
    { name: 'Sponsers & Exhibitors', description: 'Get a look at transportation options', href: '/sponsers-and-exhibitors', },
]
const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const { isLogin } = useContext(AuthContext);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const header = document.getElementById('navBar');
    //         if (window.scrollY > 0) {
    //             header.classList.add('bg-opacity-100', 'text-gray-700');
    //             header.classList.remove('bg-opacity-0', 'text-white');
    //         } else {
    //             header.classList.add('bg-opacity-0', 'text-black');
    //             header.classList.remove('bg-opacity-100', 'text-gray-700');
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    return (
        <header id='navBar' className="bg-white shadow-md sticky top-0 z-10 transition-all text-black hover:text-gray-700">
            <nav className="mx-auto flex max-w-8xl items-center justify-between p-4 sm:p-6 lg:px-6" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5">
                        <span className="sr-only">Your Company</span>
                        <img className="h-12 w-auto rounded-md" src={mainLogo} alt="logo image" />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 "
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>

                <PopoverGroup className="hidden lg:flex space-x-7 xl:space-x-10">
                    {/* <Link to={"/"} className="text-sm font-semibold hover:text-blue-500 leading-6  uppercase">
                        Home
                    </Link> */}
                    <Popover className="relative">
                        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6  hover:text-blue-500 uppercase">
                            Organizaion
                            <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <PopoverPanel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                <div className="p-4">
                                    {organization.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-200"
                                        >
                                            {/* <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-200 group-hover:bg-white">
                                                <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                            </div> */}
                                            <div className="flex-auto">
                                                <a href={item.href} className="block font-semibold ">
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </a>
                                                <p className="mt-1 text-gray-600">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </PopoverPanel>
                        </Transition>
                    </Popover>

                    <Popover className="relative">
                        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6  hover:text-blue-500 uppercase">
                            Registration
                            <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <PopoverPanel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                <div className="p-4">
                                    {registration.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-200"
                                        >
                                            {/* <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-200 group-hover:bg-white">
                                                <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                            </div> */}
                                            <div className="flex-auto">
                                                <a href={item.href} className="block font-semibold ">
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </a>
                                                <p className="mt-1 text-gray-600">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </PopoverPanel>
                        </Transition>
                    </Popover>

                    <Popover className="relative">
                        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6  hover:text-blue-500 uppercase">
                            Abstract
                            <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <PopoverPanel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                <div className="p-4">
                                    {abstract.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-200"
                                        >
                                            {/* <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-200 group-hover:bg-white">
                                                <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                            </div> */}
                                            <div className="flex-auto">
                                                <a href={item.href} className="block font-semibold ">
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </a>
                                                <p className="mt-1 text-gray-600">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </PopoverPanel>
                        </Transition>
                    </Popover>

                    <Popover className="relative">
                        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6  hover:text-blue-500 uppercase">
                            Program
                            <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <PopoverPanel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                <div className="p-4">
                                    {program.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-200"
                                        >
                                            {/* <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-200 group-hover:bg-white">
                                                <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                            </div> */}
                                            <div className="flex-auto">
                                                <a href={item.href} className="block font-semibold ">
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </a>
                                                <p className="mt-1 text-gray-600">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </PopoverPanel>
                        </Transition>
                    </Popover>

                    <a href="/faculty" className="text-sm font-semibold hover:text-blue-500 leading-6  uppercase">
                        Faculty
                    </a>

                    <Popover className="relative">
                        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6  hover:text-blue-500 uppercase">
                            Sponsers/Exhibitors
                            <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <PopoverPanel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                <div className="p-4">
                                    {sponsersAndExhibitors.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-200"
                                        >
                                            {/* <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-200 group-hover:bg-white">
                                                <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                            </div> */}
                                            <div className="flex-auto">
                                                <a href={item.href} className="block font-semibold ">
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </a>
                                                <p className="mt-1 text-gray-600">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </PopoverPanel>
                        </Transition>
                    </Popover>

                    
                    <Popover className="relative">
                        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6  hover:text-blue-500 uppercase">
                            Travel
                            <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <PopoverPanel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                <div className="p-4">
                                    {travel.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-200"
                                        >
                                            {/* <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-200 group-hover:bg-white">
                                                <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                            </div> */}
                                            <div className="flex-auto">
                                                <a href={item.href} className="block font-semibold ">
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </a>
                                                <p className="mt-1 text-gray-600">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </PopoverPanel>
                        </Transition>
                    </Popover>
                </PopoverGroup>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    {isLogin ? <Link to={'/logout'} className="text-sm font-semibold leading-6  hover:text-red-500">
                        Logout <span aria-hidden="true">&rarr;</span>
                    </Link> : <Link to={'/login'} className="text-sm font-semibold leading-6  hover:text-green-500">
                        Signin / Signup <span aria-hidden="true">&rarr;</span>
                    </Link>}
                </div>
            </nav>


            <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-20" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-30 w-full overflow-y-auto bg-white px-4 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto"
                                src={mainLogo}
                                alt=""
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-200">
                                                Organizaion
                                                <ChevronDownIcon
                                                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {[...organization].map((item) => (
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block bg-primary_blue  rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-gray-200"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-200">
                                                Registration
                                                <ChevronDownIcon
                                                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {[...registration].map((item) => (
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block bg-primary_blue  rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-gray-200"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-200">
                                                Abstract
                                                <ChevronDownIcon
                                                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {[...abstract].map((item) => (
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block bg-primary_blue  rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-gray-200"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-200">
                                                Program
                                                <ChevronDownIcon
                                                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {[...program].map((item) => (
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block bg-primary_blue  rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-gray-200"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                <a
                                    href="/faculty"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-200"
                                >
                                    Faculty
                                </a>

                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-200">
                                                Travel
                                                <ChevronDownIcon
                                                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {[...travel].map((item) => (
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block bg-primary_blue  rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-gray-200"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            </div>
                            <div className="py-6">
                                {isLogin ? <a href={'/logout'} className="text-sm font-semibold leading-6  hover:text-red-500">
                                    Logout <span aria-hidden="true">&rarr;</span>
                                </a> : <a href={'/login'} className="text-sm font-semibold leading-6  hover:text-green-500">
                                    Signin / Signup <span aria-hidden="true">&rarr;</span>
                                </a>}
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}