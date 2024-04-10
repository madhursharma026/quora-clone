import Header from "./components/Header";
import Posts from "./components/Homepage/Posts";
import Spaces from "./components/Homepage/Spaces";
import GlobalStyle from "../styles/global.module.css";
import { useTheme } from "./components/ThemeContext.js";
import styles from "../styles/Homepage/Homepage.module.css";
import TextContainer from "./components/Homepage/TextContainer";

export default function Home() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div>
      <Header />
        <div className={darkMode ? `${styles.darkThemeContainer}` : ''}>
        <div className={`${GlobalStyle.ContainerWidth} mt-5`}>
          <br className="d-lg-none d-block" /><br className="d-lg-none d-block" /><br className="d-sm-none d-block" />
          <div className="row pt-4 mt-lg-0 mt-2">
            <div className="col-lg-2 col-3 d-md-block d-none">
              <Spaces />
            </div>
            <div className={`col-lg-6 col-md-9`}>
              <TextContainer />
              <Posts />
              <Posts />
              <Posts />
              <Posts />
              <Posts />
              <Posts />
              <Posts />
              <Posts />
              <br /><br />
            </div>
            <div className="col-lg-4 d-lg-block d-none">
              <div className={`card ${darkMode ? `${styles.darkThemeBtn}` : `btn-light`}`} style={{ height: '500px', borderRadius: '0' }}>
                <div className="card-body text-center">
                  <h6>No Advertisement</h6>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
