import GlobalStyle from '../../../styles/global.module.css'

export default function MainHeading() {
    return (
        <div class="card">
            <div class="card-body">
                <h6 className={`mt-2 ${GlobalStyle.h5CustomFont}`}>What is the best incident you heard from the Indian Army?</h6>
                <button type="button" class="btn btn-light mx-sm-2 mx-1" style={{ fontSize: '15px' }}>
                    <i class="fa fa-pencil" /> <span className='d-none d-sm-inline-block'>Answer</span>
                </button>
                <button type="button" class="btn btn-outline-light text-black mx-sm-2 mx-1" style={{ fontSize: '15px' }}>
                    <i class="fa fa-wifi" /> <span className='d-none d-sm-inline-block'>Follow 3.2K</span>
                </button>
                <button type="button" class="btn btn-outline-light text-black mx-sm-2 mx-1" style={{ fontSize: '15px' }}>
                    <i class="fa fa-paper-plane" /> <span className='d-none d-sm-inline-block'>Follow 3.2K</span>
                </button>
            </div>
        </div>
    );
}
