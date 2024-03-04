import React, { useEffect, useState } from 'react';
import AdminLayout from './AdminLayout';
import { useAuth } from '../../store/auth';
import { toast } from 'react-toastify';
import './Admin.css';

const AdminUsers = () => {
  const { authorizationToken } = useAuth();
  const [users, setUsers] = useState([]);

  const allUsers = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/admin/users', {
        method: "GET",
        headers: {
          Authorization: authorizationToken
        }
      })

      const data = await response.json();
      setUsers(data);
    } catch (error) {
      toast.error(error);
    }
  }

  useEffect(() => {
    allUsers();
  }, []);

  return (
    <>
      <div className="adminPage">
        <AdminLayout />
        <div className="users">
          <h1 className='main-heading'>Users...   </h1>

          <div className="table">
            <div className="table-header">
              <div className="header__item"><h4 className="filter__link" >Name</h4></div>
              <div className="header__item"><h4 className="filter__link" >Email</h4></div>
              <div className="header__item"><h4 className="filter__link" >Phone</h4></div>
              <div className="header__item"><h4 className="filter__link" >Update</h4></div>
              <div className="header__item"><h4 className="filter__link" >Delete</h4></div>
            </div>
            <div className="table-content">
              {users.map((user, index) => {
                return (
                  <div className="table-row" key={index}>
                    <div className="table-data"><h3>{user.name}</h3></div>
                    <div className="table-data"><h3>{user.email}</h3></div>
                    <div className="table-data"><h3>{user.phone}</h3></div>
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

export default AdminUsers