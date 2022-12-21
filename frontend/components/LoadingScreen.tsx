import Spinner from "react-bootstrap/Spinner";

const LoadingScreen = () => {
  return (
    <div className="container d-flex justify-content-center">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default LoadingScreen;
