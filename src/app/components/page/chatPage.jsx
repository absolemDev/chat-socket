import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChatLoadingStatus, getChatMessages, getMessageList } from "../../store/chat";

const ChatPage = () => {
  const message = useSelector(getChatMessages());
  const isLoading = useSelector(getChatLoadingStatus());
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMessageList());
  }, []);
  return (
    <>
      {message.map((item) => (
        <></>
      ))}
    </>
  );
};

export default ChatPage;
