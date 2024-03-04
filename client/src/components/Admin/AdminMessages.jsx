import React, { useEffect, useState } from 'react'
import AdminLayout from './AdminLayout'
import { toast } from 'react-toastify';
import { useAuth } from '../../store/auth';

const AdminMessages = () => {
  const { authorizationToken } = useAuth();
  const [messages, setMessages] = useState([]);

  const allMessages = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/admin/contacts', {
        method: "GET",
        headers: {
          Authorization: authorizationToken
        }
      })

      const data = await response.json();
      setMessages(data);
    } catch (error) {
      toast.error(error);
    }
  }

  useEffect(() => {
    allMessages();
  }, []);
  return (
    <>
      <div className="adminPage">
        <AdminLayout />
        <div className="messages">
          <h1 className='main-heading'>Messages...   </h1>

          <div classNameName="table">
            <div className="table-header">
              <div className="header__item"><h4 className="filter__link" >Name</h4></div>
              <div className="header__item"><h4 className="filter__link" >Email</h4></div>
              <div className="header__item"><h4 className="filter__link" >Message</h4></div>
              <div className="header__item"><h4 className="filter__link" >Delete</h4></div>
            </div>
            <div className="table-content">
              {messages.map((user, index) => {
                return (
                  <div className="table-row" key={index}>
                    <div className="table-data"><h3>{user.name}</h3></div>
                    <div className="table-data"><h3>{user.email}</h3></div>
                    <div className="table-data"><h3>{user.message}</h3></div>
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

export default AdminMessages