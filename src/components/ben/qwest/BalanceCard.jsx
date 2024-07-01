import React from "react";
import qwestLogo from "../../../assets/qwest_assets/logo.svg";
import { useQuest } from "../../../context/QwestContext";

const BalanceCard = ({ stipend = 0 }) => {
  const { coins, balance } = useQuest();
  const validScore = coins.filter((score) => score > 0);

  return (
    <div className="bg-gradient-to-b from-[#A748DA] to-[#672FAF] rounded-[2rem] p-4 992:p-5">
      <div className="flex gap-[5px] items-center">
        <div className="bg-white h-5 py-2 w-2 rounded-sm"></div>
        <p className="text-slate-200 text-s2">Earning</p>
      </div>
      <div className="text-md 992:text-xl flex gap-10 992:gap-28 justify-between items-center">
        <p>$Qwest earned</p>
        <p className="pr-5 sm:pr-0">Stipend</p>
      </div>

      <p className="text-slate-200 text-sm my-1 992:my-5">Total Balance</p>
      <div className="flex justify-between items-center mb-1 992:mb-5">
        <div className="flex mb-0 992:mb-1">
          <img src={qwestLogo} alt="qwest logo" />
          <h1 className="font-bold text-xl 992:text-3xl">
            {balance}
          </h1>
        </div>
        <h1 className="text-white text-xl 992:text-2xl mr-4">
          {""}
        </h1>
      </div>
    </div>
  );
};

export default BalanceCard;
