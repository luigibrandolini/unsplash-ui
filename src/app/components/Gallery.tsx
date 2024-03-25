import { Picture } from "../model/Picture";
import Image from "next/image";
import { useState } from "react";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { addPictureToFavorites } from "@/lib/state/actions";

type Props = {
  pictures: Picture[];
};

export const Gallery: React.FC<Props> = ({ pictures }) => {

 const favoritePics: Picture[] = useSelector((state: any) => {
    return state?.favorites;
  });
  
  console.log("[Gallery] Favorites:" + JSON.stringify(favoritePics));

  const [selectedImage, setSelectedImage] = useState<Picture | null>(null);
  const [selectedIndex] = useState<number>(0);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const dispatch = useDispatch();

  const handleOnClicked = (pic: Picture, index: number) => {
    setSelectedImage(pic);
    setCurrentImageIndex(index);
  };

  const handleNext = () => {
    const nextIndex =
      currentImageIndex === pictures.length - 1 ? 0 : currentImageIndex + 1;
    setSelectedImage(pictures[nextIndex]);
    setCurrentImageIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex =
      currentImageIndex === 0 ? pictures.length - 1 : currentImageIndex - 1;
    setSelectedImage(pictures[prevIndex]);
    setCurrentImageIndex(prevIndex);
  };

  function handleClose(): void {
    setSelectedImage(null);
  }

  const handleFavorites = () => {
   // dispatch(addPictureToFavorites(selectedImage));
  };

  return (
    <>
      <div className="-m-1 flex flex-wrap md:-m-2">
        {pictures?.map((pic, index) => (
          <div
            key={index}
            className="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-1 md:p-2"
          >
            <Image
              style={{
                cursor: "pointer",
              }}
              className="block mx-auto h-full object-cover object-center rounded-lg shadow-md"
              width={pic.width}
              height={pic.height}
              src={pic.urls.regular}
              alt={pic.alt_description}
              onClick={() => handleOnClicked(pic, index)}
            />
          </div>
        ))}

        {selectedImage && (
          <Modal
            selectedImage={selectedImage}
            onNext={handleNext}
            onPrev={handlePrev}
            selectedIndex={selectedIndex}
            onClose={handleClose}
            addToFavorites={handleFavorites}
          />
        )}
      </div>
    </>
  );
};