import QuickCheckIn from "@/components/Friends/FriendCard/QuickCheckIn";
import Image from "next/image";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { FaArchive, FaBell } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const appsPromise = async function () {
  const filePath = path.join(process.cwd(), "public", "data.json");
  const getfriendsData = JSON.parse(await readFile(filePath, "utf-8"));
  // const res = await fetch("http://localhost:3000/data.json");
  // const friends = await res.json();
  return getfriendsData;
};

const FriendsDetails = async ({ params }) => {
  const { id } = await params;
  const friends = await appsPromise();
  const friend = friends.find((friend) => String(friend.id) === id);

  const {
    picture,
    name,
    days_since_contact,
    tags,
    status,
    bio,
    goal,
    next_due_date,
  } = friend;
  const statusColor = {
    overdue: "bg-red-500",
    "almost due": "bg-yellow-500",
    "on-track": "bg-green-500",
  };
  return (
    <div className="container mx-auto px-4 mt-6 mb-10">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-1/3 space-y-4">
          <div className="bg-white rounded-2xl p-4 md:p-6 shadow-md text-center space-y-4 border border-gray-100">
            <div className="flex justify-center">
              <div className="p-1 rounded-full bg-gradient-to-tr from-green-200 to-blue-200">
                <Image
                  src={picture}
                  width={90}
                  height={90}
                  alt={name}
                  className="rounded-full object-cover"
                />
              </div>
            </div>

            <h3 className="text-lg md:text-xl font-semibold text-gray-800">
              {name}
            </h3>

            <p className="text-sm text-gray-500">
              Last contact:
              <span className="font-medium">{days_since_contact} days ago</span>
            </p>

            <div className="flex flex-wrap justify-center gap-2">
              {tags.map((tag, ind) => (
                <span
                  key={ind}
                  className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <span
              className={`inline-block px-4 py-1 rounded-full text-xs font-semibold text-white ${statusColor[status]}`}
            >
              {status.toUpperCase()}
            </span>
            <p className="text-[#64748B] font-medium text-[16px]">{bio}</p>
          </div>

          <div className="space-y-2">
            <div className="bg-white p-4 shadow rounded-xl">
              <p className="flex items-center gap-2">
                <FaBell /> Snooze 2 weeks
              </p>
            </div>

            <div className="bg-white p-4 shadow rounded-xl">
              <p className="flex items-center gap-2">
                <FaArchive /> Archive
              </p>
            </div>

            <div className="bg-white p-4 shadow rounded-xl">
              <p className="flex items-center gap-2 text-red-500">
                <RiDeleteBin6Line /> Delete
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-2/3 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 text-center shadow rounded-xl">
              <p className="text-[#244D3F] font-semibold text-lg md:text-xl">
                {days_since_contact}
              </p>
              <p className="text-[#64748B] text-sm md:text-base">
                Days Since Contact
              </p>
            </div>

            <div className="bg-white p-4 text-center shadow rounded-xl">
              <p className="text-[#244D3F] font-semibold text-lg md:text-xl">
                {goal}
              </p>
              <p className="text-[#64748B] text-sm md:text-base">Goal (Days)</p>
            </div>

            <div className="bg-white p-4 text-center shadow rounded-xl">
              <p className="text-[#244D3F] font-semibold text-lg md:text-xl">
                {next_due_date}
              </p>
              <p className="text-[#64748B] text-sm md:text-base">Next Due</p>
            </div>
          </div>

          <div className="bg-white p-4 shadow rounded-xl">
            <div className="flex justify-between items-center">
              <p className="text-[#244D3F] font-semibold">Relationship Goal</p>
              <p className="btn text-sm">Edit</p>
            </div>
            <p className="font-semibold text-sm md:text-base">
              Connect every <span className="font-bold">30 days</span>
            </p>
          </div>

          {/* <div className="bg-white p-4 shadow rounded-xl">
            <p className="text-[#244D3F] font-semibold mb-3">Quick Check-In</p>

            <div onClick={() => handleCallClick()} className="flex flex-wrap justify-between gap-3 text-center mt-3">
              <div className="flex-1  bg-gray-400 p-3 rounded-lg">
                <MdWifiCalling1 className="mx-auto text-lg" />
                <p className="text-sm font-semibold">Call</p>
              </div>

              <div className="flex-1  bg-gray-400 p-3 rounded-lg">
                <MdOutlineTextsms className="mx-auto text-lg" />
                <p className="text-sm font-semibold">Text</p>
              </div>

              <div className="flex-1  bg-gray-400 p-3 rounded-lg">
                <MdOutlineVideocam className="mx-auto text-lg" />
                <p className="text-sm font-semibold">Video</p>
              </div>
            </div>
          </div> */}
          <QuickCheckIn friend={friend} />
        </div>
      </div>
    </div>
  );
};

export default FriendsDetails;
