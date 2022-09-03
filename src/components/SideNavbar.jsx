import React from "react";

import { 
  RiArrowLeftSLine,
  RiCodeFill,
  RiHome5Line,
  RiSearchEyeLine,
  RiShuffleLine,
  RiRecordCircleLine
} from "react-icons/ri";

export default function SideNavbar() {
  return(
    <div>
      <div className="bg-secondary h-100">
        <div className="row p-2 mb-5">
            <img className="w-50" src="/images/hexagon-logo1.png" alt="Logo hexagon" />
            <img className="w-50" src="/images/hexagon-letra.png" alt="Palabra Hexagon Match"/>
        </div>
        <div className="">
          <div className="d-flex flex-row-reverse text-white m-2">
            <a 
            className="text-white text-decoration-none m-2"
            href="#">
              <i className="me-2 p-1 bg-dark rounded">
                <RiHome5Line/>
              </i> 
              <span>
                El Camino SA de CV
              </span>
            </a>
          </div>
          <div  className="d-flex flex-row-reverse text-white m-2">
            <a 
            rel="stylesheet" 
            href="#"
            className="text-white text-decoration-none m-2">
              <i className="me-2 p-1 bg-dark rounded">
                <RiRecordCircleLine/>
              </i> 
              <span>
                Crear Segmentos
              </span>
            </a>
          </div>
          <div className="d-flex flex-row-reverse text-white m-2">
            <a 
            className="text-white text-decoration-none m-2"
            href="#">
              <i className="me-2 p-1 bg-dark rounded">
                <RiSearchEyeLine/>
              </i> 
              <span>
                Listado de Segmento
              </span> 
            </a>
          </div>
          <div className="d-flex flex-row-reverse text-white m-2">
            <a 
            className="text-white text-decoration-none m-2"
            href="#">
              <i className="me-2 bg-dark rounded p-1">
                <RiCodeFill/>
              </i> 
              <span>
                Nuevo Tag
              </span> 
            </a>
          </div>
          <div className="d-flex flex-row-reverse text-white m-2">
          <a 
          className="text-white text-decoration-none m-2"
          href="#">
              <i className="me-2 bg-dark rounded p-1">
                <RiShuffleLine/>
              </i> 
              <span>
                Configurar Destino
              </span> 
            </a>
          </div>
        </div>
        <div className="d-flex justify-content-end m-2 mb-5">
          <a 
          className="me-2 text-white"
          href="#">
            Link
          </a>
        </div>
        <div className="d-flex justify-content-end m-2 mb-2">
          <a 
          className="text-white mb-2"
          href="#">
            <i className="me-2 p-1 bg-dark">
              <RiArrowLeftSLine/>
            </i>
          </a>
        </div>
      </div>
    </div>
  )
}