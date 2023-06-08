import React from "react";

class Sidebar extends React.Component {
   render () {
      return (
         <div>
            <ul>
               <li>
                  <a href="#">Profile</a>
               </li>
               <li>
                  <a href="#">Messages</a>
               </li>
               <li>
                  <a href="#">News</a>
               </li>
               <li>
                  <a href="#">Musik</a>
               </li>
            </ul>
            <div>Settings</div>
         </div>
      )
   }
}

export default Sidebar