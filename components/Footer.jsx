import React from 'react'
import {AiFillInstagram, AiOutlineTwitter} from "react-icons/ai";
import {FaTelegramPlane} from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footer-container'>
            <p>2023 Chic Store All right reserved </p>
            <p className="icons">
                <AiFillInstagram/>
                <AiOutlineTwitter/>
                <FaTelegramPlane/>
            </p>
        </div>
    )
}

export default Footer
