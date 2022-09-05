import React from "react";

import { 
  BiBookmark,
  BiDotsVerticalRounded,
  BiShowAlt
} from 'react-icons/bi';

export default function FileSegment () {
  return(
    <div>
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
    </div>
  )
}