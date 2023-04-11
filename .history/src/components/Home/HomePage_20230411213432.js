import videoHomepage from "../../assets/video-homepage.webm";
const HomePage = () => {
  return (
    <div className='homepage-container'>
      <video>
        <source url='videoHomepage' />
      </video>
    </div>
  );
};
export default HomePage;
