import React from "react";

import NavBar from "../components/navbar";
import bgImg from "../assets/1.svg";

const MainPage = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen bg-white">
      <div className="bg-white pb-8 sm:pb-16 md:pb-20 lg:w-1/2 lg:pb-28 xl:pb-32">
        <NavBar />
        <main className="mt-10 px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">一起来探索最新潮的</span>{" "}
              <span className="block text-yellow-400 xl:inline">
                Web3 社交方式
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-400 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
              寻找你朋友的厨房！连接 MetaMask Ethereum
              钱包，获得你的朋友链接，预约他们的时间，在朋友家吃 TA
              做的料理、一起在沙发上看电影、借住一宿，还有更多有趣的事情等待你的挖掘！
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="/friends"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-yellow-400 px-8 py-3 text-base font-medium text-white hover:bg-yellow-500 md:py-4 md:px-10 md:text-lg"
                >
                  开始预定
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="/about"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-yellow-100 px-8 py-3 text-base font-medium text-yellow-500 hover:bg-yellow-200 md:py-4 md:px-10 md:text-lg"
                >
                  了解更多
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="flex flex-col justify-center lg:w-1/2">
        <img
          className="object-cover content-center w-full h-auto"
          src={bgImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default MainPage;
