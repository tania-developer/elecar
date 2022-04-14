import React from 'react';
import BrandsBtn from './BrandsBtn';
import PopularCard from '../Popular/PopularCard';
import './Brands.css'

const Brands = () => {
    var brandData = [
        {
            id: '0',
            title: 'Porsche',
            subtitle: 'Turbo 5',
            imgUrl: 'https://i.ibb.co/q59HhpQ/featured1.png',
            price: '$175,900'
        },

        {
            id: '1',
            title: 'Porsche',
            subtitle: 'Turbo 5',
            imgUrl: 'https://i.ibb.co/T0tD9qW/featured2.png',
            price: '$185,900'
        }
    ];
    return (
        <div className="brands">
            <h2 className="popular__title">Featured Luxury Cars</h2>
            <div className="brands__container">
                <div className="brands__filter">
                    <BrandsBtn/>
                </div>
                <div className="brands__card">
                    {
                        brandData.map(info => <PopularCard info={info} key={info.id}></PopularCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Brands;