import styled from 'styled-components';

const SectionLoc = () => {
    return (
        <SectionLocContainer>
            <LeftContent>
                <LeftContentBox>
                    <LocationBox>
                        <LocationName href=''>서울</LocationName>
                    </LocationBox>
                    <LocationBox>
                        <LocationName href=''>경기</LocationName>
                    </LocationBox>
                    <LocationBox>
                        <LocationName href=''>인천</LocationName>
                    </LocationBox>
                    <LocationBox>
                        <LocationName href=''>대전</LocationName>
                    </LocationBox>
                    <LocationBox>
                        <LocationName href=''>대구</LocationName>
                    </LocationBox>
                    <LocationBox>
                        <LocationName href=''>경북</LocationName>
                    </LocationBox>
                    <LocationBox>
                        <LocationName href=''>전북</LocationName>
                    </LocationBox>
                    <LocationBox>
                        <LocationName href=''>제주</LocationName>
                    </LocationBox>
                </LeftContentBox>
            </LeftContent>
        </SectionLocContainer>
    );
};

export default SectionLoc;

const SectionLocContainer = styled.div`
    display: flex;
    height: 30vw;
    padding: 7px 7px;
    margin-top: 25px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 15px;
`;

const LeftContent = styled.div``;

const LeftContentBox = styled.div`
    width: 110px;
    height: 100%;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 20px;
`;

const LocationBox = styled.div`
    font-size: 15px;
    padding: 10px 0;
    text-align: center;
`;

const LocationName = styled.a`
    text-decoration-line: none;
    color: black;
`;
