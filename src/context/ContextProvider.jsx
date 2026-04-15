"use client";
import { createContext, useState } from "react";

export const FriendDetailContext = createContext();

const ContextProvider = ({ children }) => {
  const [callFriend, setCallFriend] = useState([]);
  const [textFriend, setTextFriend] = useState([]);
  const [videoFriend, setVideoFriend] = useState([]);
  const data = {
    callFriend,
    setCallFriend,
    textFriend,
    setTextFriend,
    videoFriend,
    setVideoFriend,
  };
  return (
    <FriendDetailContext.Provider value={data}>
      {children}
    </FriendDetailContext.Provider>
  );
};

export default ContextProvider;
