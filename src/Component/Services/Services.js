import React from 'react';
import title1 from '../../images/title/title1.jpg'
import title2 from '../../images/title/title2.jpg'
import title3 from '../../images/title/title3.jpg'
import Service from '../Service/Service';

const services = [
    { id: 1, name: 'Web Developer Course', price: 400, description: '100% job replace course', img: title1 },
    { id: 2, name: 'Expart English Learing Course', price: 400, description: '100% job replace course', img: title2 },
    { id: 3, name: 'SEO Course', price: 400, description: '100% job replace course', img: title3 },
]


const Services = () => {
    return (
        <div className='container'>
            <h2 className='text-primary text-center m-5 mt-5'>Recent Programs & Offerings</h2>
            <div className='row'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    >
                    </Service>)
                }
            </div>
        </div>
    );
};

export default Services;