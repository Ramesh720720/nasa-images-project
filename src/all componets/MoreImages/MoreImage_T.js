import $ from "jquery";
import React from "react";
import "./MoreImgJs";
import TempalteArray from "./MoreImgJs";
import "./MoreImage.css";
import { ObjectClass } from "../program js/ProgramJs";
import { today_content_data } from "../ImageOfDay/IODjs";
let defaultTempalte = false;
let classNew = new ObjectClass();
$("#LoadingEvent").css("display", "none");
$(document).ready(function () {
  let loadingHtml = new DOMParser();
  let loadingDiv = loadingHtml.parseFromString(
    $("#loading_template").html(),
    "text/html"
  ).body.innerHTML;
  document.getElementById("LoadingEvent").innerHTML = loadingDiv;
});
function AddMoreTemplate(StartDate, EndDate) {
  $("#LoadingEvent").css("display", "unset");
  TempalteArray(StartDate, EndDate).then((Objects) => {
    Objects.forEach((element) => {
      function printObj() {
        let FullDate = element.getElementsByTagName("div")[2].innerText;
        let Date = classNew.GetShortDate(FullDate);
        today_content_data(Date);
        window.scrollTo(0, 0);
      }
      let parserTag = new DOMParser();
      let SParseTag = parserTag.parseFromString(element, "text/html");
      let MainHTMLContent =
        SParseTag.body.firstElementChild.getElementsByTagName("button");
      MainHTMLContent[0].addEventListener("click", printObj);
      element = SParseTag.body.firstElementChild;
      $("#tempAll").append(element);
    });
  });
  defaultTempalte = true;
}
if (!defaultTempalte) {
  AddMoreTemplate(
    new Date().MinusAddDays(-25).shortD(new Date().MinusAddDays(-25)),
    new Date().short()
  );
}
var addDay = 0;
function OnClickMoreImage() {
  let SDay = 26 + addDay;
  let Eday = 50 + addDay;
  AddMoreTemplate(
    new Date().MinusAddDays(-Eday).shortD(new Date().MinusAddDays(-Eday)),
    new Date().MinusAddDays(-SDay).shortD(new Date().MinusAddDays(-SDay))
  );
  addDay = 26 + addDay;
  return addDay;
}
export default function MoreImage_T() {
  return (
    <div id="AllTeplatesContainer">
      <div>
        <center>
          <h1 className="headingMore">
          More Space Images
            {/* <marquee width="80%" scrollamount="20" direction="right">
              More Space Images || More Space Images || More Space Images
            </marquee> */}
          </h1>
        </center>
      </div>
      <div id="tempAll"></div>
      <div id="LoadingEvent"></div>
      <div id="MoreBtn">
        <center>
          <button
            onClick={OnClickMoreImage}
            className="LoadMoreTempalte"
            type="button"
          >
            More Images
          </button>
        </center>
      </div>
    </div>
  );
}
