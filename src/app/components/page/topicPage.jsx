import React from "react";
import { useSelector } from "react-redux";
import { getTopicList, getTopicsLoadingStatus } from "../../store/topics";
import Topic from "../ui/topic";

const TopicPage = () => {
  const isLoading = useSelector(getTopicsLoadingStatus());
  const topics = useSelector(getTopicList());
  if (isLoading)
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status"></div>
      </div>
    );
  return (
    <div className="py-3">
      {topics.map((item) => (
        <Topic key={item.id} title={item.title} />
      ))}
    </div>
  );
};

export default TopicPage;
