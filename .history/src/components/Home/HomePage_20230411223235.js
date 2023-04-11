import videoHomepage from "../../assets/video-homepage.webm";
const HomePage = () => {
  return (
    <div className='homepage-container'>
      <video autoPlay muted loop>
        <source src={videoHomepage} type='video/mp4' />
      </video>
      <div className='homepage-content'>
        <div className='title-1'>There's a better way to ask</div>
        <div className='title-2'></div>
        <div className='title-3'></div>
      </div>
    </div>
  );
};
export default HomePage;
