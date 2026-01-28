import { fetchPhotos, fetchVideos } from "../api/mediaApi";
import { setLoading, setError, setResults } from "../redux/features/searchSlice";
import { useDispatch, useSelector } from "react-redux";

const ResultGrid = () => {
  const dispatch = useDispatch();
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search
  );

 const getData = async () => {
  if (!query.trim()) {
    alert("Please enter a search term");
    return;
  }

  try {
    dispatch(setLoading());

    let data;

    if (activeTab === "photos") {
      data = await fetchPhotos(query);
    } else {
      data = await fetchVideos(query);
    }

    dispatch(setResults(data));

  } catch (err) {
    dispatch(setError(err.message));
  }
};


  return (
    <div className="p-10">
      <button 
        onClick={getData}
        className="bg-blue-600 px-5 py-2 rounded text-white"
      >
        Get Data
      </button>

      {/* Loading */}
      {loading && <p className="mt-4">Loading...</p>}

      {/* Error */}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      {/* Results */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        {results.map((item, idx) => (
          <div key={idx} className="bg-gray-800 p-3 rounded">
            {activeTab === "photos" ? (
              <img 
                src={item.urls?.small} 
                className="rounded"
              />
            ) : (
              <video 
                src={item.video_files?.[0]?.link} 
                controls 
                className="rounded"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultGrid;
