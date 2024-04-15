import React from 'react'
import MetaTags from '../components/MetaTags'
import BreadCrumb from '../components/BreadCrumb'
import { FaEnvelope, FaHome, FaInfo, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <div>
            <MetaTags title="Contact" />
            <BreadCrumb title="Contact" />
            <div className="contact-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.332179426478!2d-122.01155228864553!3d37.33464377198328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb596e9e188fd%3A0x3b0d8391510688f0!2sApple%20Park!5e0!3m2!1sen!2sin!4v1713112330523!5m2!1sen!2sin" height="450" className='border-0 w-100' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="map"></iframe>
                        </div>
                        <div className="col-12 mt-5">
                            <div className="contact-inner-wrapper d-flex justify-content-between">
                                <div>
                                    <h3 className="contact-title mb-4">Contact Us</h3>
                                    <form action="" className='d-flex flex-column gap-15'>
                                        <div>
                                            <input type="text" className="form-control" placeholder='Name' />
                                        </div>
                                        <div>
                                            <input type="email" className="form-control" placeholder='Email' />
                                        </div>
                                        <div>
                                            <input type="tel" className="form-control" placeholder='Phone Number' />
                                        </div>
                                        <div>
                                            <textarea name="" id="" className='w-100 form-control' cols="30" rows="5" placeholder='Comments' style={{ resize: "none" }}></textarea>
                                        </div>
                                        <div>
                                            <button className='button border-0 mt-3'>Submit</button>
                                        </div>
                                    </form>
                                </div>
                                <div>
                                    <h3 className="contact-title mb-4">Get In Touch With Us</h3>
                                    <div>
                                        <ul className='ps-0'>
                                            <li className='mb-3 d-flex gap-15 align-items-center'>
                                                <FaHome className='fs-5' />
                                                <address className='mb-0'>
                                                    31001 Legros Stream,
                                                    South Napoleonhaven,
                                                    TN 58747-1565
                                                </address>
                                            </li>
                                            <li className='mb-3 d-flex gap-15 align-items-center'>
                                                <FaPhoneAlt className='fs-5' />
                                                <a href="tel:+91 9533551144">+91 9533551144</a>
                                            </li>
                                            <li className='mb-3 d-flex gap-15 align-items-center'>
                                                <FaEnvelope className='fs-5' />
                                                <a href="mailto:harikrishnankhd@gmail.com">harikrishnankhd@gmail.com</a>
                                            </li>
                                            <li className='mb-3 d-flex gap-15 align-items-center'>
                                                <FaInfo className='fs-5' />
                                                <p className='mb-0'>Monday – Friday 10 AM – 8 PM</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
