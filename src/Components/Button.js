import React from "react";

const buttons = ["Main", "Contacts", "Info"]

class Button extends React.Component {
   render () {
      return (
         <div className="buttons_block">
            <button className="button">{buttons[0]}</button>
            <button className="button">{buttons[1]}</button>
            <button className="button">{buttons[2]}</button>
         </div>
      )
   }
}

export default Button