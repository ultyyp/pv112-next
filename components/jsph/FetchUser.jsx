import { useEffect, useState } from "react";
import OneUser from "./OneUser";

export default function FetchUser({ id, onDelete }) {
  const
    [user, setUser] = useState(null),
    [error, setError] = useState(null),
    ID = id,
    ONDELETE = onDelete;

  useEffect(() => {
    async function f() {
      try {
        const
          response = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
        if (!response.ok) throw new Error('fetch ' + response.status);
        setUser(await response.json());
      } catch (err) {
        setError(err);
      }
    }
    f();
  }, []);


  if (error)
    return <>Error={error.message}</>;
  if (user)
    return <OneUser id={ID} user={user} onDelete={ONDELETE} />

  return <>loading...</>;
}