import CreatePost from "./components/createPost/createPost";
import "bootstrap/dist/css/bootstrap.min.css";
import LeftPlaceHolder from "./components/leftPlaceHolder/leftPlaceHolder";
import Navbar from "./components/navbar/navbar";
import useWindowSize from "./components/createPost/gifRendered/use-window";
const App = () => {
  const size = useWindowSize();

  return (
    <>
      <Navbar />
      <div className="row mx-2">
        {size.width > 768 ? (
          <div className="col-md-3">
            <LeftPlaceHolder />
          </div>
        ) : (
          ""
        )}
        <div className="col-md-5 mt-3">
          <CreatePost />
        </div>
        {size.width > 768 ? (
          <div className="col-md-4">
            <LeftPlaceHolder reverse={true} />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default App;
