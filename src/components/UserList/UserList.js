import User from "./User";
import "../UI/Card.css";
import "./UserList.css";

function UserList(props) {
  if (props.data.length > 0) {
    return (
      <div className="users-list card">
        {props.data.map((user) => (
          <User user={user} key={Math.random().toString()} />
        ))}
      </div>
    );
  }

  return (
    <div>
      <p className="card no-users">No users found...</p>
    </div>
  );
}

export default UserList;
