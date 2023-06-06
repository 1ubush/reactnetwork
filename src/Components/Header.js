import React from "react";
import Button from "./Button";

const headerText = "Hello World"

class Header extends React.Component {
   render() {
      return (
         <header className="header">
            <img className="logo" src="#" alt="Logo" />
            <input className="src" type="text" placeholder="Help text"/>
            <Button />
         </header>
      )
   }
}

export default Header