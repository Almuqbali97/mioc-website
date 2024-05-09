import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../components/common/Loading';

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
        <div>
            <Link to={'/'}><button>Home</button></Link>
            <h1>Register page</h1>
            {isLoading ? <Loading /> :
                <form onSubmit={handleSubmit}>
                    <label>First name: </label>
                    <input type='text' name='firstName' value={registrationForm.firstName} onChange={handleChange} required />
                    <label>Last name: </label>
                    <input type='text' name='lastName' value={registrationForm.lastName} onChange={handleChange} required />
                    <label>Email: </label>
                    <input type='email' name='email' value={registrationForm.email} onChange={handleChange} required />
                    <label>Password: </label>
                    <input type='password' name='password' value={registrationForm.password} onChange={handleChange} required />
                    <button type='submit'>Submit</button>
                </form>}
            {registrationFetchResMsg && <p style={{ color: "black" }}>{registrationFetchResMsg} </p>}

        </div>
    );
}

export default Register;
