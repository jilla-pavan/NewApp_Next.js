import React from "react";

function Shimmer() {
  return (
    <div className="h-screen  flex flex-col items-center justify-center bg-gray-100">
      <div className="flex justify-center items-center flex-col h-[500px] bg-red-500 w-[300px] rounded-lg p-6">
        <h1 className="font-bold text-lg">Loading..... </h1>
      </div>
    </div>
  );
}

export default Shimmer;
