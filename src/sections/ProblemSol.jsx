import w3icon from '../assets/socialmedia/w3school1.png';
import hricon from '../assets/socialmedia/hackerrank1.png';
import nsicon from '../assets/socialmedia/newtonschool1.png';
import lcicon from '../assets/socialmedia/leetcode.png';
import cnicon from '../assets/socialmedia/codingninjas.png';

const ProblemSol = () => {
  const problemSolvingData = [
    { img: lcicon, heading: 'LeetCode', link: 'https://leetcode.com/u/Vishesh9310/' },
    { img: cnicon, heading: 'Coding Ninjas', link: 'https://www.naukri.com/code360/profile/Vishesh9310'},
    { img: hricon, heading: 'HackerRank', link: 'https://www.hackerrank.com/profile/Vishesh9310' },
    { img: w3icon, heading: 'W3schools', link: 'https://www.w3profile.com/Vishesh' },
    { img: nsicon, heading: 'Newton Schools', link: 'https://my.newtonschool.co/user/vk866797' },
  ];

  return (
    <section id='problemsol' className="h-fit py-20 projects-body pb-20 space-y-20">
      <div>
        <h2 className="text-3xl sm:text-4xl text-center font-bold orbitron bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent mb-10">
          Problem Solving
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 sm:px-12 lg:px-24">
          {problemSolvingData.map((platform, index) => (
            <a key={index} href={platform.link} target="_blank" rel="noopener noreferrer">
              <div className="w-full h-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:bg-gradient-to-l p-0.5 rounded-2xl transition-all">
                <div className="project-body rounded-2xl overflow-hidden flex flex-col items-center">
                  <img src={platform.img} alt={platform.heading} className="h-64 w-full object-contain" />
                  <h3 className="p-4 orbitron text-center font-bold italic text-lg">{platform.heading}</h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSol;