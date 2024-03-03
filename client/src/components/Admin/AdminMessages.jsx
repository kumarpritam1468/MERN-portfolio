import React from 'react'
import AdminLayout from './AdminLayout'

const AdminMessages = () => {
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
              <div className="table-row">
                <div className="table-data"><h3>Pritam</h3></div>
                <div className="table-data"><h3>test@mail.com</h3></div>
                <div className="table-data"><h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam sint blanditiis commodi pariatur error accusantium eius saepe harum repellat quis!</h3></div>
                <div className="table-data"><h3 className='btn1'>Delete</h3></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminMessages