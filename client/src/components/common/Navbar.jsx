import { Fragment, useState, useContext, useRef, useEffect } from 'react';
import AuthContext from '../../context/AuthProvider.jsx';
import mainLogo from '../../assets/images/mainLogoBigger1.png';
import { Dialog, DialogPanel, Disclosure, PopoverButton, Popover, PopoverGroup, PopoverPanel, Transition, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import ProfileDropdown from '../website/ProfileDropdown.jsx';

const organization = [
    { name: 'Welcome message', description: 'Warm greetings to all of you', to: '/welcome-message' },
    { name: 'Important dates', description: 'Important dates of the conference', to: '/important-dates' },
    { name: 'Organizing committee', description: 'Get to know our people!', to: '/organising-committee' },
    { name: 'Scientific committee', description: 'Get to know our scientific committee', to: '/sientific-committee' },
];
const registration = [
    { name: 'Online registration', description: 'Book your place for the conference!', to: '/online-registration' },
    { name: 'Registration checklist', description: 'Get to know what you need for the registration', to: '/registration-checklist' },
];

const program = [
    { name: 'CME', description: 'Info about conference certificates', to: '/cme' },
    { name: 'Program at a glance', description: 'Get a quick look into our program', to: '/program-at-a-glance' },
    { name: 'Scientific program', description: 'Here you can sumbit your abstract', to: '/sientific-program' },
    { name: 'Courses & Workshops', description: 'Get to know our work shops', to: '/courses-and-workshops' },
];
const travel = [
    { name: 'Muscat-your host city', description: 'Get to know more about Muscat!', to: '/muscat-city' },
    { name: 'Transportation', description: 'Get a look at transportation options', to: '/transportation' },
    { name: 'Visa information', description: 'Get more information about applying for visa!', to: '/visa-information' },
    { name: 'Accommodation', description: 'Check our recommendation for accommodation`', to: '/accommodation' },
];
const sponsersAndExhibitors = [
    { name: 'Reserve your place', description: 'Be part of our event!', to: '/reserve-your-space' },
];

const userProfileMenu = [
    { name: 'Submitted Abstracts', to: '/user/abstract' },
    { name: 'Conference Registration', to: '/user/conference/registration' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const Dropdown = ({ title, items, handleLinkClick }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    function handleLinkClick() {
        setIsOpen(false);
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button className="flex items-center gap-1 text-sm font-semibold leading-6 hover:text-blue-500 uppercase" onClick={handleToggle}>
                {title}
                <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </button>
            <div className={`${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} transition-all duration-300 ease-in-out`}>
                {isOpen && (
                    <div className="absolute mt-2 w-[25rem] bg-white border border-gray-200 rounded-3xl shadow-lg z-10">
                        <div className="p-4">
                            {items.map((item) => (
                                <div key={item.name} className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-blue-100 hover:bg-opacity-80 transition-all duration-75 ease-out">
                                    <div className="flex-auto">
                                        <Link to={item.to} className="block font-semibold" onClick={handleLinkClick}>
                                            {item.name}
                                            <span className="absolute inset-0" />
                                        </Link>
                                        <p className="mt-1 text-gray-600">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default function Navbar() {
    const { isLogin, user } = useContext(AuthContext);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleLinkClick = () => {
        setMobileMenuOpen(false);
    };

    return (
        <header id='navBar' className="bg-white shadow-md relative top-0 z-10 transition-all text-black hover:text-gray-700">
            <nav className="mx-auto flex max-w-8xl items-center justify-between p-4 sm:p-[1.2rem] lg:px-6" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link to="/" className="-m-1.5">
                        <span className="sr-only">Your Company</span>
                        <img className="h-8 w-auto sm:h-14 rounded-md" src={mainLogo} alt="logo image" />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>

                <div className="hidden lg:flex space-x-7 xl:space-x-10">
                    <Dropdown title="Organization" items={organization} handleLinkClick={handleLinkClick} />
                    <Dropdown title="Registration" items={registration} handleLinkClick={handleLinkClick} />
                    <Link to="/abstract-submission" className="text-sm font-semibold hover:text-blue-500 leading-6 uppercase" onClick={handleLinkClick}>
                        Abstract
                    </Link>
                    <Dropdown title="Program" items={program} handleLinkClick={handleLinkClick} />
                    <Link to="/faculty" className="text-sm font-semibold hover:text-blue-500 leading-6 uppercase" onClick={handleLinkClick}>
                        Faculty
                    </Link>
                    <Dropdown title="Sponsors/Exhibitors" items={sponsersAndExhibitors} handleLinkClick={handleLinkClick} />
                    <Dropdown title="Travel" items={travel} handleLinkClick={handleLinkClick} />
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    {isLogin ? (
                        <ProfileDropdown />
                    ) : (
                        <Link to={'/login'} className="text-sm font-semibold leading-6 hover:text-green-500" onClick={handleLinkClick}>
                            Signin / Signup <span aria-hidden="true">&rarr;</span>
                        </Link>
                    )}
                </div>
            </nav>

            <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-20" />
                <DialogPanel className="fixed inset-y-0 right-0 z-30 w-full overflow-y-auto bg-white px-4 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="-m-1.5 p-1.5" onClick={handleLinkClick}>
                            <span className="sr-only">Your Company</span>
                            <img className="h-8 w-auto" src={mainLogo} alt="" />
                        </Link>
                        <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
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
                                            <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-blue-100 hover:bg-opacity-80">
                                                Organization
                                                <ChevronDownIcon className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')} aria-hidden="true" />
                                            </DisclosureButton>
                                            <DisclosurePanel className="mt-2 space-y-2">
                                                {organization.map((item) => (
                                                    <DisclosureButton key={item.name} as={Link} to={item.to} className="block bg-primary_blue rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-blue-100 hover:bg-opacity-80" onClick={handleLinkClick}>
                                                        {item.name}
                                                    </DisclosureButton>
                                                ))}
                                            </DisclosurePanel>
                                        </>
                                    )}
                                </Disclosure>
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-blue-100 hover:bg-opacity-80">
                                                Registration
                                                <ChevronDownIcon className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')} aria-hidden="true" />
                                            </DisclosureButton>
                                            <DisclosurePanel className="mt-2 space-y-2">
                                                {registration.map((item) => (
                                                    <DisclosureButton key={item.name} as={Link} to={item.to} className="block bg-primary_blue rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-blue-100 hover:bg-opacity-80" onClick={handleLinkClick}>
                                                        {item.name}
                                                    </DisclosureButton>
                                                ))}
                                            </DisclosurePanel>
                                        </>
                                    )}
                                </Disclosure>
                                <Link to="/abstract-submission" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-blue-100 hover:bg-opacity-80" onClick={handleLinkClick}>
                                    Abstract
                                </Link>
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-blue-100 hover:bg-opacity-80">
                                                Program
                                                <ChevronDownIcon className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')} aria-hidden="true" />
                                            </DisclosureButton>
                                            <DisclosurePanel className="mt-2 space-y-2">
                                                {program.map((item) => (
                                                    <DisclosureButton key={item.name} as={Link} to={item.to} className="block bg-primary_blue rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-blue-100 hover:bg-opacity-80" onClick={handleLinkClick}>
                                                        {item.name}
                                                    </DisclosureButton>
                                                ))}
                                            </DisclosurePanel>
                                        </>
                                    )}
                                </Disclosure>
                                <Link to="/faculty" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-blue-100 hover:bg-opacity-80" onClick={handleLinkClick}>
                                    Faculty
                                </Link>
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-blue-100 hover:bg-opacity-80">
                                                Sponsors/Exhibitors
                                                <ChevronDownIcon className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')} aria-hidden="true" />
                                            </DisclosureButton>
                                            <DisclosurePanel className="mt-2 space-y-2">
                                                {sponsersAndExhibitors.map((item) => (
                                                    <DisclosureButton key={item.name} as={Link} to={item.to} className="block bg-primary_blue rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-blue-100 hover:bg-opacity-80" onClick={handleLinkClick}>
                                                        {item.name}
                                                    </DisclosureButton>
                                                ))}
                                            </DisclosurePanel>
                                        </>
                                    )}
                                </Disclosure>
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-blue-100 hover:bg-opacity-80">
                                                Travel
                                                <ChevronDownIcon className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')} aria-hidden="true" />
                                            </DisclosureButton>
                                            <DisclosurePanel className="mt-2 space-y-2">
                                                {travel.map((item) => (
                                                    <DisclosureButton key={item.name} as={Link} to={item.to} className="block bg-primary_blue rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-blue-100 hover:bg-opacity-80" onClick={handleLinkClick}>
                                                        {item.name}
                                                    </DisclosureButton>
                                                ))}
                                            </DisclosurePanel>
                                        </>
                                    )}
                                </Disclosure>
                            </div>
                            <div className="py-6">
                                {isLogin ?
                                    <Disclosure as="div" className="-mx-3">
                                        {({ open }) => (
                                            <>
                                                <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-blue-100 hover:bg-opacity-80">
                                                    {user.firstName} {user.lastName}
                                                    <ChevronDownIcon className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')} aria-hidden="true" />
                                                </DisclosureButton>
                                                <DisclosurePanel className="mt-2 space-y-2">
                                                    {userProfileMenu.map((item) => (
                                                        <DisclosureButton key={item.name} as={Link} to={item.to} className="block bg-primary_blue rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-blue-100 hover:bg-opacity-80" onClick={handleLinkClick}>
                                                            {item.name}
                                                        </DisclosureButton>
                                                    ))}
                                                </DisclosurePanel>
                                                <Link to={'/logout'} className="text-sm font-semibold leading-6 px-3 text-red-500 hover:text-red-600" onClick={handleLinkClick}>
                                                    Logout <span aria-hidden="true">&rarr;</span>
                                                </Link>
                                            </>
                                        )}
                                    </Disclosure>
                                    : <Link to={'/login'} className="text-sm font-semibold leading-6 hover:text-green-500" onClick={handleLinkClick}>
                                        Signin / Signup <span aria-hidden="true">&rarr;</span>
                                    </Link>}
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
}
