"use client";

import { FriendDetailContext } from "@/context/ContextProvider";
import { useContext } from "react";
import {
  MdWifiCalling1,
  MdOutlineTextsms,
  MdOutlineVideocam,
} from "react-icons/md";
import { toast } from "react-toastify";

const QuickCheckIn = ({ friend }) => {
  const {
    callFriend,
    setCallFriend,
    textFriend,
    setTextFriend,
    videoFriend,
    setVideoFriend,
  } = useContext(FriendDetailContext);

  const handleCall = () => {
    setCallFriend([...callFriend, friend]);
    toast.success(`${friend.name} calling success`);
  };

  const handleText = () => {
    setTextFriend([...textFriend, friend]);
    toast.success(`${friend.name} text success`);
  };

  const handleVideo = () => {
    setVideoFriend([...videoFriend, friend]);
    toast.success(`${friend.name} video call success`);
  };

  return (
    <div className="bg-white p-4 shadow rounded-xl">
      <p className="text-[#244D3F] font-semibold mb-3">Quick Check-In</p>

      <div className="flex justify-between gap-3 text-center mt-3">
        <div
          onClick={handleCall}
          className="flex-1 bg-gray-100 p-3 rounded-lg cursor-pointer"
        >
          <MdWifiCalling1 className="mx-auto text-lg" />
          <p className="text-sm font-semibold">Call</p>
        </div>

        <div
          onClick={handleText}
          className="flex-1 bg-gray-100 p-3 rounded-lg cursor-pointer"
        >
          <MdOutlineTextsms className="mx-auto text-lg" />
          <p className="text-sm font-semibold">Text</p>
        </div>

        <div
          onClick={handleVideo}
          className="flex-1 bg-gray-100 p-3 rounded-lg cursor-pointer"
        >
          <MdOutlineVideocam className="mx-auto text-lg" />
          <p className="text-sm font-semibold">Video</p>
        </div>
      </div>
    </div>
  );
};

export default QuickCheckIn;
