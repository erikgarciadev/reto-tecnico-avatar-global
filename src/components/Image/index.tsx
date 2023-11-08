import React from "react";
import { URL_IMAGE_NOT_FOUND } from "../../utils/constants";
import PhotoIcon from "../Icons/Photo";
import { classNames } from "../../utils/util";

interface Props {
  height: number;
  src: string;
}

export default function Image({ height, src }: Props) {
  const [imageSrc, setImageSrc] = React.useState(src);
  const [loading, setLoading] = React.useState(true);

  const handleError = () => {
    setImageSrc(URL_IMAGE_NOT_FOUND);
  };

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <>
          <div
            style={{ height: `${height}px` }}
            className={classNames(
              "items-center justify-center w-full animate-pulse bg-gray-300",
              loading ? "flex" : "hidden"
            )}
          >
            <PhotoIcon />
          </div>
          <span className="sr-only">Loading...</span>
        </>
      ) : null}
      <img
        style={{ height: loading ? "0px" : `${height}px` }}
        className="w-full object-cover"
        alt="Image Character"
        src={`${imageSrc}`}
        loading="lazy"
        height={`${height}px`}
        width={"215px"}
        onError={handleError}
        onLoad={handleLoad}
      />
    </>
  );
}
