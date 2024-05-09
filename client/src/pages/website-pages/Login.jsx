import { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../components/common/Loading';
import AuthContext from '../../context/AuthProvider.jsx';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode'

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
            const response = await fetch('http://localhost:3000/user/login', {
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
        const decodedUserInfor = jwtDecode(authResponse.credential);
        const response = await fetch('http://localhost:3000/user/oauth/google/success', {
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
    }

    return (
        <div>
            <Link to={'/'}><button>Home</button></Link>
            <h1>Login page</h1>
            {isLoading ? <Loading /> :
                <form onSubmit={handleSubmit}>
                    <label>Email: </label>
                    <input type='email' name='email' value={loginForm.email} onChange={handleChange} required />
                    <label>Password: </label>
                    <input type='password' name='password' value={loginForm.password} onChange={handleChange} required />
                    <button type='submit'>Submit</button>
                </form>}
            <GoogleLogin width={"230px"} shape='pill'
                onSuccess={credentialResponse => {
                    handleGoogleAuthCallbackResponse(credentialResponse)
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
            />
            {/* <button onClick={handleLogoout}>google log out</button> */}
            {loginFetchResMsg && <p style={{ color: "black" }}>{loginFetchResMsg} </p>}

        </div>
    );
}

export default Login;
