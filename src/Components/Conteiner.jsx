import React from "react";

class Conteiner extends React.Component {
   render () {
      return (
         <div className="content">
            <div className="person_list">
               <img className="avatar" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Icecat1-300x300.svg/1024px-Icecat1-300x300.svg.png" alt="Avatar" />
               <div>
                  <h1>Tolia L.</h1>
                  <p>Name:</p>
                  <p>City:</p>
                  <p>Age:</p>
               </div>
            </div>
            <h1>My Post</h1>
            <input type="text" placeholder="Write text" />
            <button>Send</button>
            <div>Any?</div>
         </div>
      )
   }
}

export default Conteiner