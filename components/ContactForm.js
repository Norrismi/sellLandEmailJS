"use client";

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import dynamic from 'next/dynamic'


const ContactForm = () => {
    const [isSubmitted, setSubmitted] = useState(false)
    const [emailForm, setEmailForm] = useState({
        name: "",
        phone: "",
        email: "",
        apn: "",
        state: "",
        county: "",
        message: "",

    });

    const HandleChange = (e) => {
        let { name, value } = e.target;
        setEmailForm({ ...emailForm, [name]: value });
    };

    const HandleChangeTextArea = (e) => {
        let { name, value } = e.target;
        setEmailForm({ ...emailForm, [name]: value });
    };

    const HandleSubmit = (e) => {
        e.preventDefault();



        // emailjs.send(process.env.NEXT_PUBLIC_SERVICE, process.env.NEXT_PUBLIC_TEMPLATE, emailForm, process.env.NEXT_PUBLIC_END)
        //     .then((response) => {
        //         console.log("SUCCESS!", response.status, response.text);
        //         setSubmitted(true)

        //     }, (error) => {
        //         console.log("FAILED...", error);
        //     })
    };


    return (
        <>
            {isSubmitted
                ? <div className='text-red-500 text-lg'>Success</div>
                :

                <div className="message" id="contact">

                    <form onSubmit={HandleSubmit} className="grid gap-4 grid-cols-1 md:grid-cols-2 text-gray-500 ">


                        <div className="col-span-2 sm:col-span-1">
                            <label htmlFor="Name" className="block text-white font-medium">Name</label>
                            <input
                                onChange={HandleChange}
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                            />
                        </div>

                        <div className="col-span-2 sm:col-span-1">
                            <label htmlFor="phone" className="block text-white font-medium">Phone</label>
                            <input
                                onChange={HandleChange}
                                type="text"
                                name="phone"
                                placeholder="Phone"
                                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                required
                            />
                        </div>

                        <div className="col-span-2">
                            <label htmlFor="email" className="block text-white font-medium">Email</label>
                            <input
                                onChange={HandleChange}
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                            />
                        </div>

                        <div className="col-span-2">
                            <label htmlFor="APN/ Parcel Number" className="block text-white font-medium">APN</label>
                            <input
                                onChange={HandleChange}
                                type="text"
                                name="apn"
                                placeholder="APN/ Parcel Number"
                                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                            />
                        </div>

                        <div className="col-span-2 sm:col-span-1">
                            <label htmlFor="state" className="block text-white font-medium">State</label>
                            <input
                                onChange={HandleChange}
                                type="text"
                                name="state"
                                placeholder="State"
                                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                            />
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <label htmlFor="county" className="block text-white font-medium">County</label>
                            <input
                                onChange={HandleChange}
                                type="text"
                                name="county"
                                placeholder="County"
                                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                            />
                        </div>

                        <div className="col-span-2">
                            <label htmlFor="message" className="block text-white font-medium">Message</label>
                            <textarea
                                onChange={HandleChangeTextArea}
                                name="message"
                                placeholder="Your Message..."
                                className="mt-1 p-2 border border-gray-300 rounded-md w-full "
                            />
                        </div>

                        <button type="submit" className="bg-green-500 col-span-2 text-white p-4 rounded-3xl">Submit</button>
                    </form>
                </div>
            }
        </>
    )
}

export default dynamic(() => Promise.resolve(ContactForm), { ssr: false })

