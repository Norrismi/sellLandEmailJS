import React from 'react'
import ContactForm from './ContactForm'
import { FaBeer } from "react-icons/fa";
import { AiOutlineSafety } from "react-icons/ai";
import { BsCashStack } from "react-icons/bs";
import { BsFileEarmarkText } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";




const ContactHeader = () => {
    return (
        <div className="bg-cover bg-center bg-opacity-25 h-screen"
            style={{ backgroundImage: `url('./assets/Fence.jpeg')` }}
        >
            <div className="flex-col-1">
                <div className="p-4 flex justify-around flex-col md:flex-row">
                    <div className="content-left p-6">

                        <div className=" bg-navy shadow-2xl shadow-black p-8 m-2 rounded-lg">
                            <h1 className="text-6xl text-custom-blue font-bold">Sell Your Land in <br /> South Carolina</h1>
                            <hr className='border-t-4 border-salmon mt-4 w-1/3' />
                            <p className='mt-8 mb-4 text-xl'>
                                Receive equitable and competitive cash proposals <br /> without incurring any consultation charges.
                            </p>
                            <ul className="list-disc text-lg ">
                                <div className='flex items-center '>
                                    <BsPersonCircle size={30} className='text-salmon' />
                                    <div className='m-4'>
                                        Individualized assistance with no associated commissions
                                    </div>
                                </div>

                                <div className='flex items-center '>
                                    <BsFileEarmarkText size={30} className='text-salmon' />
                                    <div className='m-4'>
                                        We cover the expenses related to escrow and title fees
                                    </div>
                                </div>

                                <div className='flex items-center '>
                                    <BsCashStack size={30} className='text-salmon' />
                                    <div className='m-4'>
                                        Experience an equitable and swift ALL-CASH proposal
                                    </div>
                                </div>

                                <div className='flex items-center '>
                                    <AiOutlineSafety size={30} className='text-salmon' />
                                    <div className='m-4'>
                                        You have the choice to select your closing date
                                    </div>
                                </div>

                            </ul>
                        </div>
                    </div>
                    <div className=" bg-navy shadow-2xl shadow-black p-8 mt-7 rounded-lg">

                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactHeader






