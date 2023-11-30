
import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import Products from "./Components/Products"
import Users from "./Components/Users";


function App() {
  return (
    <div className="wrapper">
      <Nav/>
      <div className="box">
    <Routes>
      <Route path={"/products"} element={<Products/>} />
      <Route path={"/users"} element={<Users/>}/>
    </Routes>
    </div>
    </div>
  )
}

export default App
