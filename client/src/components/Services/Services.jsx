import React from 'react';
import './Services.css';
import { useAuth } from '../../store/auth';

const Services = () => {
    const { services } = useAuth();
    return (
        <>
            <div className="servicesPage">
                <h1 className="main-heading">Services</h1>
                <div className="services">
                    {services.map((service, index) => {
                        return (
                            <div className="servicesBox" key={index}>
                                <h3>{service.service}</h3>
                                <p>{service.description}</p>
                                <img src="./images/services.png" alt="" />
                                <p>
                                    Price : {service.price} <br />
                                    By : {service.by}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Services