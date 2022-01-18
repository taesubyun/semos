import React from 'react';
import Slider from 'react-slick';

export default function Carousel({ data }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
    };

    return <Slider {...settings}>{data}</Slider>;
}
