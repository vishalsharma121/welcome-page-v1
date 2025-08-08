import React, { useState } from 'react';
import CreateImage from '../assets/createpage.png';

const ProjectSection = () => {
  const [projects, setProjects] = useState([
    {
      name: "Seoily Technologies Pvt Ltd",
      status: "Created",
      plan: "Free Forever",
      number: "N/A",
      createdAt: "Jul 8, 2025",
    },
    {
      name: "JUET GUNA",
      status: "Verified",
      plan: "PRO",
      number: "917056251375",
      createdAt: "Jul 8, 2025",
    },
    {
      name: "UBER Driver Benefit Plan",
      status: "Created",
      plan: "Free Forever",
      number: "N/A",
      createdAt: "Jul 14, 2025",
    },
    {
      name: "UBER Rider",
      status: "Active plan",
      plan: "PRO",
      number: "919041281851",
      createdAt: "Jul 18, 2025",
    },
  ]);

  const [newProjectName, setNewProjectName] = useState('');

  // Format the date to "Jul 8, 2025"
  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  };

  // Handle form submission to create a new project
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the page from reloading

    if (newProjectName.trim()) {
      // Get today's date and format it
      const createdAt = new Date();
      const formattedDate = formatDate(createdAt);

      // Create a new project object
      const newProject = {
        name: newProjectName,
        status: 'Created',
        plan: 'Free Forever',
        number: 'N/A',
        createdAt: formattedDate,
      };

      // Add the new project to the list
      setProjects([...projects, newProject]);

      // Clear the input field after submission
      setNewProjectName('');
    } else {
      alert("Please enter a project name.");
    }
  };

  return (
    <div className="max-w-[58.333333%] container mx-auto p-8">
      <h1 className="text-[20px] font-normal">Welcome, Shailesh</h1>
      

      <div className='flex justify-between items-center gap-3 w-full z-100 box-border bg-gray-100 bg-[#ebf5f3] rounded-[15px] min-h-[360px] mt-[20px]'>
        <div className="w-7/12 p-3 flex items-center justify-center">
        <div className='max-w-10/12'>
          <h2 className="text-[20px] font-normal leading-[1.167] tracking-normal mb-[0.35em]">Create New Project</h2>
          <p className="text-[12px] font-roboto font-normal leading-[1.43] tracking-[0.01071em] text-[#6E6E6E] mb-4">One Business Project is associated with one WhatsApp Business API Number</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={newProjectName}
              onChange={(e) => setNewProjectName(e.target.value)}
              placeholder="Enter your project name"
              className="px-[15px] py-[12px] text-[15px] font-medium rounded-[8px] w-full bg-white box-border w-full"
            />
            <button
              type="submit"
              className="px-[24px] py-[6px] text-white bg-[#0a474c] text-[0.875rem] font-roboto font-medium leading-[1.75] rounded-[6px] tracking-[0.02857em] normal-case cursor-pointer mt-4"
            >
              Create
            </button>
          </form>
        </div>
        </div>
        <div className="w-5/12 flex items-center justify-center">
        <img className="h-[230px] w-[230px]" src={CreateImage} alt="Create Image" />
        </div>
      </div>

      <h2 className="mt-8 text-2xl text-[20px] font-normal py-4">Recent Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-1">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-[20px] rounded-[8px] bg-white"
          >
            <h2 className="text-[25px] font-extrabold leading-[1.2] tracking-[1px] mb-[0.35em]">{project.name}</h2>
            <p className="mt-2 text-gray-600">Status: {project.status}</p>
            <p className="mt-1 text-gray-600">Active Plan: {project.plan}</p>
            <p className="mt-1 text-gray-600">Number: {project.number}</p>
            <p className="mt-1 text-gray-400 text-sm">Created at {project.createdAt}</p>
            <button className="text-[#0a474c] border border-[#0a474c80] px-[15px] py-[5px] text-[0.875rem] font-roboto font-medium leading-[1.75] rounded-[6px] tracking-[0.02857em] bg-transparent mt-4 full w-full cursor-pointer">View</button>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default ProjectSection;
