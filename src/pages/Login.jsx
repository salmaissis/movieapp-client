import { useState } from 'react';
import './login.scss';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [message, setMessage] = useState('email or password invalid');

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/register');
    }

    const handleLogin = (e) => {
        e.preventDefault();

        fetch('http://localhost:7000/login', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({username, email, password})
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            // Do something with the data
            setData(data);
            console.log(data);
            setMessage('you are logged in');
            
            data.length == 0 ? alert(message) : console.log('in');
        })
        .catch(error => {
            // Handle errors
            console.log("error ",error);

            setError(true);
        });
        
    }
    
    return (
        <div className="c">
            <h1 className="form-title">Registration</h1>
            <form action="#">
                <div className="main-user-info-login">
                <div className="user-input-box">
                    <label htmlFor="username">Username</label>
                    <input type="text"
                            id="username"
                            name="username"
                            placeholder="Enter Username"
                            onChange={(e)=>{ setUsername(e.target.value)}}/>
                </div>
                <div className="user-input-box-login">
                    <label htmlFor="email">Email</label>
                    <input type="email"
                            id="email"
                            name="email"
                            placeholder="Enter Email"
                            onChange={(e)=>{ setEmail(e.target.value)}}/>
                </div>
                <div className="user-input-box">
                    <label htmlFor="password">Password</label>
                    <input type="password"
                            id="password"
                            name="password"
                            placeholder="Enter Password"
                            onChange={(e)=>{ setPassword(e.target.value)}}/>
                </div>
                </div>
                <div className="form-submit-btn">
                <input type="submit" value="login" onClick={handleLogin}/>
                </div>
            </form>
            <div className="link">Not yet signed up? <a onClick={handleClick}>Signup now</a></div>
        </div>
    )
}
export default Login;
