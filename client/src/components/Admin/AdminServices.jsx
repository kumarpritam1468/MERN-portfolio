import React, { useEffect, useState } from 'react'
import AdminLayout from './AdminLayout'
import { useAuth } from '../../store/auth';
import { toast } from 'react-toastify';
import './Admin.css';

const AdminServices = () => {
  const { authorizationToken } = useAuth();
  const [services, setServices] = useState([]);

  const allServices = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/admin/services', {
        method: "GET",
        headers: {
          Authorization: authorizationToken
        }
      })

      const data = await response.json();
      setServices(data);
    } catch (error) {
      toast.error(error);
    }
  }

  useEffect(() => {
    allServices();
  }, []);
  return (
    <>
      <div className="adminPage">
        <AdminLayout />
        <div className="adminServices">
          <h1 className='main-heading'>Services...   </h1>

          <div classNameName="table">
            <div className="table-header">
              <div className="header__item"><h4 className="filter__link" >Service</h4></div>
              <div className="header__item"><h4 className="filter__link" >Description</h4></div>
              <div className="header__item"><h4 className="filter__link" >Price</h4></div>
              <div className="header__item"><h4 className="filter__link" >Update</h4></div>
              <div className="header__item"><h4 className="filter__link" >Delete</h4></div>
            </div>
            <div className="table-content">
              {services.map((service, index) => {
                return (
                  <div className="table-row">
                    <div className="table-data"><h3>{service.service}</h3></div>
                    <div className="table-data"><h3>{service.description}</h3></div>
                    <div className="table-data"><h3>{service.price}</h3></div>
                    <div className="table-data"><h3 className='btn3'>Edit</h3></div>
                    <div className="table-data"><h3 className='btn1'>Delete</h3></div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminServices