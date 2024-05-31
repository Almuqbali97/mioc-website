import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faClock, faSun, faMoneyBill, faLanguage, faPhone, faTaxi, faExclamationTriangle, faPlug } from '@fortawesome/free-solid-svg-icons';

const infoCards = [
    {
        title: 'Air Travel',
        description: 'Over 35 Airlines operating across the terminals of Muscat International Airport.',
        icon: faPlane,
    },
    {
        title: 'Time',
        description: 'Muscat observes the Gulf Standard Time all the year (GMT+4)',
        icon: faClock,
    },
    {
        title: 'Weather',
        description: 'The average daytime Temperature is 35.5°C and goes down to 20.5°C at night.',
        icon: faSun,
    },
    {
        title: 'Currency & Banking',
        description: 'Omani Riyals (OMR) is the official currency. International Cards are widely accepted, and ATMs can easily be located anywhere.',
        icon: faMoneyBill,
    },
    {
        title: 'Language',
        description: 'The local language is Arabic. The official congress language is English.',
        icon: faLanguage,
    },
    {
        title: 'Communications',
        description: 'The international dialing code is +968. For international calls, dial 00 + national code + area code + personal number.',
        icon: faPhone,
    },
    {
        title: 'Transportation',
        description: 'Delegates can comfortably commute using the Muscat public transport network.',
        icon: faTaxi,
    },
    {
        title: 'Emergency',
        description: '9999 for Police, 9999 for Ambulance, 999 for Fire Department',
        icon: faExclamationTriangle,
    },
    {
        title: 'POWER PLUGS',
        description: 'Power sockets are Type G, rectangular, 3-pin socket.',
        icon: faPlug,
    },
];

const InfoCard = ({ title, description, icon }) => (
    <div className="p-4 border rounded-lg shadow-md text-center">
        <div className="text-4xl mb-4 text-primary_blue" style={{ color: '' }}><FontAwesomeIcon icon={icon} /></div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p>{description}</p>
    </div>
);

const InfoCards = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto p-4 mt-9">
        {infoCards.map((card, index) => (
            <InfoCard key={index} {...card} />
        ))}
    </div>
);

export default InfoCards;
