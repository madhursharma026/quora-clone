import { useTheme } from "@/pages/ThemeContext.js";
import styles from "../../../styles/Homepage/Homepage.module.css";

export default function TextContainer() {
    const { darkMode, toggleDarkMode } = useTheme();
    return (
        <div className={`card ${darkMode ? `${styles.darkThemeBtn}` : `btn-light`}`}>
            <div className="card-body">
                <div className="row">
                    <div className="col-1">
                        <i className="fa fa-user-circle p-1 fs-2" />
                    </div>
                    <div className="col-11">
                        <input type="text" className={`w-100 mx-1 mt-1 px-3 ${darkMode ? `bg-dark text-light` : `bg-light text-dark`}`} style={{ borderRadius: '20px', border: '1px solid black' }} />
                    </div>
                    <div className="col-4 text-center mt-sm-2 mt-3">
                        <i className="fa fa-question-circle fs-5" /> <b>ASK</b>
                    </div>
                    <div className="col-4 text-center mt-sm-2 mt-3" style={{ borderLeft: '2px solid gray', borderRight: '2px solid gray' }}>
                        <div className="d-sm-none">
                            <i className="fa fa-edit fs-5" /> <b>ANS</b>
                        </div>
                        <div className="d-sm-block d-none">
                            <i className="fa fa-edit fs-5" /> <b>ANSWER</b>
                        </div>
                    </div>
                    <div className="col-4 text-center mt-sm-2 mt-3">
                        <i className="fa fa-pencil fs-5" /> <b>POST</b>
                    </div>
                </div>
            </div>
        </div>
    );
}

