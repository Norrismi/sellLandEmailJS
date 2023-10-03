import React from 'react'
import { BsCheckLg } from "react-icons/bs";
import { Bs1CircleFill } from "react-icons/bs";
import { Bs2Circle } from "react-icons/bs";
import { Bs3CircleFill } from "react-icons/bs";
import { Bs4Circle } from "react-icons/bs";




const Process = () => {
    return (
        <div className="bg-gray-200 min-h-screen">
            <header className=" py-4 text-white text-center">
                <h1 className="text-4xl text-green-500 m-10">The Land Selling Process in 4 Easy Steps</h1>
            </header>

            <div className="container mx-auto p-4">
                <div className="flex justify-between text-black">
                    <div className="w-1/4 bg-white p-4 m-2">
                        <div className=" m-4 text-green-500">
                            <Bs1CircleFill size={50} />
                        </div>
                        <div className='text-xl mb-4'>Make Contact With Us</div>

                        <ul className='text-black'>
                            <div className='flex items-center '>
                                <div className="text-green-500">
                                    <BsCheckLg size={20} />
                                </div>
                                <li className='mb-2 ml-2'>Fill out our Contact Form</li>
                            </div>
                            <div className="flex items-center">
                                <BsCheckLg size={20} />
                                <li className='mb-2 ml-2'>Alternatively, call us at 602.833.1236</li>
                            </div>
                            <div className="flex items-center">
                                <BsCheckLg size={20} />
                                <li className='mb-2 ml-2'>A representative will contact you</li>
                            </div>
                        </ul>

                    </div>
                    <div className="w-1/4 bg-white p-4 m-2">
                        <div className=" m-4 text-green-500">
                            <Bs2Circle size={50} />
                        </div>
                        <div className='text-xl mb-4'>Consultation</div>


                        <ul className='text-black'>
                            <div className="flex ">
                                <div className="w-[20px] mt-1 ">
                                    <BsCheckLg size={20} />
                                </div>
                                <li className='mb-4 ml-2'>Receive a call from a customer care representative.</li>
                            </div>

                            <div className="flex">
                                <div className="w-[20px] mt-1">
                                    <BsCheckLg size={20} />
                                </div>
                                <li className='mb-4 ml-2'>Discuss the details of your land during the call.</li>
                            </div>
                            <div className="flex">
                                <div className="w-[20px] mt-1">
                                    <BsCheckLg size={20} />
                                </div>
                                <li className='mb-4 ml-2'>Get presented with ideal solutions for maximizing your land's cash offer.</li>
                            </div>
                        </ul>
                    </div>
                    <div className="w-1/4 bg-white p-4 m-2">
                        <div className=" m-4 text-green-500">
                            <Bs3CircleFill size={50} />
                        </div>
                        <div className='text-xl mb-4'>Get You Cash Offer</div>
                        <ul className='text-black'>
                            <div className="flex">
                                <div className="w-[20px] mt-1">
                                    <BsCheckLg size={20} />
                                </div>
                                <li className='mb-2 ml-2'>Following the consultation, we'll schedule a visit to your land.</li>
                            </div>
                            <div className="flex">
                                <div className="w-[20px] mt-1">
                                    <BsCheckLg size={20} />
                                </div>
                                <li className='mb-2 ml-2'>We'll work together to come up with the best plan for selling your land.</li>
                            </div>
                            <div className="flex">
                                <div className="w-[20px] mt-1">
                                    <BsCheckLg size={20} />
                                </div>
                                <li className='mb-2 ml-2'>These visits help us figure out the best ways to sell your land just as it is.</li>
                            </div>
                            <div className="flex">
                                <div className="w-[20px] mt-1">
                                    <BsCheckLg size={20} />
                                </div>
                                <li className='mb-2 ml-2'>Often, immediate cash offers can be made on the spot after evaluating the land.</li>
                            </div>
                        </ul>
                    </div>
                    <div className="w-1/4 bg-white p-4 m-2">
                        <div className=" m-4 text-green-500">
                            <Bs4Circle size={50} />
                        </div>
                        <div className='text-xl mb-4'>Get MONEY for Your Land</div>
                        <ul className='text-black'>
                            <div className="flex">
                                <div className="w-[20px] mt-1">
                                    <BsCheckLg size={20} />
                                </div>
                                <li className='mb-2 ml-2'>If you accept our offer, everyone involved will sign a contract.</li>
                            </div>
                            <div className="flex">
                                <div className="w-[20px] mt-1">
                                    <BsCheckLg size={20} />
                                </div>
                                <li className='mb-2 ml-2'>You'll receive full payment within 30 days or even sooner.</li>
                            </div>
                            <div className="flex">
                                <div className="w-[20px] mt-1">
                                    <BsCheckLg size={20} />
                                </div>
                                <li className='mb-2 ml-2'>We won't just vanish after making the offer; we'll stay in touch with you.</li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Process