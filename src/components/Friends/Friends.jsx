import FriendCard from "./FriendCard/FriendCard";
import Link from "next/link";
import { readFile } from "node:fs/promises";
import path from "node:path";

const appsPromise = async function () {
    const filePath = path.join(process.cwd(), "public", "data.json");
  const getfriendsData = JSON.parse(await readFile(filePath, "utf-8"));
//   const res = await fetch("http://localhost:3000/data.json");
//   const friends = await res.json();
  return getfriendsData;
};

const Friends = async() => {
   const friends = await appsPromise();
//    console.log(friends)
    return (
        <div>
            <h3 className="font-bold text-2xl mb-5">Your Friends</h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    friends.map(friend=> <FriendCard key={friend.id} friend={friend}/>)
                }
            </div>
            
        </div>
    );
};

export default Friends;