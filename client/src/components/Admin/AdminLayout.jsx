import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
import { RiMessage2Fill } from "react-icons/ri";
import './Admin.css';

const AdminLayout = () => {
  return (
    <>
      <div className="adminNav">
        <Link to='/admin' className="btn1"><FaUser /> Users</Link>
        <Link to='/admin/messages' className="btn1"><RiMessage2Fill /> Messages</Link>
        <Link to='/admin/services' className="btn1"><FaCode /> Services</Link>
        <Link to='/' className="btn1"><IoHome /> Home</Link>
      </div>
    </>
  )
}

export default AdminLayout