import React from "react";
import Link from "next/link";
import GlobalStyle from '../../../styles/global.module.css'
import { ListItem, ListItemAvatar, ListItemText } from "@mui/material";

export default function Posts() {
    return (
        <Link href="/singlePost" style={{textDecoration: 'none'}}>
        <div class="card mt-3" style={{borderRadius: '0'}}>
            <div class="card-body" style={{ cursor: 'pointer' }}>
                <ListItem className="p-0">
                    <ListItemAvatar>
                        <img src="https://mui.com/static/images/avatar/1.jpg" alt="#ImgNotFound" style={{ width: '40px', borderRadius: '100%' }} />
                    </ListItemAvatar>
                    <ListItemText primary="Alexandre Strube" secondary={'Supercomputer expert Updated 6y'} />
                </ListItem>
                <h6 className={`mt-2 ${GlobalStyle.h5CustomFont}`}>Why does Linux seem so much faster than Windows?</h6>
                <span className={GlobalStyle.customFont}>If you’ve been around since the Intel 8086, 80386, 80486, Pentium I, Pentium II, Pentium III, and so on, you might remember this: When you bought a new computer with a new processor it was a huge jump in performance. Believe me, in those days, it was like going from a slow car to a fighter jet plane travelling at two times the speed of sound. You could instantly feel the power you spent money on. The difference was just incredib... <span className="text-primary" style={{ textDecoration: 'underline' }}>(more)</span></span>
                <img src="https://qph.cf2.quoracdn.net/main-qimg-e189dc4d4ac8ceb6d28096e6421eb9e5-lq" alt="#ImgNotFound" className="w-100 mt-3" />
            </div>
        </div>
        </ Link>
    );
}

