import React from "react";

import { 
  BiBookmark,
  BiDotsVerticalRounded,
  BiShowAlt
} from "react-icons/bi";

import Items from "../files.json"

export default function Favourites () {
  const favourites = Items.filter(item => item.isFavourite === true);
  
  return (
    <div>
    <div className="d-flex justify-content-between mb-4">
      <h4 className="text-primary mt-3">
        Listado segmentos
      </h4>
      <div className="d-flex justify-content-end mt-3">
        <button 
        type="button" 
        className="btn btn-info btn-sm cursor-pointer text-uppercase gap-2 col-6 mx-auto me-2 text-white fw-bold">
          nuevo segmento
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
    <div 
      className="tab-pane table-responsive fade show active" 
      id="nav-completed" 
      aria-labelledby="completed-tab" 
      role="tabpanel">
    <table className="table table-responsive table-sm container bg-white shadow-sm mb-1 bg-body">
          <tbody clasName="table-primary table-group-divider">
            {
              favourites.map (favourite =>{
                return(
                  <tr>
                    <td scope="row">
                      <button 
                      type="button" 
                      className="btn btn-link">
                        <BiBookmark/>
                      </button>
                    </td>
                    <td className="cursor-pointer">
                      <p className=""> {favourite.fileName} 
                        <br /> 
                        <span className="fw-lighter">{favourite.fileDetail}</span> 
                      </p>
                    </td>
                    <td>{favourite.matchRate}</td>
                    <td>{favourite.uploadAt}</td>
                    <td>{favourite.updatedAt}</td>
                    <td className="ps-2 position-relative">
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
                )
              })
            }   
          </tbody> 
      </table>
      </div>
    </div>
  )
}