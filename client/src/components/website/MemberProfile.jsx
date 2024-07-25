export default function MemberProfile({ membershipDetails, onConfirm }) {
    const [editableDetails, setEditableDetails] = useState({
        fullName: membershipDetails.fullName,
        email: membershipDetails.email,
        contactNumber: membershipDetails.contactNumber,
        profession: membershipDetails.designation,
        residence: membershipDetails.country,
        nationality: membershipDetails.nationality,
        workingPlace: membershipDetails.workingPlace
    });

    const handleChange = (field, value) => {
        setEditableDetails(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div className='flex justify-center mt-5'>
            <div className='w-[30rem] border rounded-lg shadow-lg'>
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Membership Details
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                        Edit the fields and confirm to renew your membership.
                    </p>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                    <dl className="sm:divide-y sm:divide-gray-200">
                        <div className="py-[0.90rem] sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Membership ID
                            </dt>
                            <dd className="sm:ml-5 mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {membershipDetails.membership_id}
                            </dd>
                        </div>
                        {Object.entries(editableDetails).map(([key, value]) => (
                            <div key={key} className="py-[0.90rem] sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1').trim()}
                                </dt>
                                <dd className="sm:ml-5 mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    <input
                                        type="text"
                                        value={value}
                                        onChange={(e) => handleChange(key, e.target.value)}
                                        className="w-full p-2 border rounded"
                                    />
                                </dd>
                            </div>
                        ))}
                        <div className="py-[0.90rem] sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Expiration Date
                            </dt>
                            <dd className="sm:ml-5 mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {membershipDetails.expirationDate}
                            </dd>
                        </div>
                        <div className="py-[0.90rem] sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Paid Price
                            </dt>
                            <dd className="sm:ml-5 mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {membershipDetails.amount} OMR <span className='font-thin'>will be <strong>25% off</strong></span>
                            </dd>
                        </div>
                    </dl>
                </div>
                <button
                    onClick={() => onConfirm(editableDetails)}
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700"
                >
                    Confirm Renewal
                </button>
            </div>
        </div>
    );
}