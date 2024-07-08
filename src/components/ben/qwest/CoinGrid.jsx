import React from "react";
import qwestLogo from "../../../assets/qwest_assets/logo.svg";
import coin from "../../../assets/qwest_assets/coin.svg";
import { useQuest } from "../../../context/QwestContext";


const CoinGrid = () => {
  const {coins, balance} = useQuest()
  const validScore = coins.filter((score) => score > 0);

  return (
    <div>
      <div className="hidden 992:flex mb-1">
        <img src={qwestLogo} alt="qwest logo" />
        <h1 className="font-bold text-2xl">{balance}</h1>
      </div>
      <div className="coin_grid grid grid-cols-3 whitespace-nowrap w-fit gap-x-1 gap-y-2">
        {coins.map((coinValue, index) => (
          <div
            key={index}
            className={`bg-white whitespace-nowrap w-10 sm:w-16 py-[1px] rounded-lg flex justify-center items-center ${
              coinValue === 0 ? "text-red-500" : ""
            }`}
          >
            {coinValue === 0 ? (
              <span className="text-xl font-bold">0</span>
            ) : (
              <img src={coin} alt="coin" className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoinGrid;
