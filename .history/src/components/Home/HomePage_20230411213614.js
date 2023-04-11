import videoHomepage from "../../assets/video-homepage.webm";
const HomePage = () => {
  return (
    <div className='homepage-container'>
      <video width={750} height={500} controls>
        <source src={videoHomepage} type='video/mp4' />
      </video>
    </div>
  );
};
export default HomePage;
