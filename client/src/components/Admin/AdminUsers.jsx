import React, { useEffect, useState } from 'react';
import AdminLayout from './AdminLayout';
import { useAuth } from '../../store/auth';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import './Admin.css';

const AdminUsers = () => {
  const { authorizationToken, user, isLoading } = useAuth();
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const allUsers = async () => {
    try {
      const response = await fetch('https://pritam-mern.onrender.com/api/admin/users', {
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

  const deleteUser = async (id) => {
    try {
      const response = await fetch(`https://pritam-mern.onrender.com/api/admin/users/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken
        }
      })
    } catch (error) {
      console.error(error);
    }
  }

  // if (isLoading) {
  //   return <div className="errorBox">
  //       <h2>Loading...</h2>
  //     </div>
  // }

  // if(!(user.isAdmin)){
  //   navigate('/');
  //   console.log(dsgvsdhgacsd);
  // }

  useEffect(() => {
    allUsers();
  }, [deleteUser()]);

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
                    <Link className="table-data" to={`/admin/users/${user._id}/edit`}><h3 className='btn3'>Edit</h3></Link>
                    <div className="table-data"><h3 className='btn1' onClick={() => deleteUser(user._id)}>Delete</h3></div>
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