import Link from "next/link";
import Header from "./components/Header";
import GlobalStyle from "../styles/global.module.css";
import MainHeading from "./components/SinglePost/MainHeading";
import MoreContent from "./components/SinglePost/MoreContent";

export default function Home() {
    return (
        <div>
            <Header />
            <div style={{ background: '#F1F2F2' }}>
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
                        <div className="col-lg-4 col-md-5 p-0">
                            <div className="card" style={{ height: '500px', borderRadius: '0' }}>
                                <div className="card-body">
                                    <h6>Related questions</h6>
                                    <hr />
                                    <div class="list-group list-group-flush" style={{ marginTop: '-15px', fontSize: '15px' }}>
                                        <Link href="#" class="list-group-item list-group-item-action text-primary">Which is the least heard story of Indian Army?</Link>
                                        <Link href="#" class="list-group-item list-group-item-action text-primary">Which is the least heard story of Indian Army?</Link>
                                        <Link href="#" class="list-group-item list-group-item-action text-primary">Which is the least heard story of Indian Army?</Link>
                                        <Link href="#" class="list-group-item list-group-item-action text-primary">Which is the least heard story of Indian Army?</Link>
                                        <Link href="#" class="list-group-item list-group-item-action text-primary">Which is the least heard story of Indian Army?</Link>
                                        <Link href="#" class="list-group-item list-group-item-action text-primary">Which is the least heard story of Indian Army?</Link>
                                        <Link href="#" class="list-group-item list-group-item-action text-primary">Which is the least heard story of Indian Army?</Link>
                                        <Link href="#" class="list-group-item list-group-item-action text-primary">Which is the least heard story of Indian Army?</Link>
                                        <Link href="#" class="list-group-item list-group-item-action text-primary">Which is the least heard story of Indian Army?</Link>
                                        <Link href="#" class="list-group-item list-group-item-action text-primary">Which is the least heard story of Indian Army?</Link>
                                        <Link href="#" class="list-group-item list-group-item-action text-primary">Which is the least heard story of Indian Army?</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-3" style={{ height: '500px', borderRadius: '0' }}>
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
