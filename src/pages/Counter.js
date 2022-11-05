import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Contents from "components/Contents";
import HeadlessLayout from "components/layouts/HeadlessLayout";
import Footer from "components/commons/Footer";

const Counter = () => {
  const navigate = useNavigate();

  const [num, setNum] = useState(0);
  const increase = () => setNum((prev) => prev + 1);

  return (
    <HeadlessLayout>
      <>
        <div>
          <h2>카운터페이지</h2>
        </div>
        <div>클릭수{num}</div>
        <div>
          <button onClick={increase}>클릭</button>
        </div>
        <Contents />

        {/* <Link to={"/"}>메인으로 이동</Link> */}
        <button onClick={() => navigate("/")}>메인으로이동</button>
        <Footer />
      </>
    </HeadlessLayout>
  );
};

export default Counter;
