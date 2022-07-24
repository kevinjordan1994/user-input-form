import "./User.css";

function User(props) {
  return (
    <div className="user-div">
      <p>
        {props.user.name}, {props.user.age}
      </p>
    </div>
  );
}

export default User;
