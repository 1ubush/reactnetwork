import React from "react";
import '../Sidebar/Sidebar.css'

class Sidebar extends React.Component {
   render () {
      return (
         <div className="item_list">
            <a href="#">Profile</a>
            <a href="#">Messages</a>
            <a href="#">News</a>
            <a href="#">Musik</a>
            <a href="#">Settings</a>
         </div>
      )
   }
}

export default Sidebar