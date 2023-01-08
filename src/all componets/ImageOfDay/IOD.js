import $ from "jquery";
import React  from "react";
import writeImage from "../images_in/user-images.svg";
import "../ImageOfDay/IOD.css";
import "../ImageOfDay/IODjs";
import setHeightFun from "../ImageOfDay/IOD_css";
import "../ImageOfDay/IOD_css";
export default function IOD() {
  function resolution(){
    return (document.getElementById('rangeInput').value);
  }
  function ImgResol(){
    $('#mainImageOfSearch').css('filter','brightness('+resolution()+')');
  }
  return (
    <div id="mainContainerSingleImage">
      <div id="loading_template">
        <center>
        <div  className="lds-dual-ring"></div>
        </center>
      </div>
      <section id="IOD-selection" className="IOD">
        <div id="IOD-main-div">
          <div id="header-box-IOD" className="header-box">
            <div id="publish-date-photographer">
              <div
                id="creater-IOD-box"
                className="display-flex-copyrighter creater-box-IOD"
              >
                <div id="copyrighter-image-IOD" className="copywriter-image">
                  <img
                    className="write-image"
                    alt="Error"
                    src={writeImage}
                  ></img>
                </div>
                <div className="date-copywiter">
                  <div
                    id="copyrighter-IOD"
                    className="display-flex-copyrighter copyrighter-name"
                  >
                    <p
                      id="copyrighter-name-p-IOD"
                      className="copyrighter-name-p"
                    >
                      {/* copyrighter */}
                    </p>
                  </div>
                  <div id="publish-date-IOD-box">
                    <p id="publish-date-IOD" className="m0 publish-date-p">
                      {/* publish date of image */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="heading-iod" className="heading-image">
              <h1 id="IOD-heading" className="image-heading">
                {/* {heading of image} */}
              </h1>
            </div>
            <div></div>
          </div>
          <hr></hr>
          <div id="image-content-container">
            <div id="content-image-IOD" className="content-image">
              <aside>
                <div className="IOD-image-div">
                  <div id="IOD-image-DIV" className="IOD-image-box">
                    {/* <img id="IOD-image" alt="Some Error" className="iod-iamge"></img> */}
                  </div>
                  <div>
                    <form>
                      {/* <label htmlFor="range">Set Resolution:</label> */}
                      <input onChange={ImgResol} title='Set Resolution' id='rangeInput' type='range' step='0.2' min='0.2' max='2.8'></input>
                      {/* <input type='submit'>Ok</input> */}
                    </form>
                    {/* <button type="button" className="DownloadIamgeBtn">
                      <a id="Download_a">Download</a>
                    </button> */}
                  </div>
                  <div>
                    
                  </div>
                </div>
              </aside>
              <p id="cotent-IOD" className="m0 content-about-image">
                {/* content of image */}
              </p>
            </div>
          </div>
        </div>
        <div id="aside-image"></div>
      </section>
      <div id="loading">
      </div>
    </div>
  );
}
// js css
$(document).ready(function () {
  let applyHeight = document.getElementById("aside-image");
  let height = $("#IOD-main-div").height();
  applyHeight.style.height = height + "px";
  setHeightFun();
  let i = 0;
  let heightTimeOut = setInterval(() => {
    let applyHeight = document.getElementById("aside-image");
    let height = $("#IOD-main-div").height();
    applyHeight.style.height = height + "px";
    if (i > 10) {
      clearInterval(heightTimeOut);
    }
    i++;
  }, 500);
});
