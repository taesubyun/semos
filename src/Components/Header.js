const Header = () => {
    return (
        <div className='header' style={{ padding: 0, margin: 0 }}>
            <header
                style={{
                    display: 'flex',
                    paddingTop: '20px',
                    paddingBottom: '20px',
                    fontSize: '25px',
                    borderBottom: '1px solid #e2e2e2',
                }}
            >
                <div style={{ flexBasis: '40%' }}>
                    <div
                        style={{
                            width: '100%',
                        }}
                        className='header_text'
                    >
                        세 모 스
                    </div>
                </div>
                <div
                    style={{
                        flexBasis: '60%',
                        overflow: 'auto',
                    }}
                >
                    <input
                        className='header_input'
                        style={{ float: 'right' }}
                    ></input>
                </div>
            </header>
        </div>
    );
};

export default Header;
