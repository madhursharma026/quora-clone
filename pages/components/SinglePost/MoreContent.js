import React, { useState } from "react";
import { useTheme } from "@/pages/ThemeContext.js";
import GlobalStyle from '../../../styles/global.module.css';
import styles from "../../../styles/SinglePost/SinglePost.module.css";
import { ListItem, ListItemAvatar, ListItemText } from "@mui/material";

export default function MoreContent() {
    const { darkMode, toggleDarkMode } = useTheme();

    return (
        <div className={`card mt-3 ${darkMode ? `${styles.darkThemeBtn}` : `btn-light`}`} style={{ borderRadius: '0' }}>
            <div className="card-body" style={{ cursor: 'pointer' }}>
                <ListItem className="p-0">
                    <ListItemAvatar>
                        <img src="https://mui.com/static/images/avatar/1.jpg" alt="#ImgNotFound" style={{ width: '40px', borderRadius: '100%' }} />
                    </ListItemAvatar>
                    <ListItemText primary={<><span>Alexandre Strube </span><br /> <span style={{ fontSize: '15px' }}> Supercomputer expert Updated 6y</span></>} />
                </ListItem>
                <span className={GlobalStyle.customFont}>If you’ve been around since the Intel 8086, 80386, 80486, Pentium I, Pentium II, Pentium III, and so on, you might remember this: When you bought a new computer with a new processor it was a huge jump in performance. Believe me, in those days, it was like going from a slow car to a fighter jet plane travelling at two times the speed of sound. You could instantly feel the power you spent money on, you might remember this: When you bought a new computer with a new processor it was a huge jump in performance. Believe me, in those days, it was like going from a slow car to a fighter jet plane travelling at two times the speed of sound. You could instantly feel the power you spent money on. The difference was just incredib... <span className="text-primary" style={{ textDecoration: 'underline' }}>(more)</span></span>
                <hr />
                <button type="button" className="btn btn-light" style={{ fontSize: '13px', borderRadius: '0' }}>
                    <i className="fa fa-arrow-up" /> Upvotes 9.5K
                </button>
                <button type="button" className="btn btn-light" style={{ fontSize: '13px', borderRadius: '0' }}>
                    <i className="fa fa-arrow-down" />
                </button>
                &ensp;
                <i className="fa fa-comments-o" />&nbsp;55
                &ensp;
                <i className="fa fa-rotate-right" />&nbsp;55
            </div>
        </div>
    );
}

