import "./ErrorMessage.css";

function ErrorMessage({ message, onRetry }) {
  return (
    <div className="error">

      <h2>Something Went Wrong!</h2>

      <p>{message}</p>

      <button onClick={onRetry}>

        Retry

      </button>

    </div>
  );
}

export default ErrorMessage;