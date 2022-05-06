import React from "react";
import logo from './img/flixlogo.png';
import { useNavigate } from "react-router-dom";


function SignIn() {

    const navigate = useNavigate();

  function handleClick() {
      navigate("/dashboard")
  }

    return (
    <div className="siginbody">
        <div className="homepage">

            <div className="logo">
                <img src={logo} alt="img"/>
            </div>

            <div className="homepage-content">
                <div className="form">
                    <form action="/dashboard" method="post">
                        <h1>Sign In</h1>
                        <div className="info">
                            <input className="email" type="email" placeholder="Email or phone number" id="email" required/> <br/>

                            <input className="email" type="password" placeholder="Password" id="pass" required/>

                        </div>

                        <div className="btn">
                            <button class="btn-primary" type="submit" onClick={handleClick}>Sign In</button>
                        </div>

                        <div className="help">
                            <div>
                                <input value="true" type="checkbox" /><label>Remember me</label>
                            </div>

                            <a href="https://www.netflix.com/dz-en/LoginHelp">Need Help ?</a>
                        </div>
                    </form>
                </div>

                <div className="fcbk">
                    <a href="https://facebook.com">
                        <img src="https://i.ibb.co/LrVMXNR/social-fb.png" alt="Facebook"/>
                    </a>
                    <p>Login with Facebook</p>
                </div>

                <div className="signup">
                    <p>New to Netflix ?</p>
                    <a href="https://www.netflix.com/dz-en/">Sign up now</a>
                </div>

                <div className="more">
                    <p>This page is protected by Google reCAPTCHA to ensure you're not a bot.<a href="#">Learn more.</a></p>
                </div>

            </div>

            <footer>
                
                <div class="ftr-content">
                    <div class="contact">
                        <a href="#">Quesions? Contact us.</a>
                    </div>
                    <div class="ftr">
                        <a href="#">Gift Card Terms</a>
                        <a href="#">Terms of Use</a>
                        <a href="#">Privacy Statement</a>
                    </div>
                    <div class="select">
                        <select>
                            <option>English</option>
                            <option>العربية</option>
                            <option>Français</option>
                            
                        </select>
                    </div>
                </div>
               
            </footer>

        </div>
    </div>
    )
}

export default SignIn;
