import React from "react";
import User from "./User";
import useGetAllUsers from "../../context/useGetAllUsers";

function Users() {
  const [allUsers, loading] = useGetAllUsers();
  console.log("allUsers in Users:", allUsers);

  if (loading) {
    return <p>Loading...</p>;
  }

  // Ensure allUsers is an array or default to an empty array
  const users = Array.isArray(allUsers) ? allUsers : allUsers?.filteredUsers || [];

  return (
    <div>
      <h1 className="px-8 py-2 text-white font-semibold bg-slate-800 rounded-md">
        Messages
      </h1>
      <div
        className="py-2 flex-1 overflow-y-auto"
        style={{ maxHeight: "calc(84vh - 10vh)" }}
      >
        {users.length > 0 ? (
          users.map((user, index) => <User key={index} user={user} />)
        ) : (
          <p>No users found.</p>
        )}
      </div>
    </div>
  );
}

export default Users;
