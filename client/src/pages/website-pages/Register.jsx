import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../components/common/Loading';
import registerImg from '../../assets/images/registerImg.jpg'

const Register = () => {
    const navigateTo = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [registrationFetchResMsg, setRegistrationFetchResMsg] = useState(null);
    const [registrationForm, setRegistrationForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    function handleChange(e) {
        const { name, value } = e.target
        // console.log(name);
        setRegistrationForm((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            // Assuming you're making a POST request to submit the form data
            const response = await fetch('http://localhost:3000/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(registrationForm)
            });
            // Handle response as needed
            if (response.ok) {
                // Redirect after successful form submission
                const successRes = await response.json();
                setRegistrationFetchResMsg(successRes.message)
                // reset registration form
                setRegistrationForm({
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: ''
                })
                setIsLoading(false);
                // redircting to log in page, we could add a button to navigate to login page instead of auto redirection
                setTimeout(() => {
                    navigateTo('/login');
                }, 1200);
            } else {
                setIsLoading(false);
                const errRes = await response.json()
                setRegistrationFetchResMsg(errRes.message)
                console.log({ errorRes: errRes.message });
            }
        } catch (error) {
            setIsLoading(false);
            console.error('Error submitting form:', error);
        }
    };
    return (
        <div className="h-full bg-gray-100 dark:bg-gray-900">
            <div className="mx-auto">
                <div className="flex justify-center px-6 py-9">
                    <div className="w-full xl:w-3/4 lg:w-11/12 flex shadow-lg">
                        <div className="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover bg-center rounded-l-lg"
                            style={{ backgroundImage: `url(${registerImg})` }}>
                        </div>
                        <div className="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
                            <h3 className="py-4 text-2xl text-center text-gray-800 dark:text-white">Create an Account!</h3>
                            <form className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded" onSubmit={handleSubmit}>
                                <div className="mb-4 md:flex md:justify-between">
                                    <div className="mb-4 md:mr-2 md:mb-0">
                                        <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="firstName">
                                            First Name
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            type='text' name='firstName' value={registrationForm.firstName} onChange={handleChange} required
                                            placeholder="First Name"
                                        />
                                    </div>
                                    <div className="md:ml-2">
                                        <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="lastName">
                                            Last Name
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            type='text' name='lastName' value={registrationForm.lastName} onChange={handleChange} required
                                            placeholder="Last Name"
                                        />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="email">
                                        Email
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        type='email' name='email' value={registrationForm.email} onChange={handleChange} required
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="mb-4 md:flex md:justify-between">
                                    <div className="mb-4 md:mr-2 md:mb-0">
                                        <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="password">
                                            Password
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            type='password' name='password' value={registrationForm.password} onChange={handleChange} required
                                            placeholder="******************"
                                        />
                                    </div>
                                    <div className="md:ml-2">
                                        <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="c_password">
                                            Confirm Password
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="c_password"
                                            type="password"
                                            placeholder="******************"
                                        />
                                    </div>
                                </div>
                                <div className="mb-6 text-center">
                                    <button
                                        className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                                        type="submit"
                                    >
                                        Register Account
                                    </button>
                                </div>
                                <hr className="mb-6 border-t " />
                                <div className="text-center text-red-400 ">
                                    {registrationFetchResMsg && <p >{registrationFetchResMsg} </p>}
                                </div>
                                <div className="text-center ">
                                    <Link to={'/login'} className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                                        href="./index.html">
                                        Already have an account? Login!
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
