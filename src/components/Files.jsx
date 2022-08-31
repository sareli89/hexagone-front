import React from 'react';


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
            <th scope="col">Nombre del archivo</th>
            <th scope="col">Match rate</th>
            <th scope="col">Fecha de subida</th>
            <th scope="col">Fecha de actualizacion</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
          </thead>
          <tbody clasName="table-primary table-group-divider">
            <tr>
              <td scope="row">
                <div className="bg-secondary mt-3">
                  S
                </div>
              </td>
              <td className="">
                <p className="p-0 lh-1"> doc 1 </p>
                <span className="fw-lighter">hola que hace</span>
              </td>
              <td>23%</td>
              <td>23/02/2022</td>
              <td >23/02/2022</td>
              <td scope="row">
                <div className="bg-secondary mt-3">
                  E
                </div>
              </td>
              <td scope="row">
                <div className="bg-secondary mt-3">
                  D
                </div>
              </td>
            </tr>
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