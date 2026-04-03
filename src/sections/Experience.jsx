import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
    // Experience data
    const experience = [
        {
            role: "SEO Intern",
            company: "Tech World Digital Solutions",
            duration: "Jan 2026 - Present",
            description: "Assisted in SEO tasks including keyword research, on-page and off-page optimization, Google Analytics, traffic analysis, and improving website performance using tools",
        },
        {
            role: "Java Developer Intern",
            company: "Elevate Labs",
            duration: "June 2025 - July 2025",
            description: "Worked on backend tasks with Java, JDBC, and SQL; improved problem-solving and development skills.",
        },
        {
            role: "Software Engineer",
            company: "Accenture (Forage)",
            duration: "June 2025",
            description: "Gained exposure to architecture, security, agile methodology, testing, and software development practices.",
        },
        {
            role: "Full Stack Developer (Freelance)",
            company: "Independent Projects",
            duration: "2024 - Present",
            description: "Built MERN stack applications with React, Node.js, Express.js, MongoDB; created REST APIs, deployed apps with Vercle, Railways.",
        },
    ];

    // Education data
    const education = [
        {
            degree: "BCA (Computer Applications)",
            institution: "Avviare Educational Hub",
            duration: "2023 - Current",
            details: "Studying software development, programming, web technologies, databases, and real-world projects.",
        },
        {
            degree: "Self-Learning & Skill Development",
            institution: "Independent Learning",
            duration: "2021 - 2023",
            details: "Focused on programming fundamentals with Java & JavaScript and hands-on projects before BCA.",
        },
        {
            degree: "12th (PCM)",
            institution: "Shri Krishna Inter College",
            duration: "2019 - 2021",
            details: "Completed 12th grade with PCM, developing logical and analytical skills.",
        },
        {
            degree: "10th",
            institution: "Shri Krishna Inter College",
            duration: "2017 - 2019",
            details: "Built a solid academic foundation, preparing for higher studies in science and technology.",
        },
    ];


    return (
        <div id="educations" className="min-h-fit py-12 px-6 skills-body">
            {/* Header */}
            <div className="flex justify-between items-center max-w-4xl mx-auto mb-12">
                <h1 className="experience-text text-3xl font-bold orbitron lg:text-5xl">
                    Experience & Education
                </h1>
            </div>

            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
                {/* Experience Timeline */}
                <div>
                    <h2 className="text-2xl font-semibold mb-6 experience-text orbitron ">
                        Work Experience
                    </h2>
                    <div className="space-y-8 border-l-2 border-purple-400 pl-6">
                        {experience.map((exp, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.2 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="flex h-fit items-center">
                                    <span className=" w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></span>
                                    <h3 className="pl-2 text-lg font-semibold orbitron italic experience-text">
                                        {exp.role}
                                    </h3>
                                </div>
                                <p className=" text-sm">
                                    {exp.company} | {exp.duration}
                                </p>
                                <p className="mt-2 experience-text">
                                    {exp.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Education */}
                <div>
                    <h2 className="text-2xl font-semibold mb-6 orbitron experience-text">
                        Education
                    </h2>
                    <div className="space-y-8 border-l-2 border-cyan-400 pl-6">
                        {education.map((edu, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.2 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="flex h-fit items-center">
                                    <span className=" w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></span>
                                    <h3 className="pl-2 text-lg font-semibold orbitron italic experience-text">
                                        {edu.degree}
                                    </h3>
                                </div>
                                <p className="experience-text text-sm">
                                    {edu.institution} | {edu.duration}
                                </p>
                                <p className="mt-2 experience-text">
                                    {edu.details}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
