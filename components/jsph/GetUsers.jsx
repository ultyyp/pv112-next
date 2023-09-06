import { useState } from "react";
import FetchUser from "./FetchUser";

export default function GetUsers() {
  const [ids, setIds] = useState([1]);
  if(ids.find(num => num == 10)) return <>
    {ids.map(id => <FetchUser id={id} key={id} />)}
  </>
  return <>
    {ids.map(id => <FetchUser id={id} key={id} />)}
    <button onClick={()=>setIds(ids.concat(ids.length + 1))}>load users</button>
  </>
}