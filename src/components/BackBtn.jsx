import { useNavigate } from "react-router-dom";

import React from "react";

const BackBtn = () => {
  const navigate = useNavigate();
  return <button onClick={() => navigate("/")}>Back</button>;
};

export default BackBtn;
