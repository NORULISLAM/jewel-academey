import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div className='100vh'>
            <h1 className='mt-6'>Welcome to detail: {serviceId}</h1>
        </div>
    );
};

export default ServiceDetail;