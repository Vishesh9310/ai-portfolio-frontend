import SkillCard from "../components/skill/SkillCard";
import { motion } from "framer-motion";
const Skills = () => {
    const skillsdata = [
        { heading: 'Frontend', skills: ['React.js', 'TailwindCss', 'JavaScript', 'HTML', 'CSS'] },
        { heading: 'Backend', skills: ['Node.js', 'Express.js', 'Socket.io'] },
        { heading: 'Database', skills: ['MongoDB', 'MySQL', 'RDBMS'] },
        { heading: 'Tools', skills: ['Git & GitHub', 'Postman', 'VsCode'] },
        { heading: 'Programming Languages', skills: ['JavaScript', 'C++', 'Java', 'Python'] },
        { heading: 'Algorithms & Problem Solving', skills: ['DSA', 'OOPs', 'Analytical Thinking', 'Responsive Web Design'] },
    ]
    return (
        <section className="skills-body relative w-full py-24 px-4 text-white overflow-hidden">

            <div id="skills" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px]" />
            <div className="relative max-w-6xl mx-auto">

                {/* Heading */}
                <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 text-transparent bg-clip-text w-fit mx-auto">
                    Skills & Expertise
                </motion.h2>
                <p className="mb-14 w-full text-center pt-2 italic">Crafting responsive websites and dynamic web apps with modern technologies. Let's build something amazing together!</p>
                
                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillsdata.map((item, index) => (
                        <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }} viewport={{ once: true }}>
                            <SkillCard heading={item.heading} skills={item.skills} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;