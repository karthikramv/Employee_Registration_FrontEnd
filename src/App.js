import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ListEmployee from "./Components/ListEmployee";
import AddEmployee from "./Components/AddEmployee";

function App() {
  return (
   <div>
    <BrowserRouter>
      <Header/>
      <div className="container">
      <Routes>
        <Route exact path="/" element={<ListEmployee/>}></Route>
        <Route path="/employees" element={<ListEmployee/>}></Route>
        <Route path="/add-employee" element={<AddEmployee/>}></Route>
      </Routes>
      </div>
      <Footer/>
      </BrowserRouter>
      <Footer/>
   </div>
  )
}

export default App;
