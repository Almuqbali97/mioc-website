import React from 'react';
import ReactDOM from 'react-dom';

const GeneralModal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <>
            <div className="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-sm z-40"></div>
            <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div className="bg-white rounded-lg shadow-lg p-4 relative max-w-md w-full">
                    <button
                        className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                        onClick={onClose}
                    >
                        &times;
                    </button>
                    {children}
                </div>
            </div>
        </>,
        document.body
    );
};

export default GeneralModal;
