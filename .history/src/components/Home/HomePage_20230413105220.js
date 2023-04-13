import { useSelector } from "react-redux";
import videoHomepage from "../../assets/video-homepage.webm";
const HomePage = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const account = useSelector((state) => state.user.account);
  return (
    <div className='homepage-container'>
      <video autoPlay muted loop>
        <source src={videoHomepage} type='video/mp4' />
      </video>
      <div className='homepage-content'>
        <div className='title-1'>There's a better way to ask</div>
        <div className='title-2'>
          You don't want to make a boring form. And your audience won't answer
          one. Create a typeform instead—and make everyone happy.
        </div>
        {isAuthenticated ? (
          <button className='btn-3'>Doing Quiz Now</button>
        ) : (
          <button className='btn-3'>Get's started. It's Free</button>
        )}
      </div>
    </div>
  );
};
export default HomePage;
