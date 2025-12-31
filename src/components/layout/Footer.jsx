import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="footer px-4">
            <h1 className="text-center py-8 text-xl sm:text-2xl text-purple-500">
                Let's Collaborate – Feel free to reach out!
            </h1>

            <hr className="border-cyan-700 mx-4 sm:mx-20" />

            <div className="px-[10%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8 text-center sm:text-left">
                
                {/* About */}
                <ul>
                    <li className="text-lg pb-3 font-semibold text-cyan-400">About Me</li>
                    <li>Full-Stack Developer</li>
                    <li>Building responsive, high-performance web apps.</li>
                </ul>

                {/* Contact */}
                <ul>
                    <li className="text-lg pb-3 font-semibold text-cyan-400">Contact</li>
                    <li>Phone: 9310365061</li>
                    <li>Email: vk866797@gmail.com</li>
                    <li>Location: India / Remote-friendly</li>
                </ul>

                {/* Social */}
                <ul>
                    <li className="text-lg pb-3 font-semibold text-cyan-400">
                        Social / Developer Links
                    </li>
                    <li className="flex justify-center sm:justify-start gap-5 text-3xl">
                        <a href="https://github.com/Vishesh9310" target="_blank" rel="noreferrer">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/vishesh-b8a2b72a3" target="_blank" rel="noreferrer"
                           className="bg-white rounded-md text-blue-500 p-1">
                            <FaLinkedin />
                        </a>
                        <a href="https://www.instagram.com/sayme_vishesh/" target="_blank" rel="noreferrer"
                           className="text-pink-500">
                            <FaInstagram />
                        </a>
                    </li>
                </ul>
            </div>

            <p className="text-center text-sm sm:text-base pb-8">
                © 2025 Vishesh. All rights reserved.
            </p>
        </footer>
    )
}

export default Footer
