import { useSelector } from "react-redux";
import videoHomepage from "../../assets/video-homepage.webm";
import { useNavigate } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";
const HomePage = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const account = useSelector((state) => state.user.account);
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className='homepage-container'>
      <video autoPlay muted loop>
        <source src={videoHomepage} type='video/mp4' />
      </video>
      <div className='homepage-content'>
        <div className='title-1'>{t("homepage.title1")}</div>
        <div className='title-2'>{t("homepage.title2")}</div>
        {isAuthenticated ? (
          <button
            className='btn-3'
            onClick={() => {
              navigate("/users");
            }}
          >
            {t("homepage.title3.user")}
          </button>
        ) : (
          <button
            className='btn-3'
            onClick={() => {
              navigate("/login");
            }}
          >
            {t("homepage.title3.login")}
          </button>
        )}
      </div>
    </div>
  );
};
export default HomePage;
