import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProfilePage = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <h1>{"Hello " + name}</h1>
      <button onClick={() => navigate("/")}>Take a tour</button>
    </div>
  );
};

export default ProfilePage;
