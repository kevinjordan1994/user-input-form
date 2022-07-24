import UserInput from "./components/UserInput/UserInput";
import UserList from "./components/UserList/UserList";
import InvalidModal from "./components/ErrorModals/InvalidModal";
import { useState } from "react";

function App() {
  const data = [];
  const [currentData, setNewData] = useState(data);
  const [inputFormVisible, toggleInputForm] = useState(false);
  const [ageFormVisible, toggleAgeForm] = useState(false);

  const addUser = (newUser) => {
    setNewData((prev) => [...prev, newUser]);
  };

  const toggleErrorWindow = () => {
    toggleInputForm(!inputFormVisible);
  };

  const toggleNegativeAgeMessage = () => {
    toggleAgeForm(!ageFormVisible);
  };

  return (
    <div className="App">
      {inputFormVisible && (
        <InvalidModal
          onCloseWindow={toggleErrorWindow}
          message="Please enter a valid username and age."
        />
      )}
      {ageFormVisible && (
        <InvalidModal
          onCloseWindow={toggleNegativeAgeMessage}
          message="Please enter a valid age (greater than 0)."
        />
      )}
      <UserInput
        onSubmitNewUser={addUser}
        onInvalidInputs={toggleErrorWindow}
        onNegativeAge={toggleNegativeAgeMessage}
      />
      <UserList data={currentData} />
    </div>
  );
}

export default App;
