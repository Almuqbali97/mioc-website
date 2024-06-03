import { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../components/common/Loading';
import AuthContext from '../../context/AuthProvider.jsx';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode'
import ImageBgContainer from '../../components/common/ImageBgContainer.jsx';
import loginImg from '../../assets/images/loginImg.avif'
import Loading2 from '../../components/common/Loading2.jsx';


const Login = () => {
    const navigateTo = useNavigate();
    const { setUser } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);
    const [loginFetchResMsg, setLoginFetchMsg] = useState(null);
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: ''
    })

    function handleChange(e) {
        const { name, value } = e.target
        setLoginForm((prev) => {
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
            const response = await fetch(import.meta.env.VITE_API_URL + '/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginForm),
                credentials: 'include',
            });
            // Handle response as needed
            if (response.ok) {
                // Redirect after successful form submission
                const successRes = await response.json();

                setLoginFetchMsg('Logged in successfully')
                // we can use this to not store db user ID in the localstorage
                const { _id, ...userData } = successRes.user;
                setUser({ ...userData });
                // reset login form
                setLoginForm({
                    email: '',
                    password: ''
                })
                setIsLoading(false);
                // redircting to log in page, we could add a button to navigate to login page instead of auto redirection
                setTimeout(() => {
                    navigateTo('/');
                }, 1200);
            } else {
                setIsLoading(false);
                const errRes = await response.json()
                setLoginFetchMsg(errRes.message)
            }
        } catch (error) {
            setIsLoading(false);
            console.error('Error submitting form:', error);
        }
    };

    async function handleGoogleAuthCallbackResponse(authResponse) {
        setIsLoading(true)
        const decodedUserInfor = jwtDecode(authResponse.credential);
        const response = await fetch(import.meta.env.VITE_API_URL + '/user/oauth/google/success', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(decodedUserInfor),
            credentials: 'include',
        });
        if (response.ok) {
            // Redirect after successful form submission
            const successRes = await response.json();
            setIsLoading(false)
            setLoginFetchMsg('Logged in successfully')
            // we can use this to not store db user ID in the localstorage
            const { _id, ...userData } = successRes.user;
            setUser({ ...userData });
            // reset login form
            setLoginForm({
                email: '',
                password: ''
            })
            setIsLoading(false);
            // redircting to log in page, we could add a button to navigate to login page instead of auto redirection
            setTimeout(() => {
                navigateTo('/');
            }, 3000);
        } else {
            setIsLoading(false);
            const errRes = await response.json()
            setLoginFetchMsg(errRes.message)
        }
    }

    return (
        <ImageBgContainer bgURL={loginImg}>
            <div className="bg-white w-full md:max-w-md rounded-lg lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-[80vh] px-6 lg:px-16 xl:px-12 flex items-center justify-center">

                <div className="w-full h-100">


                    <h1 className="text-xl md:text-2xl font-bold leading-tight">Log in to your account</h1>

                    <form className="mt-6" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-gray-700">Email Address</label>
                            <input type='email' name='email' value={loginForm.email} onChange={handleChange} placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-primary_blue focus:bg-white focus:outline-none" autoFocus required />
                        </div>

                        <div className="mt-4">
                            <label className="block text-gray-700">Password</label>
                            <input type='password' name='password' value={loginForm.password} onChange={handleChange} placeholder="Enter Password" minLength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-primary_blue focus:bg-white focus:outline-none" required />
                        </div>

                        {/* <div className="text-right mt-2">
                            <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
                        </div> */}

                        <button type="submit" className="w-full block bg-primary_blue hover:bg-blue-900 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6">Log In</button>
                    </form>

                    <hr className="my-6 border-gray-300 w-full" />

                    <div className="flex items-center justify-center">
                        <GoogleLogin size='large' shape='square'
                            onSuccess={credentialResponse => {
                                handleGoogleAuthCallbackResponse(credentialResponse)
                            }}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                        />
                    </div>
                    <div className='text-center mt-3 flex justify-center'>
                        {isLoading && <Loading2 loadingMsg={'logging in ...'} />}
                        {loginFetchResMsg && <p style={{ color: "black" }}>{loginFetchResMsg} </p>}
                    </div>
                    <p className="mt-8">Need an account? <Link to={'/register'} className="text-primary_blue hover:text-blue-700 font-semibold">Create an
                        account</Link>
                    </p>
                </div>
            </div>
        </ImageBgContainer>
    );
}

export default Login;
