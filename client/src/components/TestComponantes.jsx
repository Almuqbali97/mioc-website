import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const products = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="container mx-auto my-16 p-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="col-span-1">
                    <div className="bg-white shadow-lg rounded-lg p-6 mt-3 h-full flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-700">Standard Fee</h3>
                            <p className="mt-2 text-gray-500">From 2nd November 2024</p>
                            <div className="mt-4 border-b border-gray-300 ">
                                <p className="text-gray-500">Early Bird</p>
                                <p className="text-gray-700">From 26 April 2024</p>
                            </div>
                            <div className="mt-4 border-b border-gray-300">
                                <p className="text-gray-500">Onsite Fee</p>
                                <p className="text-gray-700">From 29 November 2024</p>
                            </div>
                            <div className="mt-4 space-y-2">
                                <p className="text-gray-700 border-b border-gray-300 pb-2">Access to Session Halls</p>
                                <p className="text-gray-700 border-b border-gray-300 pb-2">Access to Exhibition Halls</p>
                                <p className="text-gray-700 border-b border-gray-300 pb-2">Delegate Bag</p>
                                <p className="text-gray-700 border-b border-gray-300 pb-2">Final Program</p>
                                <p className="text-gray-700 border-b border-gray-300 pb-2">Coffee Breaks</p>
                            </div>
                        </div>
                    </div>
                </div>
                {[
                    {
                        title: 'OPHTHALMOLOGIST/ PHYSICIAN',
                        price: 550,
                        earlyBirdPrice: 450,
                        onsitePrice: 650,
                        key: 1
                    },
                    {
                        title: 'YOUNG OPHTHALMOLOGIST',
                        price: 350,
                        earlyBirdPrice: 250,
                        onsitePrice: 450,
                        key: 2
                    },
                    {
                        title: 'OPTOMETRIST / ALLIED HEALTH / RESIDENTS',
                        price: 200,
                        earlyBirdPrice: 150,
                        onsitePrice: 250,
                        key: 3
                    }
                ].map(card => (
                    <div key={card.key} className="col-span-1 transform transition-transform hover:scale-105">
                        <div className="bg-white shadow-lg rounded-lg p-6 h-full flex flex-col justify-between text-center">
                            <div>
                                <h3 className="text-2xl font-semibold text-gray-700">{card.title}</h3>
                                <div className="my-4">
                                    <div className="text-4xl font-bold text-primary_blue">US$ {card.price}</div>
                                </div>
                                <div className="mt-4">
                                    <p className="text-gray-500">Early bid US$ {card.earlyBirdPrice}</p>
                                </div>
                                <div className="mt-4">
                                    <p className="text-gray-500">Onsite Fee US$ {card.onsitePrice}</p>
                                </div>
                                <div className="mt-4 space-y-2">
                                    <p className="text-green-500 border-b border-gray-300 pb-2">&#10003; Access to Session Halls</p>
                                    <p className="text-green-500 border-b border-gray-300 pb-2">&#10003; Access to Exhibition Halls</p>
                                    <p className="text-green-500 border-b border-gray-300 pb-2">&#10003; Delegate Bag</p>
                                    <p className="text-green-500 border-b border-gray-300 pb-2">&#10003; Final Program</p>
                                    <p className="text-green-500 border-b border-gray-300 pb-2">&#10003; Coffee Breaks</p>
                                </div>
                            </div>
                            <button className="mt-6 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700">Register Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
