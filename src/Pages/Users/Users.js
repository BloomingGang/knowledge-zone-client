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

  // const {
  //   isLoading,
  //   error,
  //   data: users,
  //   refetch,
  // } = useQuery("users", () =>
  //   fetch("https://frozen-sierra-37797.herokuapp.com/user", {
  //     method: "GET",
  //     headers: {
  //       "content-type": "application/json",
  //       authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //     },
  //   }).then((res) => res.json())
  // );

  // if (isLoading) {
  //   return <Loading></Loading>;
  // }

  return (
    <div className="pt-4 pb-14">
      <h1 className="text-3xl text-center font-bold text-violet-800  mt-4 mb-16">
        All Users
      </h1>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr className="text-center">
              <th className="text-xl text-blue-600">Serial</th>
              <th className="text-xl text-blue-600">Email</th>
              <th className="text-xl text-blue-600">User Role</th>
              <th className="text-xl text-red-500">Delete</th>
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
