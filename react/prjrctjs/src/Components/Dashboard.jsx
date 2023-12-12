import React from "react";
import { useNavigate } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faQuinscape} from '@fortawesome/free-brands-svg-icons';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import { faBell } from "@fortawesome/free-solid-svg-icons";
import {faBusinessTime} from '@fortawesome/free-solid-svg-icons';
import {faCircleUser} from '@fortawesome/free-solid-svg-icons';
import {faGear} from '@fortawesome/free-solid-svg-icons';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import {faMagnifyingGlass}  from '@fortawesome/free-solid-svg-icons';
import profile from './Assests/member-1.png';
import Popup from './Popup';
import Modal from './Modal';
import { useState } from "react";
export default function Dashboard(){
  const navigate= useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };
  
    return(
        <>
<div className="container-fluid">
  <div className="row">
    {/* <!-- This is your left sidebar --> */}
    <div className="col-4">
      <nav className="navbar navbar-expand-lg navbar-light bg flex-column">
        <a className="navbar-brand" href="#">Board</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav flex-column">
            <li className="nav-item active">
            <a className="nav-link" href="/Dashboard"><FontAwesomeIcon icon={faQuinscape} rotation={270} size="xl" />
              Dashboard</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="Transactions"><FontAwesomeIcon icon={faTags} size="xl"/>   
             Transactions</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="Schedules"><FontAwesomeIcon icon={faBusinessTime} size="xl" /> 
               Schedules</a>
            </li>
            <li className="nav-item">
            <a  className="nav-link" href="Dashboard"> <FontAwesomeIcon icon={faCircleUser} size="xl"/> Users</a>
            </li>
            <li className="nav-item">
           
            <a className="nav-link" href="#"><FontAwesomeIcon icon={faGear} size="xl" />Settings</a>
            </li>
            <li className="nav-item1">
              <a className="nav-link" href="#">Help</a>
            </li>
            <li className="nav-item2">
              <a className="nav-link" href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>

   {/* <!-- This is your main content area --> */}
    <div className="col-8">
  <div className="container-fluid container-fluid d-flex justify-content-between">
    <a className="navbar-brand1">Dashboard</a>
    <form className="Nav" role="search">
    <FontAwesomeIcon icon={faMagnifyingGlass} rotation={0} size="xl" style={{position: 'absolute', top: '33px', left: '30px'}} />
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit"><FontAwesomeIcon icon={faBell} size="xl" /></button>
    <button onClick={handleClick} style={{backgroundColor:"transparent",borderStyle:"none",outlineStyle:'none'}}>  <img className="prof" src={profile} alt="profileimage" style={{width:"50px",height:"50px",borderRadius:"50%"}}/></button>
    {isModalOpen && (
            <Modal onClose={handleClose}>
               
            </Modal>
          )}
    
    
    
    </form>


  </div>
    </div>
  </div>
 </div>


        </>
    )
}