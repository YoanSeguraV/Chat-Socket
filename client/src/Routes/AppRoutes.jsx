import { Routes, Route } from "react-router-dom";
import io from 'socket.io-client'
import HomePage from "../Pages/HomePage";
import Chat from "../Pages/Chat";

function AppRoutes() {
    const URLBACKEND="http://localhost:4000";
    const socket = io(URLBACKEND);
  return (
    <Routes>
      <Route path="/"  element={<HomePage socket={socket}/>}/>
      <Route path="/chat"  element={<Chat socket={socket}/>}/>
    </Routes>
  );
}

export default AppRoutes;
