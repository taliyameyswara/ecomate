import React from "react";

const Home = () => {
  return (
    <div className="container">
      <div className="card bg-white rounded-3xl p-5 grid grid-cols-2 items-center ">
        <div className="pl-20 space-y-3">
          <h1 className="text-xl">
            Hello, <span className="font-semibold">Ratu!</span> 👋
          </h1>
          <h1 className="text-4xl">
            Welcome to{" "}
            <span className="font-semibold text-primary">Ecomate!</span>
          </h1>
          <p className="mt-4 text-gray-500">Have a nice day!</p>
        </div>
        <figure>
          <img src="banner.png" className="w-[80%] mx-auto" />
        </figure>
      </div>

      <h1 className="text-2xl font-semibold mt-10">Menus</h1>
      <div className="grid grid-cols-3 mt-5 gap-10">
        <div className="card bg-gradient p-5 h-56 rounded-3xl flex items-end justify-center">
          <h1 className="text-white text-xl">Article</h1>
        </div>
        <div className="card bg-gradient p-5 h-56 rounded-3xl flex items-end justify-center">
          <h1 className="text-white text-xl">Video Tutorial</h1>
        </div>
        <div className="card bg-gradient p-5 h-56 rounded-3xl flex items-end justify-center">
          <h1 className="text-white text-xl">Real Time R</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
