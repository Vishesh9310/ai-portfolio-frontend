import React from 'react';
import { NavLink } from 'react-router-dom';

import crshirt from '../assets/achievement/cr/ClassRepresentative.jpeg';
import hackathonimg1 from '../assets/achievement/hackathon/IMG20250916184234.jpg';
import techniaimg3 from '../assets/achievement/Technia2k25/IMG20250417164324.jpg';
import techniaimg4 from '../assets/achievement/Technia2k25/IMG20250420082944.jpg';
import techniaimg6 from '../assets/achievement/Technia2k25/techovation.jpg';
import techniaimg7 from '../assets/achievement/Technia2k25/techovationtrophy.jpg';
import tradefairimg4 from '../assets/achievement/tradefair/Screenshot_2025-09-27-12-53-56-34_439a3fec0400f8974d35eed09a31f914.jpg';
import tv9img1 from '../assets/achievement/tv9/IMG20250328151127.jpg';
import volunteerimg1 from '../assets/achievement/volunteer/volunteer.jpeg';

const Achievements = () => {
    const colleageAchievementData = [
        { id: 1, name: "Class Representative", img: crshirt, desc: "", date: "Dec-2024" },
        { id: 2, name: "Hackathon", img: hackathonimg1, desc: "", date: "" },
        { id: 3, name: "Technia", img: techniaimg3, desc: "", date: "" },
        { id: 4, name: "Technia", img: techniaimg4, desc: "", date: "" },
        { id: 5, name: "Technia", img: techniaimg6, desc: "", date: "" },
        { id: 6, name: "Technia", img: techniaimg7, desc: "", date: "" },
        { id: 7, name: "Tradefair", img: tradefairimg4, desc: "", date: "" },
        { id: 8, name: "TV9", img: tv9img1, desc: "", date: "" },
        { id: 9, name: "Volunteer", img: volunteerimg1, desc: "", date: "" },
    ]

    return (
        <section>
            {/* Hero Section */}
            <div className="certificates-body h-screen flex items-center justify-center px-4 sm:px-8">
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-9xl tracking-[0.1em] orbitron text-center">
                    ACHIEVEMENTS
                </h1>
            </div>

            {/* College Achievements */}
            <div className="achievement-bg h-fit p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24 space-y-16">
                <h1 className="text-center text-3xl sm:text-4xl md:text-5xl tracking-[0.1em] orbitron sm:my-[10%]">
                    College Achievements
                </h1>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 md:gap-16 px-0 sm:px-4 md:px-8">
                    {colleageAchievementData.map((item, index) => (
                        <li
                            key={index}
                            className="w-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:bg-gradient-to-l p-0.5 rounded-2xl shadow-lg shadow-purple-500 hover:shadow-cyan-500"
                        >
                            <div className="certificate-main h-full w-full rounded-2xl overflow-hidden">
                                <NavLink to={`/achievement/${item.id}`} className="block">
                                    <img
                                        src={item.img}
                                        alt={`Achievement ${index + 1}`}
                                        className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-t-2xl"
                                    />
                                </NavLink>
                                <div className="p-4 sm:p-5 space-y-2">
                                    <p className="tracking-wider text-sm sm:text-base">{item.name}</p>
                                    <h2 className="orbitron text-sm sm:text-base">{item.date}</h2>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>


        </section>
    );
};

export default Achievements;