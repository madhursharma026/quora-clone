// Scroll wala set krna h ki sirf middle wala hi scrill ho baaki hoo

import Header from "./components/Header";
import Posts from "./components/Homepage/Posts";
import Spaces from "./components/Homepage/Spaces";
import GlobalStyle from "../styles/global.module.css";
import TextContainer from "./components/Homepage/TextContainer";

export default function Home() {
  return (
    <div>
      <Header />
      <div style={{ background: '#F1F2F2' }}>
        <div className={`${GlobalStyle.ContainerWidth} mt-5`}>
          <br className="d-lg-none d-block" /><br className="d-lg-none d-block" /><br className="d-sm-none d-block" />
          <div className="row pt-4 mt-lg-0 mt-2">
            <div className="col-lg-2 col-3 d-md-block d-none">
              <Spaces />
            </div>
            {/* <div className={`col-lg-6 col-md-9 ${GlobalStyle.scrollPosition}`} style={{ overflowX: "hidden", overflowY: "scroll", height: "94vh" }}> */}
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
              <div className="card" style={{ height: '500px', borderRadius: '0' }}>
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
