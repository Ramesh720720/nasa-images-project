import $ from 'jquery';
export default function setHeight() {
  let applyHeight = document.getElementById("aside-image");
  window.addEventListener('resize',function(){
    let height=($('#IOD-main-div').height());
    applyHeight.style.height =  height + "px";
  });
}
$(document).ready(function () {
  $('#mainContainerSingleImage').css('margin-top', $('#navbar').height());
});
