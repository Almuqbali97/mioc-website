import React from 'react';

const TextInput = ({ }) => {
    return (
        <>
            <label for="first_name" className="block text-gray-700 dark:text-white mb-1">First Name</label>
            <input type="text" id="first_name" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" required />
        </>
    );
}

export default TextInput;
