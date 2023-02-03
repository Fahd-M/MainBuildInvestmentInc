import React from 'react';
import './Footer.scss';
import logo from "../../assets/images/MainBuildInvLogo.jpg";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer__content'>
            <div className='footer__company'>
                <Link to="/" className='footer__link'> 
                    <img className='footer__logo' alt='Company logo in footer' src={logo} />
                </Link>
                
                <div className='footer__info'>
                    <p className='footer__name'> Main Build Investments Inc.</p>
                    <span className='footer__address-one'> CA</span>
                    <span className='footer__address-two'> 442 Marf Avenue, Mississauga, {"\n"} ON L5G 1T3 </span>
                </div>
            </div>


            <div className='footer__contact'>
                <div className='footer__interact'>
                    <p className='footer__contact-title'> Contact </p>
                    <div className='footer__interact'>
                        <span className='footer__phone'> 1-800-710-2502</span>
                        <span className='footer__phone-alt'>925-367-0541</span>
                        <span className='footer__email'> mainbuildinv@gmail.com </span>
                    </div>
                </div>

                <div className='footer__hours'>
                    <p className='footer__hours-title'> Hours </p>
                    <div className='footer__days'>
                        <span className='footer__weekday'> Monday-Friday:{"\n"} 7:00 AM - 6:00 PM </span>
                        <span className='footer__weekend'> Saturday:{"\n"} 8:00 AM - 5:00 PM </span>
                    </div>

                </div>
            </div>

        </div>
        
    </footer>
  )
}

export default Footer