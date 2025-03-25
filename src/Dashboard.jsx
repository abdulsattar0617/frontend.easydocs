import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import JoditEditor from "jodit-react";

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  const editor = useRef(null);
  const [content, setContent] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("user-info");
    const userData = JSON.parse(data);
    setUserInfo(userData);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user-info");
    navigate("/login");
  };

  return (
    <>
      <h1>Welcome {userInfo?.name}</h1>
      <div className="user-logout-box">
        <h3>{userInfo?.email}</h3>
        {/* <img src={userInfo?.image} alt={userInfo?.name} /> */}
        <button onClick={handleLogout}>Logout</button>
      </div>

      <JoditEditor
        ref={editor}
        value={content}
        // onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        onChange={(newContent) => setContent(newContent)}
      />
    </>
  );
};

export default Dashboard;
