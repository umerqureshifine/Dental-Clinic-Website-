import React from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from 'react-redux';
import Header from "../components/MainComponents/Header";
import Sider from "../components/MainComponents/Sider";
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const Profile = () => {

    const currentUser = useSelector(state => state.auth.user);
  const  branch = currentUser?.branch_name;
const navigate = useNavigate()


  const goBack = (event) => {
   
    navigate('/'); // This goes back to the previous page
};

  return (
    <>
      <Wrapper>
      <div className='header'>
      <Header/>
      </div>

<div className="row mrgnzero">
  <div className="col-lg-1 col-md-1 col-1" id="sider">
    <Sider />
  </div>
  <div className="col-lg-11 col-md-11 col-11" id="set" style={{marginTop:"3rem"}}>
        <div className="container-fluid  shadow p-3 mt-5 bg-body rounded">
            <div className="row">
            <div className="col-lg-3">
                  <button className="btn btn-success" onClick={goBack}>
                    <IoMdArrowRoundBack /> Back
                  </button>
                  </div>

                <div className="col-lg-12 col-12 mt-4">
                    <div className="text-start p-2">
                        <h3>Lab Attendent Profile</h3>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <img src="https://cirrusindia.co.in/wp-content/uploads/2016/10/dummy-profile-pic-male1.jpg" alt="profile" className="img-fluid rounded"/>
                </div>
                <div className="col-lg-8">
                    <div className="row mb-3">
                        <div className="col-lg-4">
                            <label className="text-info">UserID</label>
                            <div className="shadow-none p-1 bg-light rounded">
                                <p className="m-0">{currentUser?.employee_ID}</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                        <label className="text-info">User Name</label>
                            <div className="shadow-none p-1 bg-light rounded">
                                <p className="m-0">{currentUser?.employee_name}</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                        <label className="text-info">Email</label>
                            <div className="shadow-none p-1 bg-light rounded">
                                <p className="m-0">{currentUser?.email}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-lg-4">
                            <label className="text-info">Sex</label>
                            <div className="shadow-none p-1 bg-light rounded">
                                <p className="m-0">{currentUser?.gender}</p>
                            </div>
                        </div>
                       
                        <div className="col-lg-4">
                        <label className="text-info">Address</label>
                            <div className="shadow-none p-1 bg-light rounded">
                                <p className="m-0">{currentUser?.address}</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <label className="text-info">Designation</label>
                            <div className="shadow-none p-1 bg-light rounded">
                                <p className="m-0">{currentUser?.employee_designation}</p>
                            </div>
                        </div>
                    </div>
                  
                    <div className="row mb-3">
                        
                       
                        <div className="col-lg-4">
                        <label className="text-info">Mobile No.</label>
                            <div className="shadow-none p-1 bg-light rounded">
                                <p className="m-0">{currentUser?.employee_mobile}</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                        <label className="text-info">Working Days</label>
                            <div className="shadow-none p-1 bg-light rounded">
                                <p className="m-0">{currentUser?.working_days}</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                        <label className="text-info">Working Shift</label>
                            <div className="shadow-none p-1 bg-light rounded">
                                <p className="m-0">12PM - 2PM</p>
                            </div>
                        </div>
                    </div>
                   
                   
                </div>
            </div>
        </div>
        </div>
        </div>

      </Wrapper>
    </>
  );
};

export default Profile;
const Wrapper = styled.div`
img{
    
    
}
.mrgnzero {
    margin-right: 0rem;
  }
 
  .header{
  position: fixed;
  min-width: 100%;
  z-index: 100;
}

`;