import { useState, useEffect } from "react";
import "./gifRender.css";
import axios from "axios";
import Loading from "./loading/loading";
import useDebounce from "./use-debounce";

const GifRendered = ({ select }) => {
  const [gifs, setGifs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(null);
  const debouncedSearchTerm = useDebounce(search, 1000);

  const fetchGif = async () => {
    const response = await axios.get("https://api.giphy.com/v1/gifs/trending", {
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

  const searchGif = async (search) => {
    const response = await axios.get("https://api.giphy.com/v1/gifs/search", {
      params: {
        q: search,
        api_key: "Rr6XJXDmFfDfiqTHoptbSVVmf8lzQ1Jc",
      },
    });
    if (response.data) {
      setGifs(response.data.data);
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleGifSelect = (gif) => {
    select(gif);
  };

  useEffect(
    () => {
      if (debouncedSearchTerm) {
        setLoading(true);
        searchGif(debouncedSearchTerm);
      } else {
        if (debouncedSearchTerm === "") {
          fetchGif();
        } else {
          setGifs([]);
        }
      }
    },
    [debouncedSearchTerm] // Only call effect if debounced search term changes
  );

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
            <div className="searchContainer">
              <input
                type="text"
                onChange={handleSearch}
                defaultValue={search == null ? "" : search}
                placeholder="Search ..."
              />
            </div>
            {gifs && gifs.length > 0 ? (
              <div>
                <ul className="gifList">
                  {gifs.map((data) => (
                    <li
                      key={data.id}
                      className="gifList"
                      onClick={() =>
                        handleGifSelect(
                          data.images.fixed_height_downsampled.url
                        )
                      }
                    >
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
