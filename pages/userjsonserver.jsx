import UserTable from "../components/jsph/UserTable";

//npx json-server --watch db.json --port 5000

export default function UserJsonServer() {
  return (
    <div>
      <h1>User Management App</h1>
      <UserTable/>
    </div>
  );
}
