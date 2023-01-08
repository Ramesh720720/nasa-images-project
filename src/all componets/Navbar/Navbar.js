import $ from 'jquery';
import React  from "react";
import navbar_btn from "D:/node js react/nodejs tutorial/nasa-images-project/src/all componets/images_in/7524795.png";
import "D:/node js react/nodejs tutorial/nasa-images-project/src/all componets/Navbar/navbar.css";
export default function Navbar() {
  return (
    <div id="NavbarContainer">
      <div id="navbar">
        <div id="navbar-all-container">
          <div id="web-name-links">
            <div id="image-name">
              <div id="web-name">
                <h1 className="web-name-heading">NASA IMAGES</h1>
              </div>
            </div>
            <div id="other_pages">
              <div id="main_other_page_link">
                <a href="/" className="menu-link">
                  Home
                </a>
                {/* <a href="/" className="menu-link">
                  ISRO
                </a>
                <a href='./nasa-images-project/src/About Selection/About.html' className="menu-link">
                  About Us
                </a> */}
              </div>
            </div>
          </div>
          <div id="search-form-navbar-btn">
            <div id="search_box">
              <div id="form">
                <form id="navbar-search-form" action="">
                  <input
                    className="navbar-search-input-area"
                    type="date"
                    name="end-Date"
                    id="search_box_end_date"
                    placeholder="End Date"
                  />
                  <input
                    className="navbar-search-input-area"
                    type="submit"
                    value="Search"
                  />
                </form>
              </div>
            </div>
          </div>
          <div id="navbar-btn">
            <button onClick={navbar_btn_onclick} type="button" id="navbar_btn">
              <img src={navbar_btn} className="navbar-btn" alt="Navbar"></img>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
$(document).ready(function () {
  $('#navbar').css('margin-top',- $('#navbar').height());
});
let navbar_open=false;
export function navbar_btn_onclick(){
    if(!navbar_open){
        document.getElementById('search_box').style.display='flex';
        document.getElementById('other_pages').style.display='flex';
        $(document).ready(function () {
          // console.log($('#NavbarContainer').nextUntil());
          // $($('#NavbarContainer').next()[0]).css('opacity', 0.2);
        });
        return navbar_open=true;
    }else{
        document.getElementById('search_box').style.display='none';
        document.getElementById('other_pages').style.display='none';
        return navbar_open=false;
    }
}