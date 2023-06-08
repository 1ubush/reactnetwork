import React from "react";
import '../Conteiner/Conteiner.css'

class Conteiner extends React.Component {
   render () {
      return (
         <div className="content">
            <div className="person_list">
               <div className="avatar_conteiner">
                  <img className="avatar" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Icecat1-300x300.svg/1024px-Icecat1-300x300.svg.png" alt="Avatar" />
               </div>
               <div className="main_info">
                  <h2 className="main_info_item">Name:</h2>
                  <p className="main_info_item">Date of Birth:</p>
                  <p className="main_info_item">Education:</p>
                  <p className="main_info_item">Web Site:</p>
               </div>
            </div>
            <div className="lenta">
               <h2>My Posts</h2>
               <div className="message_button">
                  <textarea className="input" type="text" placeholder="Write text" />
                  <button className="message">Send</button>
               </div>
               <div>Any?</div>
            </div>
         </div>
      )
   }
}

export default Conteiner