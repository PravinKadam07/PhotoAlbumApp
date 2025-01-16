import Masonry from "react-masonry-css";
import PhotoCard from "./PhotoCard";

export default function PhotoGallery({ photos }) {
  const breakpointColumnsObj = {
    default: 4,
    1100: 4,
    768: 3,
    480: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="flex gap-4"
      columnClassName="bg-clip-padding"
    >
      {photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </Masonry>
  );
}
