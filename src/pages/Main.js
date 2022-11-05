import HeadLayout from "components/layouts/HeadLayout";
import React from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  return (
    <HeadLayout>
      <div>
        <div><h2>메인페이지</h2></div>
        <button onClick={() => navigate("/counter")}>카운터로 이동</button>
      </div>
    </HeadLayout>
  );
};

export default Main;
