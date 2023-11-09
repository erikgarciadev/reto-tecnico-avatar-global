import React from "react";
import { URL_IMAGE_NOT_FOUND } from "../../utils/constants";
import PhotoIcon from "../Icons/Photo";
import { classNames } from "../../utils/util";

interface Props
  extends Omit<
    React.ImgHTMLAttributes<HTMLImageElement>,
    "onLoad" | "onError"
  > {
  srcError?: string;
}

export default function Image({
  srcError = URL_IMAGE_NOT_FOUND,
  ...props
}: Props) {
  const [imageSrc, setImageSrc] = React.useState(props.src);
  const [loading, setLoading] = React.useState(true);

  const handleError = () => {
    setImageSrc(srcError);
  };

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <>
          <div
            className={classNames(
              "items-center justify-center  w-full animate-pulse bg-gray-300",
              props.className ?? "h-full",
              loading ? "flex" : "hidden"
            )}
          >
            <PhotoIcon />
          </div>
          <span className="sr-only">Loading...</span>
        </>
      ) : null}
      <img
        {...props}
        className={classNames(
          `w-full object-cover`,
          loading ? `h-0 ` : props.className ?? "h-full"
        )}
        onError={handleError}
        onLoad={handleLoad}
        src={`${imageSrc}`}
      />
    </>
  );
}
