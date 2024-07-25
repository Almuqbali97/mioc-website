const CancelPayment = () => {
    return (
        <div className="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 my-11">
            <div className="p-5">
                <div className="flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <h3 className="mt-2 text-center text-lg font-semibold text-gray-700 dark:text-white">
                    Payment Canceled
                </h3>
                <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-200">
                    Your payment has been successfully canceled. If this was a mistake, please try again or contact support.
                </p>
            </div>
        </div>
    );
}

export default CancelPayment;
