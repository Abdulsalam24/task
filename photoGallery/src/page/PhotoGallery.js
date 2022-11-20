import { useEffect, useState } from "react";
import '../asset/styles/photoGallerystyle.css'

const PhotoGallery = () => {
  const [photos, setPhotos] = useState()
  const [limit, setLimit] = useState(24)


  const getPhotoFromId = (photoId) => {
    return `https://picsum.photos/id/${photoId}/200/200`;
  };

  const handleLimit = () => {
    setLimit((c) => c + 12)
  };

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
    <div className="photoGallery">
      <div className="gallery">
        <header>
          <h1>Photo Wall</h1>
        </header>
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

export default PhotoGallery;
