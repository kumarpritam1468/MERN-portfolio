import React from 'react'
import AdminLayout from './AdminLayout'

const AdminServices = () => {
  return (
    <>
      <div className="adminPage">
        <AdminLayout />
        <div className="services">
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
              <div className="table-row">
                <div className="table-data"><h3>Pritam</h3></div>
                <div className="table-data"><h3>test@mail.com</h3></div>
                <div className="table-data"><h3>1122334455</h3></div>
                <div className="table-data"><h3 className='btn3'>Edit</h3></div>
                <div className="table-data"><h3 className='btn1'>Delete</h3></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminServices