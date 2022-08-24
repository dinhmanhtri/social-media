import React from "react";
import PostSide from "../../components/PostSide/PostSide.jsx";
import ProfileSide from "../../components/ProfileSide/ProfileSide.jsx";
import RightSide from "../../components/RightSide/RightSide";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <ProfileSide />
      <PostSide />
      <RightSide />
    </div>
  );
};

export default Home;
