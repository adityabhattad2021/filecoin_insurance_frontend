import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Payment from "./pages/Payment";
import User from "./pages/User";
import { useAuthContext } from "./hook/Authhook";

function App() {

  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/payment" element={user ? <Payment /> : <Navigate to={"/"}/>} />
          <Route exact path="/user" element={user ? <User /> : <Navigate to={"/"}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
