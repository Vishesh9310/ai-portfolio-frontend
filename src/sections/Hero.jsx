import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import Vishesh_Resume from '../assets/resume/Vishesh_Resume.pdf';

const words = ["BCA Undergraduate", "Problem Solver", "Open Source Enthusiast"];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);


  /* Typing effect */
  useEffect(() => {
    if (subIndex === words[index].length && !reverse) {
      setTimeout(() => setReverse(true), 1000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 60 : 120);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  /* Cursor blink */
  useEffect(() => {
    const i = setInterval(() => setBlink((p) => !p), 500);
    return () => clearInterval(i);
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = Vishesh_Resume;
    link.download = 'Vishesh_Resume.pdf';
    link.click();
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden px-4">
      
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[320px] md:w-[520px] h-[320px] md:h-[520px] bg-blue-600/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <span className="text-blue-500 font-mono tracking-widest uppercase text-sm mb-4 block">
          Available for hire
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Vishesh
          </span>
        </h1>

        <motion.p
          className="text-xl md:text-3xl font-semibold min-h-[2.5rem] mb-6 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {words[index].slice(0, subIndex)}
          {blink ? "|" : " "}
        </motion.p>

        <p className="text-slate-400 text-base md:text-xl max-w-2xl mx-auto mb-8">
          A <span className="text-cyan-200 font-semibold">Full Stack Developer</span> specializing in the MERN stack.
          I build scalable web apps with clean code and great UX.
        </p>

        <div className="flex justify-center gap-6 text-2xl mb-8">
          <a className='hover:text-slate-500' href="https://github.com/Vishesh9310" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a className='hover:text-sky-500' href="https://www.linkedin.com/in/vishesh-b8a2b72a3" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a className='hover:text-pink-500' href="https://www.instagram.com/sayme_vishesh/" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a className='hover:text-blue-500' href="https://twitter.com/Vishesh9310" target="_blank" rel="noreferrer"><FaTwitter /></a>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="border border-slate-400 rounded-2xl px-4 py-2 hover:border-white"
          >
            Let&apos;s Connect
          </Link>

          <button
            onClick={handleDownload}
            className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-2xl px-4 py-2 text-white"
          >
            Get Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
