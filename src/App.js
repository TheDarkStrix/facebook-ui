import CreatePost from "./components/createPost/createPost";
import "bootstrap/dist/css/bootstrap.min.css";
import LeftPlaceHolder from "./components/leftPlaceHolder/leftPlaceHolder";
import Navbar from "./components/navbar/navbar";
const App = () => {
  return (
    <>
      <Navbar />
      <div className="row mx-2">
        <div className="col-md-3">
          <LeftPlaceHolder />
        </div>
        <div className="col-md-5 mt-3">
          <CreatePost />
        </div>
        <div className="col-md-4">
          <LeftPlaceHolder reverse={true} />
        </div>
      </div>
    </>
  );
};

export default App;
