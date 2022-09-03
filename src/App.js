import React from "react";
import { 
  Header,
  SideNavbar
} from "./components";


function App() {
  return (
    <div className="container-fluid mt-2 bg-light"> 
      <div className="row">
        <div className="col-3">
          <SideNavbar/>
          {/* <div className="bg-warning  h-100">
            nsdjnjd
          </div> */}
        </div>
        

        <div className="col-9">
          <div className="bg-secondary  h-auto-">
            <Header/>
          </div>
            
          <div className="bg-danger  h-auto">
            ;klmdkdsk;
          </div>

          <div className="bg-info  h-auto">
            kldkd
          </div>

        </div>
      </div> 
      
    
    </div>
  );
}

export default App;
