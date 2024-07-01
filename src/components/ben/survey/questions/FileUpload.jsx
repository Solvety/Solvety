// FileUpload.js
import React from "react";
import { useFileUploadQuestionType } from "../../../../context/Survey/FileUploadQuestionProvider";

const FileUpload = () => {
  const { fileSize, numFiles, setFileSize, setNumFiles } = useFileUploadQuestionType();

    console.log("File Size:", fileSize);
    console.log("Number of Files:", numFiles);
  return (
    <div className="px-3 mb-2 mt-5 md:mt-0">
      {/* filesize */}
      <div className="flex justify-between w-1/2">
        <h1 className="font-semibold text-lg text-[#636387]">Maximum file size</h1>
        <select
          className="bg-transparent outline-none font-semibold text-lg text-[#636387]"
          value={fileSize}
          onChange={(e) => setFileSize(e.target.value)}
        >
          <option value="1mb">1mb</option>
          <option value="2mb">2mb</option>
          <option value="3mb">3mb</option>
          <option value="4mb">4mb</option>
          <option value="20mb">20mb</option>
        </select>
      </div>
      {/* number of files */}
      <div className="flex justify-between w-1/2 mt-3">
        <h1 className="font-semibold text-lg text-[#636387]">Maximum number of files</h1>
        <select
          className="bg-transparent outline-none font-semibold text-lg text-[#636387]"
          value={numFiles}
          onChange={(e) => setNumFiles(e.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
      </div>
    </div>
  );
};

export default FileUpload;
