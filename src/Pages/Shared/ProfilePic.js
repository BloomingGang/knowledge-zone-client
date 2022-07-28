import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const ProfilePic = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <div className="avatar online">
        <div className="w-8 rounded-full">
          <img
            src={user?.photoURL || "https://i.ibb.co/whxhPPg/cute-girl.jpg"}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfilePic;
