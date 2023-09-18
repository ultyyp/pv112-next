import React, { useState, useEffect } from "react";
import FetchUser from "./FetchUser";

export default function GetUsers() {
  const [ids, setIds] = useState(Array.from({ length: 10 }, (_, index) => index + 1));
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (ids.includes(10)) {
      setLoading(false);
    }
  }, [ids]);

  
  const deleteUser = (idToDelete) => {
    setIds((prevIds) => prevIds.filter((id) => id !== idToDelete));
  };

  return (
    <>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Address</th>
            <th>Company</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {ids.map((id) => (
            <FetchUser id={id} key={id} onDelete={deleteUser} />
          ))}
        </tbody>
      </table>
      {loading ? (
        <p>Loading...</p>
      ) : null}
    </>
  );
}
