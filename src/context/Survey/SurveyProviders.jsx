import React from "react";
import { FileUploadQuestionProvider } from "./FileUploadQuestionProvider";

const SurveyProviders = ({ children }) => {
  return (
    <FileUploadQuestionProvider>
      {children}
    </FileUploadQuestionProvider>
  );
};

export default SurveyProviders;
