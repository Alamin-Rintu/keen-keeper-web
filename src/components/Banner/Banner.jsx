import React from "react";
import { IoMdAdd } from "react-icons/io";

const Banner = () => {
  return (
    <div className="mt-10">
      <div className="text-center space-y-3">
        <h3 className="text-[#1F2937] text-5xl font-bold">
          Friends to keep close in your life
        </h3>
        <p className="text-[#64748B] text-[16px]">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br /> relationships that matter most.
        </p>
        <button className="btn bg-[#244D3F] text-white font-semibold">
          <IoMdAdd className="text-xl" />
          Add a Friend
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5 p-5">
        <div className="bg-white p-4 text-center shadow rounded-xl">
            <p className="text-[#244D3F] font-semibold text-3xl mb-2">10</p>
            <p className="text-[#64748B] text-xl">Total Friends</p>
        </div>
        <div className="bg-white p-4 text-center shadow rounded-xl">
            <p className="text-[#244D3F] font-semibold text-3xl mb-2">3</p>
            <p className="text-[#64748B] text-xl">On Track</p>
        </div>
        <div className="bg-white p-4 text-center shadow rounded-xl">
            <p className="text-[#244D3F] font-semibold text-3xl mb-2">6</p>
            <p className="text-[#64748B] text-xl">Need Attention</p>
        </div>
        <div className="bg-white p-4 text-center shadow rounded-xl">
            <p className="text-[#244D3F] font-semibold text-3xl mb-2">12</p>
            <p className="text-[#64748B] text-xl">Interactions This Month</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
