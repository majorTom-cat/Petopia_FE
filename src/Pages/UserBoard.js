import React from "react";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import UserRegion from "../Pages/UserRegion";
import "../Styles/Main.css";
import { Route, Routes } from "react-router-dom";

const UserBoard = () => {
  return (
    <section className="full-bg">
      <section className="left-bg">
        {/*배경 요소 디자인 */}
        <div className="logo">
          <img src="../../img/logo.png" alt="Petoia logo" />
        </div>
        <div className="main-left">
          <h1>
            반려 동물과
            <br />
            함께하는
            <br />
            일상 여행
          </h1>
          <img src="../../img/dog_main.png" alt="dog" />
        </div>
      </section>

      <main>
        <Header />
        <section>
          <div>
            <Routes>
              <Route path="userboard/userregion" element={<UserRegion />} />
            </Routes>
            <div>지역별 커뮤니티 게시판</div>
          </div>
        </section>
        <Footer />
      </main>
    </section>
  );
};

export default UserBoard;
