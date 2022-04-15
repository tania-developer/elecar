import React from 'react';
import PopularCard from './PopularCard';

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
        }
    ];
    return (
        <div className='popular__container'>
            <h3 className="popular__title">
                Choose Your Electric Car<br/> Of The Porsche Brand
            </h3>
            <div className="popular__swiper">
                {
                    data.map(info => <PopularCard info={info} key={info.id}></PopularCard>)
                }
            </div>
        </div>
    );
};

export default Popular;