import Image from "next/image";

const appsPromise = async function () {
  const res = await fetch("http://localhost:3000/data.json");
  const friends = await res.json();
  return friends;
};

const FriendsDetails = async ({ params }) => {
  const { id } = await params;
  const friends = await appsPromise();
  const friend = friends.find((friend) => String(friend.id) === id);
  console.log(friend);
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
    <div>
      <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center space-y-4 border border-gray-100 mb-10">
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

        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>

        <p className="text-sm text-gray-500">
          Last contact:{" "}
          <span className="font-medium">{days_since_contact} days ago</span>
        </p>

        <div className="flex flex-wrap justify-center gap-2">
          {tags.map((tag, ind) => (
            <span
              key={ind}
              className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <div>
          <span
            className={`inline-block px-4 py-1 rounded-full text-xs font-semibold text-white ${statusColor[status]}`}
          >
            {status.toUpperCase()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FriendsDetails;
