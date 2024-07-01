import React from "react";

const LoadingBg = () => {
  return (
    <div className="w-full border-2 border-purple-600 h-screen transform transition-all duration-500 ease-in-out font-bold text-xl text-purple-600  absolute top-0 left-0 z-[999] grid place-content-center bg-white">
      Loading...
    </div>
  );
};

export default LoadingBg;
