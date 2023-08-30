import React from 'react';
import './StayConnected.css';
import { FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa";

function StayConnected() {
    return (
        <>
            <div className='SignUpBox'>
            <div className='Class'>
                <div className='Explore'>
                    <h3 className='header'>Explore</h3>

                    <section className='column'>Home</section>
                    <section className='column'>Questions</section>
                    <section className='column'>Articles</section>
                    <section className='column'>Tutorials</section>
                </div>


                <div className='Support'>
                    <h3 className='header'>Support</h3>

                    <section className='column_1'>FAQs</section>
                    <section className='column_1'>Help</section>
                    <section className='column_1'>Contact us</section>


                </div>
                <div className='Connected'>
                    <h3 className='header'>Stay Connected</h3>
                    <section className='column_2'>
                        <FaYoutube />
                        <FaTwitter />
                        <FaFacebook />

                    </section>
                </div>

                </div>
                
                <div>
                    <p id='h'>DEV@Deakin 2023</p>
                </div>
                <div className='terms'>
                    <p >Privacy Policy</p>
                    <p>Terms</p>
                    <p>Code of Conduct</p>
                </div>
            </div>

        </>
    )
}
export default StayConnected;