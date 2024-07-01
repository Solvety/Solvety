import React, { createContext, useContext, useState } from "react";

const FileUploadQuestionContext = createContext();

export const FileUploadQuestionProvider = ({ children }) => {
  const [fileSize, setFileSize] = useState("20mb");
  const [numFiles, setNumFiles] = useState("1");

  return (
    <FileUploadQuestionContext.Provider value={{ fileSize, setFileSize, numFiles, setNumFiles }}>
      {children}
    </FileUploadQuestionContext.Provider>
  );
};

export const useFileUploadQuestionType = () => useContext(FileUploadQuestionContext);
