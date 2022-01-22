import Icon from '../assets/icon.png';
import styled from 'styled-components';

const HeaderLoca = () => {
    return (
        <LocaContainer>
            <LocaLeft>
                <LocaLeftText>지역</LocaLeftText>
            </LocaLeft>
            <LocaRight>
                <LocaImg src={Icon}></LocaImg>
            </LocaRight>
        </LocaContainer>
    );
};

export default HeaderLoca;

const LocaContainer = styled.div`
    width: 100%;
    display: flex;
    padding: 20px 0;
    font-size: 20px;
    border-bottom: 1px solid #e2e2e2;
`;
const LocaLeft = styled.div`
    flex-basis: 60%;
`;
const LocaLeftText = styled.div`
    padding-left: 20px;
`;

const LocaRight = styled.div`
    flex-basis: 40%;
`;

const LocaImg = styled.img`
    float: right;
    width: 20px;
    height: 20px;
`;
