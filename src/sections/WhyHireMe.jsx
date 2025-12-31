import React from 'react';
import intro from '../assets/intro/intro.mp4'
import { Link } from 'react-router-dom';

const WhyHireMe = () => {
    return (
        <div className=" min-h-fit py-50 px-4">
            <div className="max-w-5xl mx-auto">

                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-2">
                        The Value Proposition
                    </h2>
                    <h1 className="text-4xl md:text-6xl font-black leading-tight">
                        Why Should You <span className="text-indigo-600 underline decoration-indigo-200 underline-offset-8">Hire Me?</span>
                    </h1>
                    <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
                        Skillsets can be taught, but mindset is inherent. Watch the video below to see how I think, communicate, and solve problems.
                    </p>
                </div>

                {/* Creative Card Container */}
                <div className="relative group">

                    {/* Decorative background "cards" to create depth */}
                    <div className="absolute -inset-4 bg-indigo-100 rounded-[3rem] rotate-1 scale-95 opacity-50 transition-transform group-hover:rotate-2"></div>
                    <div className="absolute -inset-4 bg-blue-100 rounded-[3rem] -rotate-1 scale-95 opacity-50 transition-transform group-hover:-rotate-2"></div>

                    {/* Main Content Card */}
                    <div className="relative bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-slate-100">
                        <div className="flex flex-col lg:flex-row">

                            {/* Left Side: Video Player */}
                            <div className="lg:w-3/5 p-4 md:p-8 bg-slate-900">
                                <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-inner">
                                    <video
                                        className="w-full h-full object-cover"
                                        controls
                                        playsInline
                                        preload="auto"
                                        poster="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200"
                                    >
                                        <source src={intro} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>

                            {/* Right Side: Quick Highlights */}
                            <div className="lg:w-2/5 p-8 md:p-12 flex flex-col justify-center bg-white">
                                <h3 className="text-2xl font-bold text-slate-900 mb-6">Beyond the Code</h3>

                                <ul className="space-y-6">
                                    <li className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">1</div>
                                        <div>
                                            <h4 className="font-bold text-slate-800">Clear Communication</h4>
                                            <p className="text-sm text-slate-500 leading-snug">I simplify complex technical concepts for any audience.</p>
                                        </div>
                                    </li>

                                    <li className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-sm">2</div>
                                        <div>
                                            <h4 className="font-bold text-slate-800">Product Ownership</h4>
                                            <p className="text-sm text-slate-500 leading-snug">I treat every project as if it were my own company.</p>
                                        </div>
                                    </li>

                                    <li className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-sm">3</div>
                                        <div>
                                            <h4 className="font-bold text-slate-800">Adaptability</h4>
                                            <p className="text-sm text-slate-500 leading-snug">I thrive in fast-paced environments and new tech stacks.</p>
                                        </div>
                                    </li>
                                </ul>

                                <Link to='/project' className="mt-10 w-full text-center card text-white py-4 rounded-xl font-bold hover:bg-indigo-600 transition-colors duration-300">
                                    Let's Discuss Your Project
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Bottom Feedback Tag */}
                <div className="mt-12 text-center flex flex-col items-center gap-2">
                    <p className="text-slate-400 text-sm font-medium uppercase tracking-widest">Featured In My Portfolio</p>
                    <div className="h-1 w-12 bg-indigo-400 rounded-full"></div>
                </div>

            </div>
        </div>
    );
};

export default WhyHireMe;