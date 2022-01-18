import { useState, useEffect } from 'react';
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

    // let settings = {
    //     dot: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     cssEase: 'linear',
    // };
    // Version. 형식 없이
    // fetch 함수를 활용하여 데이터를 받아 오기 위해 API를 호출하고 데이터를 응답 받음
    // 응답 받은 데이터를 .then함수를 이용하여 response객체를 불러오고
    // response.json()를 사용하여 json형태로 변환한다
    // 그리고 json형태의 데이터를
    // 키포인트 ->
    // 1. useEffect의 두번째 인자로 빈 배열을 주지 않으면 구성 요소가 업데이트 될 때마다 다시 데이터를 fetching 함
    //    그래서 빈 배열을 두 번째 매개변수로 넣어주면 첫 렌더링때만 호출하고 그 이후에는 재호출이 되지 앟음

    const contents =
        partners.length > 0 &&
        partners.map((elem, idx) => {
            return (
                <a className='semos_partner_content' key={idx}>
                    <img
                        src={elem.img_link}
                        style={{
                            width: '194px',
                            height: '60%',
                        }}
                    ></img>
                    <div className='semos_partner_content_img'>
                        <span>{elem.category}</span>
                    </div>
                    <div className='target_info'>
                        <div
                            className='target_name'
                            style={{
                                height: '5.5rem',
                                position: 'relative',
                            }}
                        >
                            <div>
                                <b>[{elem.loc}]</b>
                                <span>
                                    <b> {elem.name}</b>
                                </span>
                            </div>
                            <div
                                className='price_of_product_div'
                                style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    right: 0,
                                }}
                            >
                                <p className='price_of_home_product'>
                                    할인가
                                    <b style={{ color: 'red' }}>
                                        {elem.service_price}
                                    </b>
                                </p>
                            </div>
                        </div>
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
