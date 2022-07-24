import UserInput from "./components/UserInput/UserInput";
import UserList from "./components/UserList/UserList";
import { useState } from "react";
import "./App.css";

function App() {
  const data = [];
  const [currentData, setNewData] = useState(data);

  const addUser = (newUser) => {
    setNewData((prev) => [...prev, newUser]);
  };

  const showInvalidInputsMessage = () => {
    console.log("Please enter a valid user name and age.");
  };

  const showNegativeAgeMessage = () => {
    console.log("Please valid age (greater than 0).");
  };

  return (
    <div className="App">
      <UserInput
        onSubmitNewUser={addUser}
        onInvalidInputs={showInvalidInputsMessage}
        onNegativeAge={showNegativeAgeMessage}
      />
      <UserList data={currentData} />
    </div>
  );
}

export default App;
