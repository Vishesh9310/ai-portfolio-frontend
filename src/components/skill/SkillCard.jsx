import React from 'react';

const SkillCard = ({ heading, skills }) => {
  return (
    <div className="group bg-[#1b1b1b11] backdrop-blur rounded-2xl p-6 border border-gray-700 
      hover:border-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] transition-all duration-300">
      
      <h3 className="text-xl font-semibold text-center orbitron mb-4 group-hover:text-blue-400 transition border-b border-gray-600 ">
        {heading}
      </h3>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="text-xs px-3 py-1 rounded-full bg-gray-700/70 
              text-slate-300 group-hover:bg-blue-500/10 group-hover:text-blue-300 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
