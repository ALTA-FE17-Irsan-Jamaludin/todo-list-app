// import React from 'react'
import { FC } from "react";
import TodoMark from "../Utility/todoMark";
import Button from "../Utility/Button";
import Search from "../Utility/Search";
import Notif from "../Utility/Notif";
import Setting from "../Utility/Setting";
import Sync from "../Utility/Sync";

const Navbar: FC = () => {
  return (
    <div className="shadow-md fixed z-10 w-screen bg-slate-50 flex justify-between px-5 items-center h-[10vh]">
      <div className="left flex justify-center items-center gap-3">
        <TodoMark />
        <Button />
      </div>

      <div className="right flex justify-center items-center gap-3">
        <Search />
        <Notif />
        <Setting />
        <Sync />
      </div>
    </div>
  );
};

export default Navbar;
