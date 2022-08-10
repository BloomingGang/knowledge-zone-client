import React, { useEffect, useState } from "react";
import UserRow from "./UserRow";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://immense-meadow-70411.herokuapp.com/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [users]);

 

  return (
    <div className="pt-4 pb-14">
      <h1 className="text-3xl font-bold text-center p-4">All Users</h1>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th className="text-xl">Email</th>
              <th className="text-xl">Role</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <UserRow key={user._id} user={user} index={index}></UserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
