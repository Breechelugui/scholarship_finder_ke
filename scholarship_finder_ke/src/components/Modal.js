import React from 'react';

function Modal({ scholarship, onClose }) {
  if (!scholarship) return null;

  const handleClose = () => {
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
      onClick={handleClose}
    >
      <div 
        className="bg-white p-6 rounded max-w-2xl w-full max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold mb-2 text-black">{scholarship.name}</h2>
        <p className="text-gray-600 mb-4">{scholarship.institution}</p>
        <p className="mb-4 text-black">{scholarship.notes}</p>
        <p className="mb-2 text-black"><strong>Type:</strong> {scholarship.type}</p>
        <p className="mb-2 text-black"><strong>Amount:</strong> {scholarship.amount}</p>
        <p className="mb-2 text-black"><strong>Deadline:</strong> {scholarship.deadline}</p>
        <p className="mb-4 text-black"><strong>Eligibility:</strong> {scholarship.eligibility}</p>
        <div className="flex gap-4">
          <a 
            href={scholarship.source_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Apply Now
          </a>
          <button 
            type="button"
            onClick={handleClose}
            className="bg-white border-2 border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-50 font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;