import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ChatRoom from "./pages/ChatRoom";
import Login from "./pages/Login";
import PrivateRoute from "./Routes/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";

function App() {


  return (
    <div >
      <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chat" element={<PrivateRoute><ChatRoom /></PrivateRoute>} />
      </Routes>
      </AuthProvider>
    </div>
  )
}

export default App
