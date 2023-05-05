import { useState } from 'react';
import './login.scss';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const [signupStates, setSignupStates] = useState({
        photo: null,
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        role: "user"
    });

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/login');
    }

    const handleRegister = (e) => {
        e.preventDefault();
        const register = new FormData();
        Object.keys(signupStates).map(field => register.append(field, signupStates[field]));
        console.log([...register]);
        fetch('http://localhost:7000/register', {
            method: 'POST',
            body: register
        });
    }
    
    return (
        <div className="c">
            <h1 className="form-title">Registration</h1>
            <form action="#">
                <div className="main-user-info">
                <div className="user-input-box">
                    <label htmlFor="fullName">First Name</label>
                    <input type="text"
                            name="firstName"
                            placeholder="Enter First Name"
                            onChange={(e)=>{ setSignupStates({...signupStates, firstName: e.target.value})}}/>
                </div>
                <div className="user-input-box">
                    <label htmlFor="fullName">Last Name</label>
                    <input type="text"
                            name="lastName"
                            placeholder="Enter Last Name"
                            onChange={(e)=>{ setSignupStates({...signupStates, lastName: e.target.value})}}/>
                </div>
                <div className="user-input-box">
                    <label htmlFor="username">Username</label>
                    <input type="text"
                            id="username"
                            name="username"
                            placeholder="Enter Username"
                            onChange={(e)=>{ setSignupStates({...signupStates, username: e.target.value})}}/>
                </div>
                <div className="user-input-box">
                    <label htmlFor="email">Email</label>
                    <input type="email"
                            id="email"
                            name="email"
                            placeholder="Enter Email"
                            onChange={(e)=>{ setSignupStates({...signupStates, email: e.target.value})}}/>
                </div>
                <div className="user-input-box">
                    <label htmlFor="password">Password</label>
                    <input type="password"
                            id="password"
                            name="password"
                            placeholder="Enter Password"
                            onChange={(e)=>{ setSignupStates({...signupStates, password: e.target.value})}}/>
                </div>
                <div className="user-input-box">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Confirm Password"/>
                </div>
                <div className="user-input-photo">
                    <label htmlFor="photo">Profile Picture</label>
                    <input type="file"
                            name="photo"
                            placeholder="Select A Profile"
                            onChange={(e)=>{ setSignupStates({...signupStates, photo: e.target.files[0]})}}/>
                </div>
                </div>
                <div className="form-submit-btn">
                <input type="submit" value="Register" onClick={handleRegister}/>
                </div>
            </form>
            <div className="link">already have an account? <a onClick={handleClick}>login</a></div>
        </div>
    )
}
export default Register;
