import Link from "next/link";
import styles from '../../styles/Header.module.css'
import GlobalStyle from '../../styles/global.module.css'
import { InputAdornment, TextField } from "@mui/material";

export default function Header() {
    return (
        <div className={`fixed-top bg-white ${styles.headerContainer}`} style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}>
            <div className={`${GlobalStyle.ContainerWidth}`}>
                <div className='d-lg-block d-none'>
                    <nav className="navbar navbar-expand-lg py-0">
                        <Link className="navbar-brand" href="/">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/1200px-Quora_logo_2015.svg.png" alt="#ImgNotFound" width="78px" height="25px" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mx-2">
                                <li className={`nav-item ${styles.activeHeaderItems}`}>
                                    <Link className={`nav-link px-3 ${styles.headerLinks} ${styles.activeheaderLinks}`} href="/"><i className="fa fa-home p-1" /></Link>
                                </li>
                                <li className={`nav-item ${styles.headerItems}`}>
                                    <Link className={`nav-link px-3 ${styles.headerLinks}`} href="/"><i className="fa fa-building-o p-1" /></Link>
                                </li>
                                <li className={`nav-item ${styles.headerItems}`}>
                                    <Link className={`nav-link px-3 ${styles.headerLinks}`} href="/"><i className="fa fa-edit p-1" /></Link>
                                </li>
                                <li className={`nav-item ${styles.headerItems}`}>
                                    <Link className={`nav-link px-3 ${styles.headerLinks}`} href="/"><i className="fa fa-users p-1" /></Link>
                                </li>
                                <li className={`nav-item ${styles.headerItems}`}>
                                    <Link className={`nav-link px-3 ${styles.headerLinks}`} href="/"><i className="fa fa-bell-o p-1" /></Link>
                                </li>
                                <li className={`nav-item pt-2 ${styles.headerItems}`}>
                                    <TextField className={`${styles.responsiveInput}`} id="outlined-start-adornment" size="small" InputProps={{ startAdornment: <InputAdornment position="start"><i className="fa fa-search" /></InputAdornment> }} />
                                </li>
                            </ul>
                            <div className="d-flex">
                                <button type="button" className="btn btn-light px-xl-4 px-3 py-0 text-secondary" style={{ borderRadius: '30px', fontSize: '14px' }}><b>Try Quora +</b></button>
                                <Link className={`px-2 ${styles.headerLinks}`} href="/"><i className="fa fa-user-circle p-1" /></Link>
                                <Link className={`px-2 ${styles.headerLinks}`} href="/"><i className="fa fa-globe p-1" /></Link>
                                <button type="button" className="btn btn-danger px-xl-4 px-3 py-0" style={{ borderRadius: '30px', fontSize: '14px' }}><b>Add Questions</b></button>
                            </div>
                        </div>
                    </nav>
                </div>

                <div className='d-lg-none d-block'>
                    <div className="row p-2 text-center" style={{ background: '#A91F00' }}>
                        <div className="col-sm-2 col-md-3 col-4">
                            <Link className="navbar-brand" href="/">
                                <img src="https://assets.fontsinuse.com/use-media/16896/upto-700xauto/56702dda/1/png/Color.png" alt="#ImgNotFound" style={{ maxWidth: '100px', width: '100%' }} />
                            </Link>
                        </div>
                        <div className="col-sm-8 col-md-6 col-6">
                            <TextField className={`w-100`} style={{ border: '2px solid white', borderRadius: '10px' }} id="outlined-start-adornment" size="small" InputProps={{ style: { color: 'white' }, startAdornment: <InputAdornment position="start"><i className="fa fa-search text-white" /></InputAdornment> }} />
                        </div>
                        <div className="col-2">
                            <button type="button" className="btn bg-transparent text-white"><b><i className="fa fa-plus-circle fs-5" /> &nbsp; <span className="d-md-inline-block d-none">Add</span> </b></button>
                        </div>
                    </div>
                    <div className="row">
                        <Link style={{ border: '1px solid #6C757D' }} className={`col p-2 text-center ${styles.headerLinks} ${styles.activeheaderLinks}`} href="/"><i className="fa fa-home p-1" /></Link>
                        <Link style={{ border: '1px solid #6C757D' }} className={`col p-2 text-center ${styles.headerLinks} text-secondary`} href="/"><i className="fa fa-building-o p-1" /></Link>
                        <Link style={{ border: '1px solid #6C757D' }} className={`col p-2 text-center ${styles.headerLinks} text-secondary`} href="/"><i className="fa fa-edit p-1" /></Link>
                        <Link style={{ border: '1px solid #6C757D' }} className={`col p-2 text-center ${styles.headerLinks} text-secondary`} href="/"><i className="fa fa-users p-1" /></Link>
                        <Link style={{ border: '1px solid #6C757D' }} className={`col p-2 text-center ${styles.headerLinks} text-secondary`} href="/"><i className="fa fa-bell-o p-1" /></Link>
                        <Link style={{ border: '1px solid #6C757D' }} className={`col p-2 text-center ${styles.headerLinks} text-secondary`} href="/"><i className="fa fa-user-circle p-1" /></Link>
                        <Link style={{ border: '1px solid #6C757D' }} className={`col p-2 text-center ${styles.headerLinks} text-secondary`} href="/"><i className="fa fa-globe p-1" /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
