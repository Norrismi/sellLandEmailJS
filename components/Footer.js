import React from 'react';
import { GrFacebook } from "react-icons/gr";

const Footer = () => {
    return (
        <footer className="flex flex-col justify-center items-center bg-black py-4 ">
            <div className="flex flex-col md:flex-row justify-center items-center mb-4 text-lg p-4">
                <div className="text-center md:mr-4 ">
                    <p className='text-gray-400 '>(123) 456-7890</p>
                </div>
                <div className="text-center md:ml-4">
                    <p className='text-gray-400'>SHNConsulting.email@gmail.com</p>
                </div>
            </div>
            <div>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <button className=''>
                        <GrFacebook className='text-salmon shadow-lg shadow-salmon' size={60} />
                    </button>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
