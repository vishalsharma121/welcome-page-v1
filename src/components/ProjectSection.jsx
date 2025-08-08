import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import CreateImage from "../assets/createpage.png";

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
      status: "Verified",
      plan: "PRO (Active)",
      number: "919041281851",
      createdAt: "Jul 18, 2025",
    },
  ]);

  const [newProjectName, setNewProjectName] = useState("");

  const formatDate = (date) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newProjectName.trim()) {
      const createdAt = new Date();
      const formattedDate = formatDate(createdAt);

      const newProject = {
        name: newProjectName,
        status: "Created",
        plan: "Free Forever",
        number: "N/A",
        createdAt: formattedDate,
      };

      setProjects([...projects, newProject]);
      setNewProjectName("");
    } else {
      toast.error("Please enter a project name.");
    }
  };

  const copyWhatsAppURL = (number) => {
    if (number && number !== "N/A") {
      const url = `https://wa.me/${number}`;
      navigator.clipboard.writeText(url);
      toast.success("WhatsApp URL copied!");
    }
  };

  return (
    <>
    <div className="max-w-full md:max-w-[58.333333%] container mx-auto p-4 sm:p-8">
      <Toaster position="top-right" reverseOrder={false} />

      <h1 className="text-[20px] font-normal">Welcome, Starkedge</h1>

      {/* Create Project Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 w-full bg-[#ebf5f3] rounded-[15px] min-h-[360px] mt-5 p-4 sm:p-0">
        {/* Left Section */}
        <div className="w-full sm:w-7/12 p-0 sm:p-3 flex items-center justify-center">
          <div className="w-full max-w-full sm:max-w-10/12">
            <h2 className="text-[20px] font-normal mb-[0.35em]">
              Create New Project
            </h2>
            <p className="text-[12px] text-[#6E6E6E] mb-4">
              One Business Project is associated with one WhatsApp Business API
              Number
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={newProjectName}
                onChange={(e) => setNewProjectName(e.target.value)}
                placeholder="Enter your project name"
                className="px-[15px] py-[12px] text-[15px] font-medium rounded-[8px] w-full bg-white"
              />
              <button
                type="submit"
                className="cursor-pointer px-[24px] py-[6px] text-white bg-[#0a474c] text-[0.875rem] mt-4 rounded-[6px]"
              >
                Create
              </button>
            </form>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="w-full sm:w-5/12 flex items-center justify-center mt-4 sm:mt-0">
          <img
            className="h-[180px] w-[180px] sm:h-[230px] sm:w-[230px] object-contain"
            src={CreateImage}
            alt="Create Image"
          />
        </div>
      </div>

      {/* Recent Projects */}
      <h2 className="mt-8 text-[20px] font-normal py-4">Recent Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-1">
        {projects.map((project, index) => (
          <div key={index} className="p-[20px] rounded-[8px] bg-white">
            <div className="h-full w-full flex flex-wrap box-border">
              <div className="w-full">
            <h2 className="text-[25px] font-inter font-bold leading-[1.2] tracking-[1px] [word-spacing:2px] mb-2">{project.name}</h2>
            <div className="flex items-center">
              {/* Status */}
              <div className="w-6/12 p-1">
                <div className="pt-4">
                  <div className="text-[14px] font-inter font-normal leading-[1.334] tracking-[0em] mb-[0.35em]">Status</div>
                  <div
                    className={`text-[16px] font-inter font-normal leading-[1.235] tracking-[0.00735em] 
  ${project.status === "Created" ? "text-gray-500" : ""} 
  ${project.status === "Verified" ? "text-[#008000] font-medium" : ""}`}
                  >
                    {project.status}
                  </div>
                </div>
              </div>
              {/* Plan */}
              <div className="w-6/12 p-1">
                <div className="pt-4">
                  <div className="text-[14px] font-inter font-normal leading-[1.334] tracking-[0em] mb-[0.35em]">Active plan</div>
                  <div className="text-[16px] font-inter font-semibold leading-[1.235] tracking-[0.00735em] text-[#0a474c] uppercase">{project.plan}</div>
                </div>
              </div>
            </div>

            {/* Number + WhatsApp Icon */}
            <div className="p-1">
              <div className="w-8/12 pt-4">
                <div className="text-[14px] font-inter font-normal leading-[1.334] tracking-[0em] mb-[0.35em]">Number</div>
                {project.number !== "N/A" ? (
                  <div className="flex items-center gap-2">
                    <span
                      className="text-[20px] font-inter font-normal leading-[1.167] tracking-[0em] text-[#008000]"
                      title="Copy WhatsApp URL"
                      onClick={() => copyWhatsAppURL(project.number)}
                    >
                      {project.number}
                    </span>
                    <a
                      href={`https://wa.me/${project.number}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#008000] text-[25px]"
                      title="Open in WhatsApp"
                    >
                      <FaWhatsapp />
                    </a>
                  </div>
                ) : (
                  <span className="text-[16px] font-inter font-semibold leading-[1.235] tracking-[0.00735em] text-gray-500">N/A</span>
                )}
              </div>
            </div>
            </div>
            <div className="w-full flex justify-end flex-col">
            {/* Date */}
            <div className="text-[12px] font-roboto font-normal leading-[1.43] tracking-[0.01071em] text-[#6E6E6E] mt-4">
              Created at {project.createdAt}
            </div>

            {/* View Button */}
            <button className="cursor-pointer text-[#0a474c] border border-[#0a474c80] px-[15px] py-[5px] text-[0.875rem] mt-4 w-full rounded-[6px] hover:bg-[rgba(10,71,76,0.04)] hover:border-[#0a474c] transition">
              View
            </button>
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>

    <div className="p-4"></div>
    </>
  );
};

export default ProjectSection;
