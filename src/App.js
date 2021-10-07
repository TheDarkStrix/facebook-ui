import CreatePost from "./components/createPost/createPost";
import "bootstrap/dist/css/bootstrap.min.css";
import LeftPlaceHolder from "./components/leftPlaceHolder/leftPlaceHolder";
const App = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-3">
          <LeftPlaceHolder />
        </div>
        <div className="col-md-5">
          <CreatePost />
        </div>
        <div className="col-md-4">
          <LeftPlaceHolder />
        </div>
      </div>
    </>
  );
};

export default App;
