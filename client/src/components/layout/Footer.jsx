import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <h1 className='text-center py-5 text-2xl text-purple-400'>Let's Collaborate - Feel free to reach out!</h1>
            <hr className='text-cyan-700 mx-20' />
            <div className='flex justify-evenly'>
                <ul className='p-5'>
                    <li className='text-lg pb-3 font-semibold text-cyan-400'>About Me</li>
                    <li>Full-Stack Developer </li>
                    <li>building responsive, high-performance web apps.</li>
                </ul>
                <ul className='p-5'>
                    <li className='text-lg pb-3 font-semibold text-cyan-400'>Contact</li>
                    <li>Phone: 9310365061</li>
                    <li>Email: vk866797@gmail.com</li>
                    <li>Location: India / Remote-friendly</li>
                </ul>
                <ul className='p-5'>
                    <li className='text-lg pb-3 font-semibold text-cyan-400'>Social Media/ Developer Links</li>
                    <li className='flex justify-evenly'>
                        <a href="https://github.com/Vishesh9310" className='text-3xl' target="_blank" rel="noreferrer"><FaGithub /> </a>
                        <a href="https://www.linkedin.com/in/vishesh-b8a2b72a3" className='text-3xl bg-white rounded-md text-blue-500' target="_blank" rel="noreferrer"><FaLinkedin /></a>
                        <a href="https://www.instagram.com/sayme_vishesh/" className='text-3xl text-pink-500' target="_blank" rel="noreferrer"><FaInstagram /></a>

                    </li>
                </ul>
            </div>
            <p className='text-center pt-5 pb-10'>© 2025 Vishesh. All rights reserved. | Designed & built by Vishesh.</p>
        </div>
    )
}

export default Footer