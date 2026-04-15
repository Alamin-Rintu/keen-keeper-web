"use client";

import { useContext } from "react";
import { FriendDetailContext } from "@/context/ContextProvider";
import { MdAddIcCall } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { format } from "date-and-time";

const TimeLinePage = () => {
  const { callFriend, textFriend, videoFriend } =
    useContext(FriendDetailContext);

  return (
    <div className="container mx-auto mt-10 mb-10">
      <h3 className="text-2xl font-bold">Timeline</h3>

      <div className="mt-5 space-y-3">
        {callFriend?.map((friend, index) => (
          <div key={index} className="p-4 bg-white shadow rounded-xl">
            <h4 className="font-semibold text-lg text-[#244D3F] flex items-center gap-2">
              <MdAddIcCall /> Call with {friend.name}
            </h4>

            <p className="text-sm text-gray-500 mt-2">
              {format(new Date(), "ddd, MMM DD YYYY hh:mm A")}
            </p>
          </div>
        ))}

        {textFriend?.map((friend, index) => (
          <div key={index} className="p-4 bg-white shadow rounded-xl">
            <h4 className="font-semibold text-lg text-purple-600 flex items-center gap-2">
              <IoChatbubbleEllipses /> Text with {friend.name}
            </h4>
            <p className="text-sm text-gray-500 mt-2">
              {format(new Date(), "ddd, MMM DD YYYY hh:mm A")}
            </p>
          </div>
        ))}

        {videoFriend?.map((friend, index) => (
          <div key={index} className="p-4 bg-white shadow rounded-xl">
            <h4 className="font-semibold text-lg text-purple-600 flex items-center gap-2">
              <FaVideo /> Video call with {friend.name}
            </h4>

            <p className="text-sm text-gray-500 mt-2">
              {format(new Date(), "ddd, MMM DD YYYY hh:mm A")}
            </p>
          </div>
        ))}

        {callFriend.length === 0 &&
          textFriend.length === 0 &&
          videoFriend.length === 0 && (
            <p className="text-xl font-semibold">No stats yet</p>
          )}
      </div>
    </div>
  );
};

export default TimeLinePage;
