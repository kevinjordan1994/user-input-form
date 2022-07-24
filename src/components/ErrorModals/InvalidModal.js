import Button from "../UI/Button";
import "./InvalidModal.css";

function InvalidModal(props) {
  const closeModalWindow = (event) => {
    event.preventDefault();
    props.onCloseWindow();
  };

  return (
    <div>
      <div className="error-modal" onClick={closeModalWindow} />{" "}
      <div className="card error-div">
        <p>{props.message}</p>
        <form onSubmit={closeModalWindow}>
          <Button buttonText="Okay" />
        </form>
      </div>
    </div>
  );
}

export default InvalidModal;
