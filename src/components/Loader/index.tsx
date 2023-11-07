export default function Loader() {
  return (
    <div className="w-full min-h-[calc(100vh-64px)] flex justify-center items-center">
      <picture>
        <img
          width="150px"
          height="150px"
          className="animate-spin "
          alt=""
          src="/skull-logo.webp"
        />
      </picture>
    </div>
  );
}
