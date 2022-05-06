import React from "react";
import nflogo from './img/flixlogo.png';
import lang from './img/lang-selector.PNG';
import {useNavigate} from "react-router-dom";




function Signout() {

    const navigate = useNavigate();

    function logIn() {
        navigate("/")
    }



    return (
        <div className="signOut-body">
            <div id="signOut-page" >
                <div className="signout-header">
                    <img src={nflogo} alt="img"/>
                    
                    <a href="#" className="header-signin" onClick={logIn}>Sign In Now</a>
                </div>

                <div className="signout-main-body">
                    <div className="signout-main-body-content">
                        <div className="main-body-wrapper">
                            <h1>Leaving So Soon?</h1>
                            <p>Just so you know, you don't always need to sign out of Netflix. It's only necessary if you're on a shared or public computer.</p>
                            <p>You'll be redirected to Netflix.com.</p>
                            <button className="btnLogin" onClick={logIn}>Go Now</button>
                        </div>
                    </div>
                </div>

                <footer>
                    <div className="footer">
                        <div className="contact">
                            <a href="#">Quesions? Contact Us.</a>
                        </div>

                        <div class="ftr">
                            <a href="#">FAQ</a>
                            <a href="#">Cookie Preferences</a>
                            <a href="#">Help Center</a>
                            <a href="#">Corporate Information</a>
                            <a href="#">Term of Use</a>
                            <a href="#">Privacy</a>
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

export default Signout;