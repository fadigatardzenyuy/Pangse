import React from "react";
import "./card.css";
function Cards({Image, profile,Tittle, time, year, men, bot}){
    return(
        <div className="card">
            <div className="image">
                 <a href="#"> <img src={Image} alt={Image} /></a>
                 <div className="time"><p>{men}</p></div>

            </div>
            
          
            <div className="describtion">
                <div className="profile">
                     <img src={profile} alt={profile} />

                </div>
                <div className="text">
   <h3>{Tittle}</h3>
            <h4>{time}</h4>
           <h4>{year}</h4>
           <a href="https://www.youtube.com/"><button>{bot}</button></a> 
            </div>
            
                </div>
               
                
             
            
        </div>
    )
}
export default Cards;