import React from "react";
import Header from "../components/Header/Header";
import "../styles/Home.css";

export const Home = () => {
  return (
    <div>
      <Header />
      <div className="min-height-div">
        <div className="container-meetnow">
          <div className="left-section">
            <p className="color-general">
              <span style={{ color: "#2196F3" }}>MeetNow</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id nam vitae impedit error fugiat, quas doloribus enim at inventore ullam quod sit laudantium, dolor quis facilis explicabo voluptatum doloremque adipisci.
              <span
                className="color-image color-image2 color-text-span fontF color-image3 color-image4"
                style={{ color: "#FF5722" }}
              >
                {" "}
                parte de tu vida.<br></br>
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
