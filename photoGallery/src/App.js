
import { useEffect, useState } from "react";

const App = () => {
  const [photos, setPhotos] = useState()
  const [limit, setLimit] = useState(24)

  // This URL can be combined with a photo id to fetch a photo.
  const getPhotoFromId = (photoId) => {
    return `https://picsum.photos/id/${photoId}/200/200`;
  };

  const handleLimit = () => {
    setLimit((c) => c + 12)
  };
  // This URL can be used to get an array of objects that contain information about various photos.
  const PHOTO_LIST_URL = `https://picsum.photos/v2/list?page=2&limit=${limit}`;

  useEffect(() => {
    const fetchPhoto = async () => {
      const res = await fetch(PHOTO_LIST_URL)
      const data = await res.json()
      setPhotos(data)
    }
    fetchPhoto()
  }, [limit])

  return (
    <div className="App">
        <header>
          <h1>Photo Wall</h1>
        </header>
      <div className="gallery">
        <div className="collage">
          {photos && photos.map((photo) => (
            <img
              onClick={() => getPhotoFromId(photo.id)}
              key={photo.id}
              alt={photo.filename}
              src={photo.download_url}
            />
          ))}
        </div>
        <div className="flex-btn">
          <button onClick={handleLimit}>append + 12</button>
        </div>
      </div>
    </div>
  );
};
export default App