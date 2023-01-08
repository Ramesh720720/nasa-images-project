import React, { useState } from "react";
import './Darkmode.css';
import btnImg from '../images_in/moon.svg';
import $ from 'jquery';
let DarkMode=true;
function DefaultBg() {
    document.body.style.backgroundColor = "#0f022b";
    document.body.style.color = "rgb(255 255 255 / 83%)";
    $('#DarkModeButton').css('backgroundColor','gray');
  }
  function SetBgFun() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    $('#DarkModeButton').css('backgroundColor','wheat');
}
export default function Darkmode() {
    function EnableWhiteMode(){
        if(DarkMode){
            SetBg(SetBgFun)
            DarkMode=false;
        }else{
            SetBg(DefaultBg);
            DarkMode=true;
        }
    }
 
  const [defaultBg, SetBg] = useState(DefaultBg);
  return (
    <div id="DarkModeDiv">
      <div>
        <button id="DarkModeButton" className="DarkModeBtn"
          type="button"
          onClick={EnableWhiteMode}
        >
          <img
            className="darkmodeImg"
            src={btnImg}
            alt='DarkMode'
          ></img>
        </button>
      </div>
    </div>
  );
}
