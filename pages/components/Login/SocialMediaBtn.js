import { useState } from "react";
import Modal from 'react-bootstrap/Modal';

export default function SocialMediaBtn() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <button type="button" class="btn btn-outline-light text-black w-100 mt-2" style={{ border: '1px solid #DEE0E1', textAlign: 'left' }}><i class="fa fa-google text-danger fs-5" /> &ensp;Continue With Google</button>
            <button type="button" class="btn btn-outline-light text-black w-100 mt-2" style={{ border: '1px solid #DEE0E1', textAlign: 'left' }}><i class="fa fa-facebook-square text-primary fs-5" /> &ensp;Continue With Facebook</button>
            <button type="button" class="btn btn-outline-light text-muted w-100 mt-2" style={{ fontSize: '14px' }} onClick={() => handleShow()}><b>Sign up with email</b></button>

            <Modal show={show} onHide={handleClose} centered backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h5>Sign up</h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label for="exampleInputEmail1" class="form-label" style={{ fontWeight: '500' }}>Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Your Email" style={{ marginTop: '-3px', borderRadius: '0' }} />
                    <label for="exampleInputPassword1" class="form-label mt-3" style={{ fontWeight: '500' }}>Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Your Password" style={{ marginTop: '-3px', borderRadius: '0' }} />
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" class="btn btn-primary rounded-pill disabled">Login</button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
