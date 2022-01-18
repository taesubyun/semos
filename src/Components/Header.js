import styled from 'styled-components';

const Header = () => {
    return (
        <div className='header'>
            <HeaderWrap>
                <HeaderLeft>
                    <HeaderText>세 모 스</HeaderText>
                </HeaderLeft>
                <HeaderRight>
                    <HeaderInput />
                </HeaderRight>
            </HeaderWrap>
        </div>
    );
};
export default Header;

const HeaderWrap = styled.header`
    display: flex;
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 25px;
    border-bottom: 1px solid #e2e2e2;
`;

const HeaderLeft = styled.div`
    flex-basis: 40%;
`;

const HeaderText = styled.div`
    width: 100%;
`;
const HeaderRight = styled.div`
    flex-basis: 60%;
    overflow: auto;
`;
const HeaderInput = styled.input`
    float: right;
`;
