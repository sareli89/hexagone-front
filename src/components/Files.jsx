import React from "react";

import Items from "../files.json"

import {
  FileSegment
} from "../components/index"

import { 
  BiBookmark,
  BiDotsVerticalRounded,
  BiMoveVertical,
  BiShowAlt
} from "react-icons/bi";

export default function Files(props) {
  return(
    <div className="bg-light mt-2 px-1">
      <div className="nav nav-tabs" id="nav-tab" role="tablist">
        <ul className="nav">
          <li className="nav-item">
            <a 
            className="nav-link active text-secondary hover-text-black" 
            id="completed-tab" 
            data-bs-toggle="tab" data-bs--target="#nav-completed" 
            aria-current="page" aria-controls="nav-completed" aria-selected="true" 
            href="#" 
            role="tab">
              Completado 
            </a>
          </li>
          <li className="nav-item">
            <a 
            className="nav-link text-secondary" 
            id="error-tab" 
            data-bs-toggle="tab" data-bs--target="#nav-error" 
            aria-selected="false" aria-controls="nav-error" 
            href="#" 
            role="tab">
              Error
            </a>
          </li>
          <li className="nav-item">
            <a 
            className="nav-link text-secondary" 
            id="process-tab" 
            data-bs-toggle="tab" data-bs--target="#nav-process" 
            aria-selected="false" aria-controls="nav-process" 
            href="#" 
            role="tab">
              Proceso
            </a>
          </li>
        </ul>
      </div>

      <div 
      className="tab-pane table-responsive fade show active" 
      id="nav-completed" 
      aria-labelledby="completed-tab" 
      role="tabpanel">
        <table className="table table-sm">
          <thead className="table-success table-hover text-black-50 fs-6 fw-light">
            <tr>
              <th scope="col"></th>
              <th scope="col">Nombre del archivo <BiMoveVertical/></th>
              <th scope="col">Match rate <BiMoveVertical/></th>
              <th scope="col">Fecha de subida <BiMoveVertical/></th>
              <th scope="col">Fecha de actualizacion <BiMoveVertical/></th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody clasName="table-primary table-group-divider">
            {
              Items.map (item => {
                return(
          
                  <tr className="bg-white">
                    <td scope="row">
                      <button 
                      type="button" 
                      className="btn btn-link">
                        <BiBookmark/>
                      </button>
                    </td>
                    <td className="">
                      <p className=""> {item.fileName}  
                      <br /> 
                      <span className="fw-lighter"> {item.fileDetail} </span></p>
                    </td>
                    <td>{item.matchRate}</td>
                    <td>{item.uploadAt}</td>
                    <td >{item.updatedAt}</td>
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
     
      <div 
      className="tab-pane fade" 
      id="nav-error" 
      aria-labelledby="error-tab" 
      role="tabpanel">
        No error to show
      </div>

      <div 
      className="tab-pane fade" 
      id="nav-process" 
      aria-labelledby="process-tab" 
      role="tabpanel">
        All done
      </div>
    </div>
  )
}