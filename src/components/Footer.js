import React from 'react'
import '../components/styles/Footer.css'
import {FaFacebook,FaTwitter,FaInstagram} from 'react-icons/fa'

const Footer = () => {
    return (
        <footer>
            <div className="footer_container">
                <div className="most_demand">
                    <h4>Most Demand Talent</h4>
                <hr />
                    <p>Mobile App Development</p>
                    <p>Mobile App Development</p>
                    <p>Mobile App Development</p>
                    <p>Mobile App Development</p>
                </div>

                <div className="about">
                    <h4>About</h4>
                    <hr />
                    <p>About Us</p>
                    <p>How We Work</p>
                </div>
                <div className="contact_details">
                    <h4>Contact</h4>
                    <hr />
                    <p>Contact us</p>
                </div>
                <div className="social">
                    <h4>Social</h4>
                    <hr />
                    <div className="socail_icons">
                        <FaFacebook />
                        <FaInstagram />
                        <FaTwitter />
                    </div>
                </div>
            </div>
            <div className="footer_last">

            </div>
        </footer>
    )
}

export default Footer
