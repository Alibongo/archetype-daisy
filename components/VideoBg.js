export default function Video() {
  return (
    <video
      id="background-video"
      className="w-full h-full"
      autoPlay
      loop="yes"
      muted
      poster="https://assets.codepen.io/6093409/river.jpg"
    >
      <source type="video/mp4" src="./video/hero-vid.mp4" />
      {/* <source type="video/webm" src="https://tinyurl.com/y6q5jxr6" /> */}
    </video>
  );
}
