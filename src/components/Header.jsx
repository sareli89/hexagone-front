import React from "react";

import {
  s
} from "../components/index"

import { 
  BiChevronDown,
  BiStar
} from "react-icons/bi";

import { 
  FcElectricity 
} from "react-icons/fc";

export default function Header () {
  return (
    <div className="container bg-white shadow-sm mb-1 bg-body">
      <div class="d-flex justify-content-end flex-row">
        <div class="mt-2">
          <button 
          type="button" 
          class="btn btn-link position-relative">
            <FcElectricity/> 
            <span 
            class="position-absolute p-1 mt-4 top-0 start-80 translate-middle badge border border-light rounded-circle bg-danger ">
            <span class="visually-hidden">unread messages</span></span>
          </button>
        </div>
        <div class="p-2">
          <div class="dropdown">
            <button 
            class="btn btn-link dropdown-toggle text-decoration-none" 
            type="button" 
            data-bs-toggle="dropdown" 
            aria-expanded="false">
                Sara Reveles 
                <span 
                class="position-absolute p-1 mt-3 top-50 start-0 ms-5 translate-middle badge text-muted">
                  Active
                </span>
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Perfil</a></li>
              <li><a class="dropdown-item" href="#">Agregar archivo</a></li>
              <li><a class="dropdown-item" href="#">Editar archivo</a></li>
            </ul>
          </div>
        </div>
      </div>      
    </div>
  )
}