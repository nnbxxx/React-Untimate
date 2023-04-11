import videoHomepage from "../../assets/video-homepage.webm";
const HomePage = () => {
  return (
    <div className='homepage-container'>
      <video controls>
        <source src={videoHomepage} type='video/mp4' />
      </video>
    </div>
  );
};
export default HomePage;
