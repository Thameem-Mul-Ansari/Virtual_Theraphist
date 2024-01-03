import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
       Features
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/_127899429_gettyimages-991619332.jpg"
          title="Realistic Human Experience"
          description="Integrating metahuman/avatar technology with advanced voice cloning & facial expression algorithms, an AI-powered virtual human assistant can simulate emotional connection with individuals battling addiction"
        />
        <ProjectCard
          src="/istockphoto-144806677-170667a.jpg"
          title="LLM Powered Online Community"
          description="Podcast transcripts by neuroscientists, psychologists, & reformed addicts are fine-tuned via LLM embeddings for the bot to engage with individuals battling addiction."
        />
        <ProjectCard
          src="/welcome-major-indian-language-word-260nw-2251485813.webp"
          title="Multilingual"
          description="The Ai-powered virtual human assistant can handle multiple language inputs."
        />
      </div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/machine_learning_04.png"
          title="Physical Mobility & Diet Planning "
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          src="/0_BXvVfJhxcGKX28KQ.png"
          title="Pschometric Tests"
          description="By employing assessments like the Hamilton Anxiety Rating Scale and Beck Depression Inventory, the AI gauges mental conditions, assigning grades for personalized assistance and support based on the results."
        />
        <ProjectCard
          src="/rf-emotion-recognition-rf-830x495-1.jpeg"
          title="Emotional Status Detection"
          description="Utilizing vision models like GPT-4v the virtual human assistant can recognize user emotions, simulating emotional bond."
        />
      </div>
     
       
      </div>
 
  );
};

export default Projects;
