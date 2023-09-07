import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTopicList } from "../store/topics";
import { Outlet } from "react-router-dom";
import { getUserLogin } from "../store/app";

const MainLayout = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector(getUserLogin());

  useEffect(() => {
    dispatch(loadTopicList());
  }, []);

  return (
    <>
      <header className="d-flex">
        <h2>Chat-Socket</h2>
        <div>{userLogin}</div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
