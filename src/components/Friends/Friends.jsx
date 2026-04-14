import FriendCard from "./FriendCard/FriendCard";

const appsPromise = async function () {
  const res = await fetch("http://localhost:3000/data.json");
  const friends = await res.json();
  return friends;
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