import React from "react";
import '../Header/Header.css'

class Header extends React.Component {
   render () {
      return (
         <div className="conteiner_logo">
            <img className="logo" src="https://1000logos.net/wp-content/uploads/2023/04/Starbucks-logo.png" alt="Logo"/>
            <h1>Teremki Network</h1>
         </div>
      )
   }
}

export default Header