import { useSelector } from "react-redux";
import { Picture } from "../model/Picture";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SearchResponse } from "../model/SearchResponse";

type Props = {
  pictures: Picture[];
};

export const Gallery: React.FC<Props> = ({ pictures }) => {
  /* 
 const picsData: Picture[] = useSelector((state: any) => {
    return state?.pictures?.pictures;
  });
    console.log("[Gallery] PICS DATA:" + JSON.stringify(picsData));
  */

  //console.log("[Gallery] PICS DATA:" + JSON.stringify(picWrapper?.results));

  return (
    <>
      <div className="-m-1 flex flex-wrap md:-m-2">
        {pictures.map((pic, index) => (
          <div
            key={index}
            className="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-1 md:p-2"
          >
            <Image
              className="block mx-auto h-full object-cover object-center rounded-lg shadow-md"
              width={pic.width}
              height={pic.height}
              src={pic.urls.regular}
              alt={pic.alt_description}
            />
          </div>
        ))}
      </div>
    </>
  );
};
