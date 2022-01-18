import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Carousel from './Carousel';

const Content = () => {
    const [partners, setPartners] = useState([]);

    useEffect(() => {
        fetch('https://ai.semos.kr/productApi/product?mode=home')
            .then((response) => response.json())
            .then((data) => {
                setPartners(data.partner);
            });
    }, []);

    const contents =
        partners.length > 0 &&
        partners.map((elem, idx) => {
            return (
                <a className='semos_partner_content' key={idx}>
                    <ContentImg src={elem.img_link} />
                    <div className='semos_partner_content_img'>
                        <span>{elem.category}</span>
                    </div>
                    <div className='target_info'>
                        <TargetName>
                            <div>
                                <b>[{elem.loc}]</b>
                                <span>
                                    <b> {elem.name}</b>
                                </span>
                            </div>
                            <ProductPrice>
                                <p className='price_of_home_product'>
                                    할인가
                                    <b style={{ color: 'red' }}>
                                        {elem.service_price}
                                    </b>
                                </p>
                            </ProductPrice>
                        </TargetName>
                    </div>
                </a>
            );
        });

    const OrderedContent = contents ? <Carousel data={contents} /> : null;

    return (
        <div className='semos_partner_container' style={{ width: '100%' }}>
            {OrderedContent}
        </div>
    );
};

export default Content;

const ContentImg = styled.img`
    width: 194px;
    height: 60%;
`;

const TargetName = styled.div`
    height: 5.5rem;
    position: relative;
`;

const ProductPrice = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
`;
