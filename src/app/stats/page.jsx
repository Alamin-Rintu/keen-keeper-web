"use client";

import { useContext } from "react";
import { FriendDetailContext } from "@/context/ContextProvider";
import { PieChart, Pie, ResponsiveContainer, Tooltip, Legend } from "recharts";

const TimeLinePage = () => {
  const { callFriend, textFriend, videoFriend } =
    useContext(FriendDetailContext);

  const chartData = [
    { name: "Call", value: callFriend?.length || 0, fill: "#0088FE"},
    { name: "Text", value: textFriend?.length || 0, fill: "#FF8042" },
    { name: "Video", value: videoFriend?.length || 0 },
  ];

  return (
    <div className="container mx-auto mt-10 mb-10">
      <h3 className="text-2xl font-bold mb-6">Friendship Analytics</h3>

      <div style={{ width: "100%", height: 350 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              innerRadius="60%"
              outerRadius="90%"
              paddingAngle={5}
              cornerRadius={8}
              fill="#8884d8"
              isAnimationActive={true}
              label
            />
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TimeLinePage;