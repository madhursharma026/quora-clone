import React from "react";
import GlobalStyle from '../../../styles/global.module.css';
import { ListItem, ListItemAvatar, ListItemText } from "@mui/material";


export default function MoreContent() {
    return (
        <div class="card mt-3" style={{ borderRadius: '0' }}>
            <div class="card-body" style={{ cursor: 'pointer' }}>
                <ListItem className="p-0">
                    <ListItemAvatar>
                        <img src="https://mui.com/static/images/avatar/1.jpg" alt="#ImgNotFound" style={{ width: '40px', borderRadius: '100%' }} />
                    </ListItemAvatar>
                    <ListItemText primary="Alexandre Strube" secondary={'Supercomputer expert Updated 6y'} />
                </ListItem>
                <span className={GlobalStyle.customFont}>If you’ve been around since the Intel 8086, 80386, 80486, Pentium I, Pentium II, Pentium III, and so on, you might remember this: When you bought a new computer with a new processor it was a huge jump in performance. Believe me, in those days, it was like going from a slow car to a fighter jet plane travelling at two times the speed of sound. You could instantly feel the power you spent money on, you might remember this: When you bought a new computer with a new processor it was a huge jump in performance. Believe me, in those days, it was like going from a slow car to a fighter jet plane travelling at two times the speed of sound. You could instantly feel the power you spent money on. The difference was just incredib... <span className="text-primary" style={{ textDecoration: 'underline' }}>(more)</span></span>
                <hr />
                <button type="button" class="btn btn-light" style={{ fontSize: '13px' }}>
                    <i class="fa fa-arrow-up" /> Upvotes 9.5K
                </button>
                <button type="button" class="btn btn-light" style={{ fontSize: '13px' }}>
                    <i class="fa fa-arrow-down" />
                </button>
                &ensp;
                <i class="fa fa-comments-o" />&nbsp;55
                &ensp;
                <i class="fa fa-rotate-right" />&nbsp;55
            </div>
        </div>
    );
}

