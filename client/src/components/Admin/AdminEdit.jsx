import React, { useEffect, useState } from 'react';
import AdminLayout from './AdminLayout';
import { useAuth } from '../../store/auth';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AdminEdit = () => {
    const [singleUser, setSingleUser] = useState({
        name:"",
        email:"",
        phone:""
    });
    const params = useParams();
    const navigate = useNavigate();
    const {authorizationToken} = useAuth();

    const getSingleUser = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/admin/users/${params.id}/get`, {
                method:"GET",
                headers:{
                    Authorization:authorizationToken
                }
            })
            
            const data = await response.json();
            setSingleUser(data);
        } catch (error) {
            console.error(error);
        }
    }

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        
        setSingleUser({
            ...singleUser,
            [name]:value
        })
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/api/admin/users/update/${params.id}`, {
                method:"PATCH",
                headers:{
                    "Content-Type":"application/json",
                    Authorization:authorizationToken
                },
                body:JSON.stringify(singleUser)
            })

            if(response.ok){
                toast.success("Update Successful");
                navigate('/admin');
            }
            else{
                toast.error("Update Unsuccessful");
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getSingleUser();
    },[]);
    return (
        <>
            <AdminLayout/>
            <div className="formContainer">
                <div className="image">
                    <img src="/images/register.png" alt="" />
                </div>

                <div className="form">
                    <h1 className="main-heading">Edit User Data</h1>
                    <br />
                    <form onSubmit={handleSubmit} >
                        <div>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={singleUser.name}
                                onChange={handleInput}
                                />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                name="email"
                                value={singleUser.email}
                                onChange={handleInput}
                                />
                        </div>
                        <div>
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="number"
                                name="phone"
                                value={singleUser.phone}
                                onChange={handleInput}
                                />
                        </div>
                        <button type="submit" className="btn1">
                            Update
                        </button>
                    </form>
                </div>
            </div >
        </>
    )
}

export default AdminEdit