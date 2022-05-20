export default function Video() {
  return (
    <video
      id="background-video"
      className="w-full h-full top-0"
      autoPlay
      loop
      muted
      poster="https://assets.codepen.io/6093409/river.jpg"
    >
      <source type="video/mp4" src="https://tinyurl.com/y5x5jmnf" />
      <source type="video/webm" src="https://tinyurl.com/y6q5jxr6" />
    </video>
  );
}
