import React from "react";
import "./ProfileCard.css";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";

const ProfileCard = () => {
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="Cover" />
        <img src={Profile} alt="Profile" />
      </div>

      <div className="ProfileName">
        <span>Manh Tri</span>
        <span>Web Developer</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>6,890</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>1</span>
            <span>Followers</span>
          </div>
        </div>
        <hr />
      </div>

      <span>
        My Profile
      </span>
    </div>
  );
};

export default ProfileCard;
