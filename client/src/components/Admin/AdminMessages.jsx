import React, { useEffect, useState } from 'react'
import AdminLayout from './AdminLayout'
import { toast } from 'react-toastify';
import { useAuth } from '../../store/auth';

const AdminMessages = () => {
  const { authorizationToken } = useAuth();
  const [messages, setMessages] = useState([]);

  const allMessages = async () => {
    try {
      const response = await fetch('https://pritam-mern.onrender.com/api/admin/contacts', {
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

  const deleteMessage = async (id) => {
    try {
      const response = await fetch(`https://pritam-mern.onrender.com/admin/contacts/delete/${id}`, {
        method:"DELETE",
        headers: {
          Authorization: authorizationToken
        }
      })

      toast.success("Message deleted");
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    allMessages();
  }, [deleteMessage]);
  return (
    <>
      <div className="adminPage">
        <AdminLayout />
        <div className="messages">
          <h1 className='main-heading'>Messages...   </h1>

          <div className="table">
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
                    <div className="table-data" onClick={() => deleteMessage(user._id)}><h3 className='btn1'>Delete</h3></div>
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