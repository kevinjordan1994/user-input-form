import "./UserInput.css";
import Button from "../UI/Button";
import { useState } from "react";
import "../UI/Card.css";

function UserInput(props) {
  const [currentName, setNewName] = useState("");
  const [currentAge, setNewAge] = useState("");

  const nameChangeHandler = (event) => {
    setNewName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setNewAge(event.target.value);
  };

  const invalidInputs = () => {
    return (
      currentName.trim().length === 0 ||
      currentAge.trim().length === 0 ||
      isNaN(currentAge)
    );
  };

  const negativeAge = () => {
    return Number(currentAge) < 0;
  };

  const clearInputFields = () => {
    setNewName("");
    setNewAge("");
  };

  const sendFormData = (event) => {
    event.preventDefault();
    if (invalidInputs()) {
      props.onInvalidInputs();
      return;
    }
    if (negativeAge()) {
      props.onNegativeAge();
      return;
    }
    const newUser = {
      name: currentName,
      age: currentAge,
    };
    props.onSubmitNewUser(newUser);
    clearInputFields();
  };

  return (
    <div className="user-input__container card">
      <form className="form" onSubmit={sendFormData}>
        <div className="input-form">
          <div className="un-field">
            <label>UserName</label>
            <input
              type="text"
              onChange={nameChangeHandler}
              value={currentName}
            />
          </div>
          <div className="age-field">
            <label>Age</label>
            <input type="text" onChange={ageChangeHandler} value={currentAge} />
          </div>
        </div>
        <Button buttonText={"Add User"} />
      </form>
    </div>
  );
}

export default UserInput;
