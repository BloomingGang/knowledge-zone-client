import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const ProfilePic = () => {
  const [user] = useAuthState(auth);
  return (
<<<<<<< HEAD
    <div>
      <div className="avatar online">
        <div className="w-8 rounded-full">
=======
    <div className="flex items-center">
      <div class="avatar online">
        <div class="w-8 rounded-full">
>>>>>>> 4f7c261c5534712c5652198ca34ea121cc160664
          <img
            src={user?.photoURL || "https://i.ibb.co/whxhPPg/cute-girl.jpg"}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfilePic;
