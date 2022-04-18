import React from 'react';
import { Button, Card, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='gx-5 col-sm-12 col-md-6 col-lg-4 mt-5'>
            <div className="card" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">{price}</p>
                    <button onClick={() => navigateToServiceDetail(id)} className="btn btn-primary">Free Trial</button>
                </div>
            </div>
        </div>
    );
};

export default Service;