import React from "react";
import "./header.css";
function Header(){
    return(
        <header>
            <div className="left-section">
                 <img className="menu"  src="Assets/Icons/men.png" alt="this is the menu" />
             <img className="logo" src="Assets/Icons/logo2.png" alt="this is the logo" />

            </div>
            <div className="midle-section">
                <input className="search" type="text" placeholder="Search" />
            <div className="tt"><button> <img src="Assets/Icons/seach.png" alt="this is the search btn" /></button>
             
            </div> 
            <img className="voice" src="Assets/Icons/voice.png" alt="this is the voice search icon" />
           
            

            </div>
            <div className="right-section">
                <div className="not-s">
                    <p>37</p>

                </div>
               <img className="plus" src="Assets/Icons/plus.png" alt="this is the icon" />
                <img className="dot" src="Assets/Icons/dots.png" alt="this is the dot" />
                 <img className="nots" src="Assets/Icons/notification.png" alt="this is the menu" />
                  <img className="profile" src="Assets/Images/pang.jpg" alt="this is the menu" width="100px" />

            </div>
           
             
              
        </header>
       


    )
}
export default Header