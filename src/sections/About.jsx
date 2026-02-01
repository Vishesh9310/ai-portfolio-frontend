import { useEffect, useState } from "react";

const About = () => {
    const [Age, setAge] = useState(null);
    const dob = new Date("2005-01-01");
    useEffect(() => {
        const calculateAge = () => {
            const today = new Date();
            let calculateAge = today.getFullYear() - dob.getFullYear();
            const monthDiff = today.getMonth() - dob.getMonth();
            const dayDiff = today.getDay() - dob.getDay();

            if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
                calculateAge--;
            }
            setAge(calculateAge);
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
                        <p> I am an aspiring Full-Stack Developer and BCA undergraduate with a strong focus on building responsive, user-friendly web applications. </p>
                        <p> I have a solid foundation in Data Structures, Algorithms, C, and C++, which enables me to write efficient and reliable code. </p>
                        <p> My expertise lies in the MERN stack, particularly React.js for frontend development styled with Tailwind CSS, and Node.js for backend services, working with both MongoDB and MySQL databases. </p>
                        <p> I enjoy solving real-world problems and transforming ideas into complete digital products. </p>
                        <p> My goal is to write clean, scalable, and performance-optimized code while continuously learning modern technologies and contributing to impactful projects.</p>
                    </div>
                    <div className="flex justify-between">
                        <div className="w-fit leading-relaxed">
                            <div><span class="font-semibold">Birthday:</span> 1 Jan 2005</div>
                            <div><span class="font-semibold">Age:</span> {Age !== null ? (<span>{Age} years old</span>) : (<span>Calculating...</span>)}</div>
                            <div><span class="font-semibold">Degree:</span> Bachelor of Computer Applications</div>
                            <div><span class="font-semibold">Field of Study:</span> Computer Science</div>
                            <div><span class="font-semibold">Freelance:</span> Available</div>
                            <div><span class="font-semibold">Email:</span> vk866797@gmail.com</div>
                            <div><span class="font-semibold">Address:</span> Noida, India</div>
                            <div><span class="font-semibold">Nationality:</span> Indian</div>
                        </div>
                        <div className="bg-slate-800 text-yellow-400 code-box p-4 sm:p-6 rounded-xl shadow-lg text-xs sm:text-sm font-mono w-fit border border-gray-700 overflow-x-auto">
                            <pre className="whitespace-pre-wrap">
                                {`const developer = {
  name: "Vishesh",
  role: "Full Stack Developer",
  skills: [ "React", "HTML", "Tailwind CSS", "JavaScript", "Node.js", "Express.js", "MySQL", "MongoDB", "Data Structures" ],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,

  isHireable() {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 5
    );
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