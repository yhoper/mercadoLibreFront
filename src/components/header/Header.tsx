import React, { FC } from "react";
import { Logo } from "./Logo";
import { SearchBox } from "./SearchBox";

const Header:FC = () => {

  return (
    <header>
      <div className="container" >
        <Logo />
        <SearchBox />
      </div>
    </header>
  )
}
export default Header
