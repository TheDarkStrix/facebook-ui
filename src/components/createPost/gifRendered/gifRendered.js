import { useState, useEffect } from "react";
import "./gifRender.css";
import axios from "axios";
import Loading from "./loading/loading";

const GifRendered = () => {
  const [gifs, setGifs] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchGif = async () => {
    const response = await axios.get("http://api.giphy.com/v1/gifs/trending", {
      params: {
        api_key: "Rr6XJXDmFfDfiqTHoptbSVVmf8lzQ1Jc",
      },
    });
    if (response.data) {
      console.log(response.data.data);
      setGifs(response.data.data);
      setLoading(false);
    }
  };

  //   const fetchGif = async () => {
  //     const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
  //       params: {
  //         q: "",
  //         api_key: "Rr6XJXDmFfDfiqTHoptbSVVmf8lzQ1Jc",
  //       },
  //     });
  //     if (response.data) {
  //       console.log(response.data.data);
  //       setGifs(response.data.data);
  //       setLoading(false);
  //     }
  //   };

  useEffect(() => {
    fetchGif();
  }, []);
  return (
    <>
      <div className="gifContainer">
        {loading ? (
          <Loading />
        ) : (
          <div>
            {gifs && gifs.length > 0 ? (
              <div>
                <ul className="gifList">
                  {gifs.map((data) => (
                    <li key={data.id}>
                      <img src={data.images.preview_gif.url} alt={data.title} />
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="position-absolute top-50" style={{ left: "40%" }}>
                No results.
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default GifRendered;
