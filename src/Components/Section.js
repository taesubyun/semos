import '../App.css';
import styled from 'styled-components';
import Content from './Content';

const Section = () => {
    return (
        <div>
            <section className='semos_partner'>
                <header className='semos_header_partner'>
                    <div className='semos_partner_title'>
                        <h2>내 생애 첫 워터스포츠</h2>
                        <div className='semos_parter_subtitle'>
                            <p>배우고 싶은 강습을 확인해 보세요.</p>
                            <a className='semos_home_show_more' href=''>
                                +강습 더 보기
                            </a>
                        </div>
                    </div>
                    <SectionContainer>
                        <Content />
                    </SectionContainer>
                </header>
            </section>
        </div>
    );
};
export default Section;

const SectionContainer = styled.div`
    width: 100%;
    height: 250px;
`;
