import React from 'react';
import PopularCard from './PopularCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Popular = () => {
    var data = [
        {
            id: '0',
            title: 'Porsche',
            subtitle: 'Turbo 5',
            imgUrl: 'https://i.ibb.co/M9cLQH2/popular1.png',
            time: '37 Sec',
            speed: '356 Km/h',
            charge: 'Electric',
            price: '$175,900'
        },

        {
            id: '1',
            title: 'Porsche',
            subtitle: 'Turbo 5',
            imgUrl: 'https://i.ibb.co/vLXwgSH/popular3.png',
            time: '37 Sec',
            speed: '356 Km/h',
            charge: 'Electric',
            price: '$185,900'
        },
        {
            id: '3',
            title: 'Porsche',
            subtitle: 'Turbo 5',
            imgUrl: 'https://i.ibb.co/vLXwgSH/popular3.png',
            time: '37 Sec',
            speed: '356 Km/h',
            charge: 'Electric',
            price: '$185,900'
        },
        {
            id: '4',
            title: 'Porsche',
            subtitle: 'Turbo 5',
            imgUrl: 'https://i.ibb.co/vLXwgSH/popular3.png',
            time: '37 Sec',
            speed: '356 Km/h',
            charge: 'Electric',
            price: '$185,900'
        }
    ];

    return (
       
            <div className='popular__container'>
                <h3 className="popular__title">
                    Choose Your Electric Car<br/> Of The Porsche Brand
                </h3>
                <div className="popular__swiper">
                    <Swiper
                        breakpoints={{
                        // when window width is >= 640px
                        640: {
                          width: 640,
                          slidesPerView: 1,},
                          768: {
                            width: 768,
                            slidesPerView: 3,
                          },
                        }}
                        modules={[ Pagination]}
                        spaceBetween={50}
                        // slidesPerView={1}
                        
                        pagination={{ clickable: true }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                    
                    {
                        data.map((info) =>(<SwiperSlide>
                            <PopularCard info={info} key={info.id}/>
                        </SwiperSlide>
                        ))
                    }
                    </Swiper>
                </div>
            </div>
       
    );
};

export default Popular;