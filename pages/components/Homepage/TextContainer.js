export default function TextContainer() {
    return (
        <div class="card">
            <div class="card-body">
                <div className="row">
                    <div className="col-1">
                        <i className="fa fa-user-circle p-1 fs-2" />
                    </div>
                    <div className="col-11">
                        <input type="text" className="w-100 mx-1 mt-1 px-3" style={{ borderRadius: '20px', border: '1px solid black' }} />
                    </div>
                    <div className="col-4 text-center mt-sm-2 mt-3">
                        <i class="fa fa-question-circle fs-5" /> <b>ASK</b>
                    </div>
                    <div className="col-4 text-center mt-sm-2 mt-3" style={{ borderLeft: '2px solid gray', borderRight: '2px solid gray' }}>
                        <div className="d-sm-none">
                            <i class="fa fa-edit fs-5" /> <b>ANS</b>
                        </div>
                        <div className="d-sm-block d-none">
                            <i class="fa fa-edit fs-5" /> <b>ANSWER</b>
                        </div>
                    </div>
                    <div className="col-4 text-center mt-sm-2 mt-3">
                        <i class="fa fa-pencil fs-5" /> <b>POST</b>
                    </div>
                </div>
            </div>
        </div>
    );
}

