import React from 'react'
import ContactForm from './ContactForm'
import { FaBeer } from "react-icons/fa";
import { AiOutlineSafety } from "react-icons/ai";
import { BsCashStack } from "react-icons/bs";
import { BsFileEarmarkText } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";



const ContactHeader = () => {
    return (
        <div className="flex-col-1">
            <div className="p-4 flex justify-around flex-col md:flex-row">
                <div className="content-left p-6">
                    <h1 className="text-6xl font-bold">Sell Your Land in <br /> South Carolina</h1>
                    <hr className='border-t-4 border-green-500 mt-4 w-1/3'/>
                    <p className='mt-8 mb-4 text-xl'>
                        Receive equitable and competitive cash proposals <br /> without incurring any consultation charges.
                    </p>
                    <ul className="list-disc text-lg ">
                        <div className='flex items-center '>
                            <BsPersonCircle size={30} className='text-green-500' />
                            <div className='m-4'>
                                Individualized assistance with no associated commissions
                            </div>
                        </div>

                        <div className='flex items-center '>
                            <BsFileEarmarkText size={30} className='text-green-500' />
                            <div className='m-4'>
                                We cover the expenses related to escrow and title fees
                            </div>
                        </div>

                        <div className='flex items-center '>
                            <BsCashStack size={30} className='text-green-500' />
                            <div className='m-4'>
                                Experience an equitable and swift ALL-CASH proposal
                            </div>
                        </div>

                        <div className='flex items-center '>
                            <AiOutlineSafety size={30} className='text-green-500' />
                            <div className='m-4'>
                                You have the choice to select your closing date
                            </div>
                        </div>

                    </ul>
                </div>
                <ContactForm />
            </div>
        </div>
    );
}

export default ContactHeader






