import React, { useEffect, useState } from "react";
import { ChatState } from "../Context/ChatProvider";
import { Box } from "@chakra-ui/react";
import SideDrawer from "../components/miscellaneous/sideDrawer";
import MyChats from "../components/MyChats";
import ChatBox from "../components/ChatBox";

const ChatPage = () => {
  const { user } = ChatState();
  const [userInfo, setUserInfo] = useState(null);
  const [fetchAgain, setFetchAgain] = useState(false);

  // console.log("user:", user);

  useEffect(() => {
    setUserInfo(user);
  }, [user]);

  return (
    <div style={{ width: "100%" }}>
      {userInfo && <SideDrawer />}
      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="10px"
      >
        {userInfo && <MyChats fetchAgain={fetchAgain} />}
        {userInfo && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default ChatPage;
