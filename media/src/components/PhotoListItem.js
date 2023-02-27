import { GoTrashcan } from "react-icons/go";
import { useRemovePhotosMutation } from "../store";

function PhotoListItem({ photo }) {
  const [removePhotos] = useRemovePhotosMutation();
  const handleRemovePhoto = () => {
    removePhotos(photo);
  };
  return (
    <div onClick={handleRemovePhoto} className="relative m-2 cursor-pointer ">
      <img className="h-20 w-20" src={photo.url} alt="random pics" />
      <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
        <GoTrashcan className="text-3xl" />
      </div>
    </div>
  );
}

export default PhotoListItem;
