import Icon from '../assets/icon.png';

const HeaderLoca = () => {
    return (
        <div
            style={{
                width: '100%',
                display: 'flex',
                padding: '25px 0',
                fontSize: '20px',
                borderBottom: '1px solid #e2e2e2',
            }}
        >
            <div style={{ flexBasis: '60%' }}>
                <div style={{ paddingLeft: '20px' }}>지역</div>
            </div>
            <div style={{ flexBasis: '40%' }}>
                <img
                    src={Icon}
                    style={{
                        float: 'right',
                        width: '20px',
                        height: '20px',
                    }}
                ></img>
            </div>
        </div>
    );
};

export default HeaderLoca;
