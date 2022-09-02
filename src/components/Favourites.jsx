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
      <h4 className="text-primary mt-3">
        Listado segmentos
      </h4>
      <div className="d-flex justify-content-end mt-3">
        <button 
        type="button" 
        className="btn btn-info btn-sm gap-2 col-6 mx-auto me-2 text-white fw-bold">
          NUEVO SEGMENTO
        </button>
        <input 
        type="text" 
        className="form-control input-group input-group-sm mb-3" 
        placeholder="Buscar " 
        aria-label="search" 
        aria-describedby="basic-addon1"/>
      </div>

    </div>
    <f4 className="m-2 fs-5">
      Favoritos  
    </f4>
    <span className="fs-6 text text-secondary text-opacity-75">Puedes tener un máximo de 3 items en esta lista.</span>
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
              <td className="ps-2">
                <div className="bg-success me-1 p-1 mt-2 position-absolute rounded-circle"></div>
                <input type="radio" className="me-2"/>
                {/* <span 
                className="position-absolute p-1 mt-3 top-30  translate-middle badge border border-light rounded-circle bg-danger ">
                <span className="visually-hidden">isCompleted</span></span> */}
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
              <td className="ps-2">
                <div className="bg-success me-1 p-1 mt-2 position-absolute rounded-circle"></div>
                <input type="radio" className="me-2"/>
                {/* <span 
                className="position-absolute p-1 mt-3 top-30  translate-middle badge border border-light rounded-circle bg-danger ">
                <span className="visually-hidden">isCompleted</span></span> */}
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