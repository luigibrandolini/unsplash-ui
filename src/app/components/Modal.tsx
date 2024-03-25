import React from "react";
import Image, { ImageProps } from "next/image";
import { Picture } from "../model/Picture";

interface ModalProps {
  selectedImage: Picture | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  addToFavorites: () => void;
  selectedIndex: number;
}

export default function Modal({
  selectedImage,
  onClose,
  onNext,
  onPrev,
  addToFavorites,
  selectedIndex,
}: ModalProps) {
  return (
    selectedImage && (
      <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-25">
        <div className="max-w-screen-lg mx-4">
          <div className="bg-white px-4 pb-4">
            <div className="flex flex-row justify-between text-center items-center py-3">
              <div className="relative">
                <button onClick={addToFavorites}>
                  <svg
                    className="h-10 w-10"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                  </svg>
                </button>
              </div>
              <button
                className=" bg-gray-600 bg-opacity-50 py-1 px-2.5 hover:bg-gray-400
                  hover:bg-opacity-70 transition-all rounded-full text-xl text-white font-bold"
                onClick={onClose}
              >
                &#10005;
              </button>
            </div>
            <div className="relative">
              <button
                className="absolute top-1/2 transform -translate-y-1/2 left-0
               text-white py-6 px-4 md:py-24 md:px-4 text-2xl md:text-5xl"
                onClick={onPrev}
              >
                &lt;
              </button>

              <button
                className="absolute top-1/2 transform -translate-y-1/2 right-0
              text-white py-6 px-4 md:py-24 md:px-4 text-3xl md:text-5xl"
                onClick={onNext}
              >
                &gt;
              </button>

              <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                <span
                  className="text-black text-opacity-80 text-lg font-bold"
                  style={{ color: "white" }}
                >
                  {selectedImage.description}
                </span>
              </div>

              <Image
                src={selectedImage.urls.regular}
                alt="Selected Image"
                height={800}
                width={600}
              />
            </div>
          </div>
        </div>
      </div>
    )
  );
}
