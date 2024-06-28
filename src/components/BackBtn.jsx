import { useNavigate } from "react-router-dom";

import React from "react";

const BackBtn = () => {
  const navigate = useNavigate();
  return <button onClick={() => navigate("/admin")}
  className="absolute lg:left-[30%] left-[5%] top-[20%] lg:top-[10%] bg-blue-950 text-white font-semibold p-2 rounded-full px-7"
  > Go Back</button>;
};

export default BackBtn;
