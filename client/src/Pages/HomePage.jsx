import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Socket } from "socket.io-client";

function HomePage({socket}) {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userName", userName);
    socket.emit("newUser",{userName, SocketID:socket.id})
    navigate("/chat");
  };

  return (
    <div className="container-fluid bg-dark " style={{height:"100vh"}} >
      <div className="row justify-content-center  ">
        <div className="col-4 bg-secondary mt-5">
        <form className="mt-3 " onSubmit={handleSubmit}>
          <h2 className="text-white ">CHAT 📩</h2>
          <label htmlFor="username" className="text-white">Username:</label>
          <input
            type="text"
            minLength={6}
            name="username"
            id="username"
            className="form-control"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <div className="d-flex justify-content-center">
          <button className="btn btn-primary w-100 mb-3 mt-3">Registrarme</button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
