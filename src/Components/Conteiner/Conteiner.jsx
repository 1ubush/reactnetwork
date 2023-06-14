import React from "react";

import Input from "../Input/Input";

import '../Conteiner/Conteiner.css'
import '../Input/Input.css'

class Conteiner extends React.Component {
   render () {
      return (
         <div className="content">
            <div className="photo_conteiner">
               <img className="photo" src="https://cdn-icons-png.flaticon.com/512/300/300221.png" alt="Logo" />
            </div>
            <div className="nameList">
               <h1>Name:</h1>
               <p>Birthday:</p>
               <p>Status:</p>
               <p>Happy?</p>
            </div>
            <div className="lenta">
               <Input />
            </div>
         </div>
      )
   }
}

export default Conteiner