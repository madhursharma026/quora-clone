import Link from "next/link";
import LoginForm from "./components/Login/LoginForm";
import styles from "../styles/Login/login.module.css";
import SocialMediaBtn from "./components/Login/SocialMediaBtn";

export default function Login() {
    return (
        <div className={`${styles.mainContainer} ${styles.hideScrnAfter400PX}`} style={{ justifyContent: 'center', alignContent: 'center' }}>
            <div className="mx-md-0 mx-3 my-sm-0 my-5">
                <div class="card" style={{ maxWidth: '700px', margin: 'auto' }}>
                    <div class="card-body py-0">
                        <div className="pt-5">
                            <div className="text-center">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/1200px-Quora_logo_2015.svg.png" alt="#ImgNotFound" width="180px" height="50px" />
                                <h6 className="text-secondary mt-2">
                                    A place to share knowledge and better understand the world
                                </h6>
                            </div>
                            <div className="row mt-4">
                                <div className="col-sm-6" style={{ borderRight: '1px solid #DEE0E1' }}>
                                    <div className="h-100">
                                        <p className="text-muted" style={{ fontSize: '14px' }}>By continuing you indicate that you agree to Quora’s <Link href='/login'>Terms of Service</Link> and <Link href='/login'>Privacy Policy.</Link></p>
                                        <SocialMediaBtn />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="h-100">
                                        <h5>Login</h5>
                                        <hr style={{ marginTop: '-3px' }} />
                                        <LoginForm />
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="text-center">
                                <p>New: العربية, עברית, polski, ગુજરાતી, ಕನ್ನಡ, മലയാളം and తెలుగు</p>
                                <p className="p-3" style={{ background: '#F1F2F2', fontSize: '12px' }}>
                                    About - Careers - Privacy - Terms - Contact - Languages - Your Ad - ChoicesPress© Quora, Inc. 2024
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
