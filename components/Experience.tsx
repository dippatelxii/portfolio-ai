import React from "react";
import { workExperience } from "@/data";

const Experience = () => {
  return (
    <div id="experience" className="py-20 w-full">
      <h1 className="heading text-center">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full mt-16 relative ml-8 md:ml-16 lg:ml-24">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple via-purple/50 to-transparent"></div>
        
        <div className="space-y-16">
          {workExperience.map((experience, index) => (
            <div key={experience.id} className="relative flex items-start">
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-8 w-3 h-3 bg-purple rounded-full -translate-x-1/2 mt-2 z-10"></div>
              
              {/* Year/Duration */}
              <div className="w-20 md:w-24 flex-shrink-0 pt-1 ml-6 md:ml-10">
                <div className="text-sm md:text-base font-semibold text-purple">
                  {experience.duration}
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 ml-8 md:ml-12">
                {/* Role and Company */}
                <div className="mb-4">
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-1">
                    {experience.role}
                  </h2>
                  <p className="text-purple font-semibold text-lg">
                    {experience.company}
                  </p>
                </div>
                
                {/* Work Details */}
                <div className="space-y-2">
                  {experience.workDetails.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-neutral-300 leading-relaxed">
                      {detail}
                    </p>
                  ))}
                </div>
                
                {/* Tools */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {experience.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="px-2 py-1 bg-purple/10 text-purple rounded text-xs font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
