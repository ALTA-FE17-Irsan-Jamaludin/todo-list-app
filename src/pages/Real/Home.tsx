// import React from "react";
import { FC } from "react";
import Navbar from "../../components/REAL/Navbar";
import LeftMenu from "../../components/REAL/LeftMenu";

const Home: FC = () => {
  return (
    <>
      <div className="h-screen w-full">
        <Navbar />
        <LeftMenu />
      </div>
    </>
  );
};

export default Home;
