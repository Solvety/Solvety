import React from "react";
import Web3 from "../../assets/ben/web3.svg";

const ComingSoon = () => {
  const bgStyle = {
    backgroundImage: `url('${Web3}')`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
  };

  return (
    <div className="rounded-lg bg-gray-200 relative" style={bgStyle}>
      <div className="absolute w-full h-full bg-[#212360] bg-opacity-60 rounded-lg z-10"></div>
      <div className="relative w-full h-full p-5 z-20 text-white grid place-content-center gap-10 text-center">
        <h1 className="font-bold text-2xl">Mainnet Coming soon</h1>
        <p>Enjoy our Testnet version</p>
      </div>
    </div>
  );
};

export default ComingSoon;
