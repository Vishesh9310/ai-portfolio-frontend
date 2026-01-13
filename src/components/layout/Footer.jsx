import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {


  return (
    <footer className="footer px-6 py-10">
      {/* Heading */}
      <h1 className="text-center font-bold text-2xl md:text-3xl bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 text-transparent bg-clip-text">Let's collaborate — feel free to reach out!</h1>
      <hr className="h-0.5 border-0 rounded bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 my-10" />

      {/* Content Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
        {/* About Me */}
        <ul>
          <li className="text-lg pb-3 font-semibold text-cyan-400">About Me</li>
          <li>Full-Stack Developer</li>
          <li>Building responsive, high-performance web apps.</li>
        </ul>


        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 inline-block text-transparent bg-clip-text">Contact</h3>
          <ul className="text-sm space-y-1">
            <li>Phone: +91 9310365061</li>
            <li>Email:{' '}
              <a href="mailto:vk866797@gmail.com" target="_blank" rel="noreferrer" className="">  vk866797@gmail.com</a>
            </li>
            <li>Location: India / Remote-friendly</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 inline-block text-transparent bg-clip-text">Social Media / Developer Links</h3>
          <div className="flex gap-5 mt-2">
            <a href="https://github.com/Vishesh9310" className='text-3xl' target="_blank" rel="noreferrer"><FaGithub /> </a>
            <a href="https://www.linkedin.com/in/vishesh-b8a2b72a3" className='text-3xl bg-white rounded-md text-blue-500' target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://www.instagram.com/sayme_vishesh/" className='text-3xl text-pink-500' target="_blank" rel="noreferrer"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 text-center text-xs text-gray-500 border-t border-gray-700 pt-4">
        © 2025 Vishesh. All rights reserved. | Designed & built by Vishesh.
      </div>
    </footer>
  );
};

export default Footer;