import YoutubeIcon from "../Icons/Youtube";

interface Props {
  url: string;
}

export default function ButtonTrailer({ url }: Props) {
  return (
    <a href={url} target="_blank" rel="noreferrer noopener">
      <button className="w-full my-2 font-semibold flex justify-center items-center bg-red-600 gap-2 p-2">
        <YoutubeIcon />
        Ver Trailer
      </button>
    </a>
  );
}
