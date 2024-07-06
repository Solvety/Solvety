import React from "react";
import qwestLogo from "../../../assets/qwest_assets/logo.svg";
import coin from "../../../assets/qwest_assets/coin.svg";
import { useQuest } from "../../../context/QwestContext";
import { motion } from "framer-motion";

const CoinGrid = () => {
  const { coins, balance } = useQuest();
  const validScore = coins.filter((score) => score > 0);

  const coinVariants = {
    hidden: { y: -200, opacity: 0 },
    show: {
      y: [0, 50, -20, 0],
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <div>
      <div className="hidden 992:flex mb-1">
        <img src={qwestLogo} alt="qwest logo" />
        <h1 className="font-bold text-2xl">{balance}</h1>
      </div>
      <motion.section
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.25,
            },
          },
        }}
        initial="hidden"
        animate="show"
      >
        <div className="coin_grid grid grid-cols-3 whitespace-nowrap w-fit gap-x-1 gap-y-2">
          {coins.map((coinValue, index) => (
            <motion.div
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
              key={index}
              className={`bg-white whitespace-nowrap w-10 sm:w-16 py-[1px] rounded-lg flex justify-center items-center ${
                coinValue === 0 ? "text-red-500" : ""
              }`}
            >
              {coinValue === 0 ? (
                <span className="text-xl font-bold">0</span>
              ) : (
                <motion.img
                  src={coin}
                  alt="coin"
                  className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8"
                  variants={coinVariants}
                  initial="hidden"
                  animate="show"
                />
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default CoinGrid;
