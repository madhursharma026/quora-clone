import { useTheme } from "../../../utils/ThemeContext.js";
import styles from "../../../styles/Homepage/Homepage.module.css";

export default function Spaces() {
    const { darkMode, toggleDarkMode } = useTheme();

    return (
        <>
            <button type="button" className={`btn ${darkMode ? `${styles.darkThemeBtn}` : `btn-light`} w-100 mt-2`}>+ Create Space</button>
            <button type="button" className={`btn ${darkMode ? `${styles.darkThemeBtn}` : `btn-light`} w-100 mt-2`}>Computer Progamming</button>
            <button type="button" className={`btn ${darkMode ? `${styles.darkThemeBtn}` : `btn-light`} w-100 mt-2`}>Computer Progamming</button>
            <button type="button" className={`btn ${darkMode ? `${styles.darkThemeBtn}` : `btn-light`} w-100 mt-2`}>Computer Progamming</button>
            <button type="button" className={`btn ${darkMode ? `${styles.darkThemeBtn}` : `btn-light`} w-100 mt-2`}>Computer Progamming</button>
            <button type="button" className={`btn ${darkMode ? `${styles.darkThemeBtn}` : `btn-light`} w-100 mt-2`}>Computer Progamming</button>
        </>
    );
}
