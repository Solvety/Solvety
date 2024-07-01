import React from "react";

const RetakeQuestPopup = ({ onRetake, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg shadow-lg text-center">
        <h2 className="mb-4">You missed this question. Do you want to retake it?</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2" onClick={onRetake}>
          Yes
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={onCancel}>
          No
        </button>
      </div>
    </div>
  );
};

export default RetakeQuestPopup;
