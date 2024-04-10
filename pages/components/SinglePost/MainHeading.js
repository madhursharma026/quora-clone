import { useTheme } from "../ThemeContext.js";
import GlobalStyle from '../../../styles/global.module.css'
import styles from "../../../styles/SinglePost/SinglePost.module.css";

export default function MainHeading() {
    const { darkMode, toggleDarkMode } = useTheme();

    return (
        <div className={`card ${darkMode ? `${styles.darkThemeBtn}` : `btn-light`}`}>
            <div className="card-body">
                <h6 className={`mt-2 ${GlobalStyle.h5CustomFont}`}>What is the best incident you heard from the Indian Army?</h6>
                <button type="button" className="btn btn-light mx-sm-2 mx-1" style={{ fontSize: '15px' }}>
                    <i className="fa fa-pencil" /> <span className='d-none d-sm-inline-block'>Answer</span>
                </button>
                <button type="button" className="btn btn-light mx-sm-2 mx-1" style={{ fontSize: '15px' }}>
                    <i className="fa fa-wifi" /> <span className='d-none d-sm-inline-block'>Follow 3.2K</span>
                </button>
                <button type="button" className="btn btn-light mx-sm-2 mx-1" style={{ fontSize: '15px' }}>
                    <i className="fa fa-paper-plane" /> <span className='d-none d-sm-inline-block'>Reply 3.2K</span>
                </button>
            </div>
        </div>
    );
}

