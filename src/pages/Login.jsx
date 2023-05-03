import './login.scss';

const Login = () => {
    
    return (
        <div class="c">
            <h1 class="form-title">Registration</h1>
            <form action="#">
                <div class="main-user-info">
                <div class="user-input-box">
                    <label for="fullName">Full Name</label>
                    <input type="text"
                            id="fullName"
                            name="fullName"
                            placeholder="Enter Full Name"/>
                </div>
                <div class="user-input-box">
                    <label for="username">Username</label>
                    <input type="text"
                            id="username"
                            name="username"
                            placeholder="Enter Username"/>
                </div>
                <div class="user-input-box">
                    <label for="email">Email</label>
                    <input type="email"
                            id="email"
                            name="email"
                            placeholder="Enter Email"/>
                </div>
                <div class="user-input-box">
                    <label for="phoneNumber">Phone Number</label>
                    <input type="text"
                            id="phoneNumber"
                            name="phoneNumber"
                            placeholder="Enter Phone Number"/>
                </div>
                <div class="user-input-box">
                    <label for="password">Password</label>
                    <input type="password"
                            id="password"
                            name="password"
                            placeholder="Enter Password"/>
                </div>
                <div class="user-input-box">
                    <label for="confirmPassword">Confirm Password</label>
                    <input type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Confirm Password"/>
                </div>
                </div>
                <div class="form-submit-btn">
                <input type="submit" value="Register" />
                </div>
            </form>
        </div>
    )
}
export default Login;
