import React from "react";

import { HeaderNav } from ".";

import { 
  FcElectricity 
} from "react-icons/fc";

import { 
  BsHexagonFill 
} from "react-icons/bs";

export default function Header () {
  return (
    <div 
    className="dcontainer bg-white shadow-sm mb-1 bg-body">
      <div 
      className="d-flex justify-content-between justify-content-md-end flex-row ">
        <div 
        className="d-block d-sm-none m-2">
          <button 
          className="btn btn-info " 
          type="button" data-bs-toggle="offcanvas" 
          data-bs-target="#staticBackdrop" 
          aria-controls="staticBackdrop">
            <i className="text-primary">
              <BsHexagonFill/>
            </i>
          </button>

          <div 
          className="offcanvas offcanvas-start" 
          data-bs-backdrop="static" 
          tabindex="-1" 
          id="staticBackdrop" 
          aria-labelledby="staticBackdropLabel">
            <div className="offcanvas-header">
              <h5></h5>
              <button 
              type="button" 
              className="btn-close" 
              data-bs-dismiss="offcanvas" 
              aria-label="Close">
              </button>
            </div>
            <div className="offcanvas-body">
              <div>
                <HeaderNav/>
              </div>
            </div>
          </div>
        </div>
      

        <div className="d-flex justify-content-end flex-row ">
          <div className="mt-2">
            <button 
            type="button" 
            className="btn btn-link position-relative">
              <FcElectricity/> 
              <span 
              className="position-absolute p-1 mt-4 top-0 start-80 translate-middle badge border border-light rounded-circle bg-danger ">
              <span className="visually-hidden">unread messages</span></span>
            </button>
          </div>
          <div className="p-2">
            <div className="dropdown">
              <button 
              className="btn btn-link dropdown-toggle text-decoration-none text-dark" 
              type="button" 
              data-bs-toggle="dropdown" 
              aria-expanded="false">
                  Sara Reveles 
                  <span 
                  className="position-absolute p-1 mt-3 top-50 start-0 ms-5 translate-middle badge text-black-50">
                    Active
                  </span>
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Perfil</a></li>
                <li><a className="dropdown-item" href="#">Agregar archivo</a></li>
                <li><a className="dropdown-item" href="#">Editar archivo</a></li>
              </ul>
            </div>
          </div>
        </div>  
      </div>    
    </div>
  )
}