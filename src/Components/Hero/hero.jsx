import React from "react";
import "./hero.css";
import Cards from "../Cards/card";

// Receive sidebar state as a prop
function Hero  ({ sidebar }){
    return(
        <div className="hero">
            {/* Conditionally apply the active class based on the sidebar state */}
            <div className={sidebar ? "side-bar active" : "side-bar"}>
                <div className="explor">
                    <img src="Assets/Icons/home.png" alt="Home" />
                    <h5>Home</h5>
                </div>
                <div className="explor">
                    <img src="Assets/Icons/explor.png" alt="explor" />
                    <h5>Explor</h5>
                
                </div>
                <div className="explor">
                    <img src="Assets/Icons/subscribe.png" alt="Subscribe" />
                    <h5>Subscribtions</h5>
                </div>
                <div className="explor">
                    <img src="Assets/Icons/video.png" alt="videios" />
                    <h5>Organize </h5>
                </div>
                <div className="explor">
                    <img src="Assets/Icons/music.png" alt="explor" />
                    <h5>Youtube music</h5>
                </div>
                <div className="explor">
                    <img src="Assets/Icons/invert.png" alt="explor" />
                    <h5>Libary</h5>
                </div>
              
              
            </div>
            <div className="container">
                <Cards Image="Assets/Images/m2.png" profile="Assets/Images/m2.png" Tittle="Watch horor and action with us let's have it here" time="Watch movies with us now !" year="30.6M views & 4 years ago" men="20:55" bot="Download"/>
                <Cards Image="Assets/Images/m1.png" profile="Assets/Images/m1.png" men="1:30:16" Tittle="Taking movies and music to the next level" time="Watch movies with us now !" year=" 5.3m views & 4 years ago" bot="Download"/>
                <Cards Image="Assets/Images/m3.png" profile="Assets/Images/m3.png" men="2:15:20" Tittle="Taking movies and music to the next level" time="Watch movies with us now !" year="5.3m views & 4 years ago" bot="Download"/>
                <Cards Image="Assets/Images/m4.png" profile="Assets/Images/m4.png" men="1:15:30" Tittle="Taking movies and music to the next level" time="this is a video" year="5.3m views & 4 years ago" bot="Download"/>
                <Cards Image="Assets/Images/m5.png" profile="Assets/Images/m5.png" men="4:15:30" Tittle="Taking movies and music to the next level" time="Watch movies with us now !" year="5.3m views & 4 years ago" bot="Download"/>
                <Cards Image="Assets/Images/m6.png" profile="Assets/Images/m6.png" men="3:15:30" Tittle="Taking movies and music to the next level" time="Watch movies with us now !" year="5.3m views & 4 years ago" bot="Download"/>
                <Cards Image="Assets/Images/m7.png" profile="Assets/Images/m7.png" men="1:15:50" Tittle="Taking movies and music to the next level" time="Watch movies with us now !" year="5.3m views & 4 years ago" bot="Download"/>
                <Cards Image="Assets/Images/m8.png" profile="Assets/Images/m8.png" men="1:25:30" Tittle="Taking movies and music to the next level" time="Watch movies with us now !" year="5.3m views & 4 years ago" bot="Download"/>
                <Cards Image="Assets/Images/m9.png" profile="Assets/Images/m9.png" men="1:25:30" Tittle="Taking movies and music to the next level" time="Watch movies with us now !" year="5.3m views & 4 years ago" bot="Download"/>
                <Cards Image="Assets/Images/m10.png" profile="Assets/Images/m10.png" men="1:25:30" Tittle="Taking movies and music to the next level" time="Watch movies with us now !" year="5.3m views & 4 years ago" bot="Download"/>
                <Cards Image="Assets/Images/m11.png" profile="Assets/Images/m11.png" men="1:25:30" Tittle="Taking movies and music to the next level" time="Watch movies with us now !" year="5.3m views & 4 years ago" bot="Download"/>
                <Cards Image="Assets/Images/m12.png" profile="Assets/Images/m12.png" men="1:25:30" Tittle="Taking movies and music to the next level" time="Watch movies with us now !" year="5.3m views & 4 years ago" bot="Download"/>
                <Cards Image="Assets/Images/m13.png" profile="Assets/Images/m13.png" men="1:25:30" Tittle="Taking movies and music to the next level" time="Watch movies with us now !" year="5.3m views & 4 years ago" bot="Download"/>
                <Cards Image="Assets/Images/m14.png" profile="Assets/Images/m14.png" men="1:25:30" Tittle="Taking movies and music to the next level" time="Watch movies with us now !" year="5.3m views & 4 years ago" bot="Download"/>
                <Cards Image="Assets/Images/m15.png" profile="Assets/Images/m15.png" men="1:25:30" Tittle="Taking movies and music to the next level" time="Watch movies with us now !" year="5.3m views & 4 years ago" bot="Download"/>
                <Cards Image="Assets/Images/m16.png" profile="Assets/Images/m16.png" men="1:25:30" Tittle="Taking movies and music to the next level" time="Watch movies with us now !" year="5.3m views & 4 years ago" bot="Download"/>
                <Cards Image="Assets/Images/m17.png" profile="Assets/Images/m17.png" men="1:25:30" Tittle="Taking movies and music to the next level" time="Watch movies with us now !" year="5.3m views & 4 years ago" bot="Download"/>
                <Cards Image="Assets/Images/m18.png" profile="Assets/Images/m18.png"men="1:25:30" Tittle="Taking movies and music to the next level" time="Watch movies with us now !" year="5.3m views & 4 years ago" bot="Download"/>
                <Cards Image="Assets/Images/m19.png" profile="Assets/Images/m19.png" men="1:25:30" Tittle="Taking movies and music to the next level" time="Watch movies with us now !" year="5.3m views & 4 years ago" bot="Download"/>
                <Cards Image="Assets/Images/m20.png" profile="Assets/Images/m20.png" men="1:25:30" Tittle="Taking movies and music to the next level" time="Watch movies with us now !" year="5.3m views & 4 years ago" bot="Download"/>
                <Cards Image="Assets/Images/m21.png" profile="Assets/Images/m21.png" men="1:25:30" Tittle="Taking movies and music to the next level" time="Watch movies with us now !" year="5.3m views & 4 years ago" bot="Download"/>
                <Cards Image="Assets/Images/m22.png" profile="Assets/Images/m22.png" men="1:25:30" Tittle="Taking movies and music to the next level" time="Watch movies with us now !" year="5.3m views & 4 years ago" bot="Download"/>
                <Cards Image="Assets/Images/m23.png" profile="Assets/Images/m23.png" men="1:25:30" Tittle="Taking movies and music to the next level" time="Watch movies with us now !" year="5.3m views & 4 years ago" bot="Download"/>
                <Cards Image="Assets/Images/m24.png" profile="Assets/Images/m24.png" men="1:25:30" Tittle="Taking movies and music to the next level" time="Watch movies with us now !" year="5.3m views & 4 years ago" bot="Download"/>
                <Cards Image="Assets/Images/m25.png" profile="Assets/Images/m25.png" men="1:25:30" Tittle="Taking movies and music to the next level" time="Watch movies with us now !" year="5.3m views & 4 years ago" bot="Download"/>
                <Cards Image="Assets/Images/m26.png" profile="Assets/Images/m26.png" men="1:25:30" Tittle="Taking movies and music to the next level" time="Watch movies with us now !" year="5.3m views & 4 years ago" bot="Download"/>
                <Cards Image="Assets/Images/m27.png" profile="Assets/Images/m27.png" men="1:25:30" Tittle="Taking movies and music to the next level" time="Watch movies with us now !" year="5.3m views & 4 years ago" bot="Download"/>
                <Cards Image="Assets/Images/m28.png" profile="Assets/Images/m28.png" men="1:25:30" Tittle="Taking movies and music to the next level" time="Watch movies with us now !" year="5.3m views & 4 years ago" bot="Download"/>
                <Cards Image="Assets/Images/m29.png" profile="Assets/Images/m29.png" men="1:25:30" Tittle="Taking movies and music to the next level" time="Watch movies with us now !" year="5.3m views & 4 years ago" bot="Download"/>
                <Cards Image="Assets/Images/m30.png" profile="Assets/Images/m30.png" men="1:25:30" Tittle="Taking movies and music to the next level" time="Watch movies with us now !" year="5.3m views & 4 years ago" bot="Download"/>
                <Cards Image="Assets/Images/m31.png" profile="Assets/Images/m31.png" Tittle="Taking movies and music to the next level" time="Watch movies with us now !" year="5.3m views & 4 years ago" bot="Download"/>
                <Cards Image="Assets/Images/m32.png" profile="Assets/Images/m32.png" men="1:25:30" Tittle="Taking movies and music to the next level" time="Watch movies with us now !" year="5.3m views & 4 years ago" bot="Download"/>
                <Cards Image="Assets/Images/m33.png" profile="Assets/Images/m33.png" men="1:25:30" Tittle="Taking movies and music to the next level" time="Watch movies with us now !" year="5.3m views & 4 years ago" bot="Download"/>
                <Cards Image="Assets/Images/m34.png" profile="Assets/Images/m34.png" men="1:25:30" Tittle="Taking movies and music to the next level" time="Watch movies with us now !" year="5.3m views & 4 years ago" bot="Download"/>
                <Cards Image="Assets/Images/m35.png" profile="Assets/Images/m35.png" men="1:25:30" Tittle="Taking movies and music to the next level" time="Watch movies with us now !" year="5.3m views & 4 years ago" bot="Download"/>
                <Cards Image="Assets/Images/m36.png" profile="Assets/Images/m36.png" men="1:25:30" Tittle="Taking movies and music to the next level" time="Watch movies with us now !" year="5.3m views & 4 years ago" bot="Download"/>
                <Cards Image="Assets/Images/m37.png" profile="Assets/Images/m37.png" men="1:25:30" Tittle="Taking movies and music to the next level" time="Watch movies with us now !" year="5.3m views & 4 years ago" bot="Download"/>
                 <Cards Image="Assets/Images/m38.png" profile="Assets/Images/m38.png" men="1:25:30" Tittle="Taking movies and music to the next level" time="Watch movies with us now !" year="5.3m views & 4 years ago" bot="Download"/>
                  <Cards Image="Assets/Images/m39.png" profile="Assets/Images/m39.png" Tittle="Taking movies and music to the next level" time="Watch movies with us now !" year="5.3m views & 4 years ago" bot="Download"/>
                   <Cards Image="Assets/Images/m40.png" profile="Assets/Images/m40.png" men="1:25:30" Tittle="Taking movies and music to the next level" time="Watch movies with us now !" year="5.3m views & 4 years ago" bot="Download"/>
                    <Cards Image="Assets/Images/m41.png" profile="Assets/Images/m41.png" men="1:25:30" Tittle="Taking movies and music to the next level" time="Watch movies with us now !" year="5.3m views & 4 years ago" bot="Download"/>
                     <Cards Image="Assets/Images/m42.png" profile="Assets/Images/m42.png" men="1:25:30" Tittle="Taking movies and music to the next level" time="Watch movies with us now !" year="5.3m views & 4 years ago" bot="Download"/>
                      <Cards Image="Assets/Images/m43.png" profile="Assets/Images/m43.png" men="1:25:30" Tittle="Taking movies and music to the next level" time="Watch movies with us now !" year="5.3m views & 4 years ago" bot="Download"/>
                       <Cards Image="Assets/Images/m44.png" profile="Assets/Images/m44.png" men="1:25:30" Tittle="Taking movies and music to the next level" time="Watch movies with us now !" year="5.3m views & 4 years ago" bot="Download"/>
                        <Cards Image="Assets/Images/m45.png" profile="Assets/Images/m45.png" men="1:25:30" Tittle="Taking movies and music to the next level" time="Watch movies with us now !" year="5.3m views & 4 years ago" bot="Download"/>
                         <Cards Image="Assets/Images/m46.png" profile="Assets/Images/m46.png" men="1:25:30" Tittle="Taking movies and music to the next level" time="Watch movies with us now !" year="5.3m views & 4 years ago" bot="Download"/>
                          <Cards Image="Assets/Images/m47.png" profile="Assets/Images/m47.png" men="1:25:30" Tittle="Taking movies and music to the next level" time="Watch movies with us now !" year="5.3m views & 4 years ago" bot="Download"/>
                           <Cards Image="Assets/Images/m48.png" profile="Assets/Images/m48.png" men="1:25:30" Tittle="Taking movies and music to the next level" time="Watch movies with us now !" year="5.3m views & 4 years ago" bot="Download"/>
                            <Cards Image="Assets/Images/m49.png" profile="Assets/Images/m49.png" men="1:25:30" Tittle="Taking movies and music to the next level" time="Watch movies with us now !" year="5.3m views & 4 years ago" bot="Download"/>
                             <Cards Image="Assets/Images/m50.png" profile="Assets/Images/m50.png" men="1:25:30" Tittle="Taking movies and music to the next level" time="Watch movies with us now !" year="5.3m views & 4 years ago" bot="Download"/>
                              <Cards Image="Assets/Images/m51.png" profile="Assets/Images/m51.png" men="1:25:30" Tittle="Taking movies and music to the next level" time="Watch movies with us now !" year="5.3m views & 4 years ago" bot="Download"/>
                              <Cards Image="Assets/Images/m52.png" profile="Assets/Images/m52.png" men="1:25:30" Tittle="Taking movies and music to the next level" time="Watch movies with us now !" year="5.3m views & 4 years ago" bot="Download"/>
                
            </div>



            
        </div>
    )
}
export default Hero;