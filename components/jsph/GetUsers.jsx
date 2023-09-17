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

  const loadMoreUsers = () => {
    setLoading(true);
    setIds((prevIds) => {
      const nextId = prevIds[prevIds.length - 1] + 1;
      return [...prevIds, nextId];
    });
  };

  return (
    <>
      {ids.map((id) => (
        <FetchUser id={id} key={id} />
      ))}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <button onClick={loadMoreUsers}>Load More Users</button>
      )}
    </>
  );
}
