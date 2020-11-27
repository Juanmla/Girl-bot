import React from "react";
import WomanLottie from "../components/WomanLottie";
import "./home.css";
import Flip from "react-reveal/Flip";

const Home = ({ history }) => {
  return (
    <div>
      <WomanLottie history={history} />
      <div className="greeting">
        <Flip left>
          <h1>Hola BB!</h1>
        </Flip>
        <Flip>
          <label>Tocame y chatea</label>  
        </Flip>
      </div>
    </div>
  );
};

export default Home;
