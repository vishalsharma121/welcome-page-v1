// components/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ title, status, plan, number, createdAt, isVerified }) => {
  return (
    <div className="bg-white p-6 rounded-lg w-full">
      <h3 className="text-xl font-bold mb-4">{title}</h3>

      <div className="mb-2">
        <p className="text-sm text-gray-600">Status</p>
        <p className={isVerified ? 'text-green-600' : 'text-gray-700'}>
          {status}
        </p>
      </div>

      <div className="mb-2">
        <p className="text-sm text-gray-600">Active plan</p>
        <p className="text-[#004d4d] font-semibold">{plan}</p>
      </div>

      <div className="mb-2">
        <p className="text-sm text-gray-600">Number</p>
        <p className={`font-semibold ${isVerified ? 'text-green-700 flex items-center gap-1' : 'text-gray-800'}`}>
          {number}
          {isVerified && (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.371 0 0 5.371 0 12c0 2.122.553 4.108 1.514 5.85L0 24l6.438-1.504A11.961 11.961 0 0012 24c6.629 0 12-5.371 12-12S18.629 0 12 0zm0 22.153c-1.922 0-3.701-.536-5.209-1.466l-.371-.219-3.819.893.814-3.678-.24-.381A9.947 9.947 0 012 12c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10zm5.563-7.475l-1.584-.729a.71.71 0 00-.833.188l-.909 1.111a8.55 8.55 0 01-3.786-3.786l1.111-.909a.71.71 0 00.188-.833l-.729-1.584a.716.716 0 00-.646-.409c-.43 0-.776.346-.776.776 0 5.123 4.153 9.276 9.276 9.276.43 0 .776-.346.776-.776 0-.263-.157-.501-.409-.646z" />
            </svg>
          )}
        </p>
      </div>

      <p className="text-xs text-gray-500 mt-2">Created at {createdAt}</p>

      <button className="mt-4 w-full border border-[#0a474c] text-[#0a474c] py-1.5 rounded hover:bg-[#0a474c10] transition">
        View
      </button>
    </div>
  );
};

export default ProjectCard;
