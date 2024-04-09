export default function LoginForm() {
    return (
        <div>
            <label for="exampleInputEmail1" class="form-label" style={{ fontWeight: '500' }}>Email</label>
            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Your Email" style={{ marginTop: '-3px', borderRadius: '0' }} />
            <label for="exampleInputPassword1" class="form-label mt-3" style={{ fontWeight: '500' }}>Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Your Password" style={{ marginTop: '-3px', borderRadius: '0' }} />
            <div className="row">
                <div className="col-6 mt-3">
                    Forgot password?
                </div>
                <div className="col-6 mt-3" style={{ textAlign: 'right' }}>
                    <button type="button" class="btn btn-primary rounded-pill disabled">Login</button>
                </div>
            </div>
        </div>
    );
}

