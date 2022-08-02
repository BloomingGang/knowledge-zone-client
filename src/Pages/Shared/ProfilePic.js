import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const ProfilePic = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="flex items-center">
      <div class="avatar online">
        <div class="w-8 rounded-full">
          <img
            src={user?.photoURL || "https://i.ibb.co/whxhPPg/cute-girl.jpg"} alt='profile'/>
        </div>
      </div>
    </div>
  );
};

export default ProfilePic;
