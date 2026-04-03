import { useEffect, useState } from "react";

const About = () => {
    const [Age, setAge] = useState(null);
    const dob = new Date("2005-01-01");

    useEffect(() => {
        const calculateAge = () => {
            const today = new Date();
            let age = today.getFullYear() - dob.getFullYear();
            const monthDiff = today.getMonth() - dob.getMonth();
            const dayDiff = today.getDate() - dob.getDate();

            if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
                age--;
            }
            setAge(age);
        };
        calculateAge();
    }, [dob]);

    return (
        <section className="w-full py-20 px-4 about-me-body">
            <div className="w-auto h-fit p-0.5 space-y-5 m-5 sm:m-5 lg:m-20 rounded-2xl bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500">
                <div id="about" className="about-me-body h-fit p-6 sm:p-10 space-y-5 rounded-2xl w-auto card">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">About Me:</h2>

                    {/* Responsive Container */}
                    <div className="text-base sm:text-lg leading-relaxed space-y-3">
                        <p>I am an aspiring <span className="font-semibold">Data Analyst & Full-Stack Developer</span> and BCA undergraduate with a strong focus on building responsive web applications and data-driven solutions.</p>
                        <p>I have solid experience in <span className="font-semibold">SQL, Excel, Power BI, Python</span> for analytics, along with <span className="font-semibold">MERN stack</span> development for creating interactive, scalable applications.</p>
                        <p>My expertise includes React.js with Tailwind CSS for frontend, Node.js and Express.js for backend, and MongoDB/MySQL for database management.</p>
                        <p>I enjoy solving real-world problems, transforming ideas into products, and deriving actionable insights from data.</p>
                        <p>My goal is to write clean, scalable, and performance-optimized code while continuously learning modern technologies and contributing to impactful projects.</p>
                    </div>
                    <br />

                    <div className="flex flex-col lg:flex-row justify-between gap-6">
                        <div className="w-fit leading-relaxed space-y-1">
                            <div><span className="font-semibold">Birthday:</span> 1 Jan 2005</div>
                            <div><span className="font-semibold">Age:</span> {Age !== null ? (<span>{Age} years old</span>) : (<span>Calculating...</span>)}</div>
                            <div><span className="font-semibold">Degree:</span> Bachelor of Computer Applications</div>
                            <div><span className="font-semibold">Field of Study:</span> Computer Science</div>
                            <div><span className="font-semibold">Freelance:</span> Available</div>
                            <div><span className="font-semibold">Email:</span> vk866797@gmail.com</div>
                            <div><span className="font-semibold">Location:</span> Noida, India</div>
                            <div><span className="font-semibold">Nationality:</span> Indian</div>
                        </div>

                        <div className="bg-slate-800 text-yellow-400 code-box p-4 sm:p-6 rounded-xl shadow-lg text-xs sm:text-sm font-mono w-fit border border-gray-700 overflow-x-auto">
                            <pre className="whitespace-pre-wrap">
                                {`const developer = {
  name: "Vishesh",
  role: "Data Analyst & Full Stack Developer",
  skills: [
    "SQL", "Excel", "Power BI", "Python",
    "React", "Tailwind CSS", "TypeScript",
    "Node.js", "Express.js", "MongoDB", "Java"
  ],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  isHireable() {
    return this.hardWorker && this.problemSolver && this.skills.length >= 5;
  }
};`}
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;