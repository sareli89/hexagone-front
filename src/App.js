import React from "react";

import {
  Favourites, 
  Files,
  Header,
  SideNavbar
} from '../src/components/index'

function App() {
  return (
    <div className="container-fluid mt-2 bg-light"> 
      <div className="row">

        <div className="col-0 col-md-3 .d-none .d-md-block">
          <SideNavbar/>
        </div>
        <div className="col-12 col-md-9">
          <div className="bg-secondary  h-auto-">
            <Header/>
          </div>
          <div className=" h-auto">
            <Favourites/>
          </div>
          <div className="bg-info  h-auto">
            <Files/>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default App;