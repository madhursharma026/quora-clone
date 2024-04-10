import Link from "next/link";
import Header from "./components/Header";
import GlobalStyle from "../styles/global.module.css";
import { useTheme } from "./components/ThemeContext.js";
import MainHeading from "./components/SinglePost/MainHeading";
import MoreContent from "./components/SinglePost/MoreContent";
import styles from "../styles/SinglePost/SinglePost.module.css";

export default function Home() {
    const { darkMode, toggleDarkMode } = useTheme();

    return (
        <div>
            <Header />
            <div className={darkMode ? `${styles.darkThemeContainer}` : `${styles.lightThemeContainer}`}>
                <div className={`${GlobalStyle.ContainerWidth} mt-5`}>
                    <br className="d-lg-none d-block" /><br className="d-lg-none d-block" /><br className="d-sm-none d-block" />
                    <div className="row pt-4 mt-lg-0 mt-2">
                        <div className={`col-lg-8 col-md-7`}>
                            <MainHeading />
                            <MoreContent />
                            <MoreContent />
                            <MoreContent />
                            <MoreContent />
                            <MoreContent />
                            <br /><br />
                        </div>
                        <div className="col-lg-4 col-md-5 p-0 d-md-block d-none">
                            <div className={`card ${darkMode ? `${styles.darkThemeBtn}` : `btn-light`}`} style={{ height: '500px', borderRadius: '0' }}>
                                <div className="card-body">
                                    <h6>Related questions</h6>
                                    <hr />
                                    <div className="list-group list-group-flush" style={{ marginTop: '-15px', fontSize: '15px' }}>
                                        <Link href="#" className={`list-group-item list-group-item-action ${darkMode ? `${styles.darkThemeBtn}` : `btn-light`}`}>Which is the least heard story of Indian Army?</Link>
                                        <Link href="#" className={`list-group-item list-group-item-action ${darkMode ? `${styles.darkThemeBtn}` : `btn-light`}`}>Which is the least heard story of Indian Army?</Link>
                                        <Link href="#" className={`list-group-item list-group-item-action ${darkMode ? `${styles.darkThemeBtn}` : `btn-light`}`}>Which is the least heard story of Indian Army?</Link>
                                        <Link href="#" className={`list-group-item list-group-item-action ${darkMode ? `${styles.darkThemeBtn}` : `btn-light`}`}>Which is the least heard story of Indian Army?</Link>
                                        <Link href="#" className={`list-group-item list-group-item-action ${darkMode ? `${styles.darkThemeBtn}` : `btn-light`}`}>Which is the least heard story of Indian Army?</Link>
                                        <Link href="#" className={`list-group-item list-group-item-action ${darkMode ? `${styles.darkThemeBtn}` : `btn-light`}`}>Which is the least heard story of Indian Army?</Link>
                                        <Link href="#" className={`list-group-item list-group-item-action ${darkMode ? `${styles.darkThemeBtn}` : `btn-light`}`}>Which is the least heard story of Indian Army?</Link>
                                        <Link href="#" className={`list-group-item list-group-item-action ${darkMode ? `${styles.darkThemeBtn}` : `btn-light`}`}>Which is the least heard story of Indian Army?</Link>
                                        <Link href="#" className={`list-group-item list-group-item-action ${darkMode ? `${styles.darkThemeBtn}` : `btn-light`}`}>Which is the least heard story of Indian Army?</Link>
                                        <Link href="#" className={`list-group-item list-group-item-action ${darkMode ? `${styles.darkThemeBtn}` : `btn-light`}`}>Which is the least heard story of Indian Army?</Link>
                                        <Link href="#" className={`list-group-item list-group-item-action ${darkMode ? `${styles.darkThemeBtn}` : `btn-light`}`}>Which is the least heard story of Indian Army?</Link>
                                    </div>
                                </div>
                            </div>
                            <div className={`card mt-3 ${darkMode ? `${styles.darkThemeBtn}` : `btn-light`}`} style={{ height: '500px', borderRadius: '0' }}>
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

