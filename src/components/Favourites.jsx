import React from "react";

import { 
  BiBookmark,
  BiDotsVerticalRounded,
  BiMoveVertical,
  BiShowAlt
} from "react-icons/bi";

import { AiOutlineSearch } from "react-icons/ai";


export default function Favourites () {
  return (
    <div>
    <div className="d-flex justify-content-between mb-4">
      <h5 className="text-primary mt-3">
        Listado segmentos
      </h5>
      <div className="d-flex justify-content-end">
        <button 
        type="button" 
        className="btn btn-info fw-6 me-2 text-white btn-sm">
          NUEVO SEGMENTO
        </button>
        <input 
        type="text" 
        className="form-control" 
        placeholder="Buscar " 
        aria-label="search" 
        aria-describedby="basic-addon1"/>
      </div>

    </div>
    <table className="table table-sm container bg-white shadow-sm mb-1 bg-body">
          <tbody clasName="table-primary table-group-divider">
            <tr>
              <td scope="row">
                <button 
                type="button" 
                className="btn btn-link">
                  <BiBookmark/>
                </button>
              </td>
              <td className="">
                <p className="p-0 lh-1"> doc 1 </p>
                <span className="fw-lighter">hola que hace</span>
              </td>
              <td>23%</td>
              <td>23/02/2022</td>
              <td>23/02/2022</td>
              <td className="">
                <span 
                className="position-absolute p-1 mt-4 translate-middle badge border border-light rounded-circle bg-danger ">
                <span className="visually-hidden">unread messages</span></span>
                  Completado
              </td>
              <td scope="row">
                <button type="button" class="btn btn-light">
                  <BiShowAlt/>
                </button>
              </td>
              <td scope="row">
              <button type="button" class="btn btn-light">
                  <BiDotsVerticalRounded/>
                </button>
              </td>
            </tr>
            
            <tr>
              <td scope="row">
                <button 
                type="button" 
                className="btn btn-link">
                  <BiBookmark/>
                </button>
              </td>
              <td className="">
                <p className="p-0 lh-1"> doc 1 </p>
                <span className="fw-lighter">hola que hace</span>
              </td>
              <td>23%</td>
              <td>23/02/2022</td>
              <td >23/02/2022</td>
              <td className="">
                <span 
                className="position-absolute p-1 mt-4 translate-middle badge border border-light rounded-circle bg-danger ">
                <span className="visually-hidden">unread messages</span></span>
                  Completado
              </td>
              <td scope="row">
                <button type="button" class="btn btn-light">
                  <BiShowAlt/>
                </button>
              </td>
              <td scope="row">
              <button type="button" class="btn btn-light">
                  <BiDotsVerticalRounded/>
                </button>
              </td>
            </tr>
            
            
          </tbody> 
      </table>
    </div>
  )
}