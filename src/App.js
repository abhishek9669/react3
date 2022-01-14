import Header from "./Header";

import Addstudent from "./Addstudent";
import Home from "./Home";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

function App() {
  return (
    <div className="">
      <BrowserRouter>
          <Header />
          <Routes>
                <Route path="/home" element={<Addstudent/>}/>
                <Route path="/" element={<Home/>}/>
          </Routes>
          

      </BrowserRouter>
    
  
    </div>
  );
}

export default App;
