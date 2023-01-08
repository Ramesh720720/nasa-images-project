import PromiseClass from "../program js/ProgramJs";
import $ from 'jquery';
export default async function ReturnData(StartDate,EndDate) {
  let PromiseReq = new PromiseClass(
    StartDate,EndDate
  );
  let TempalteArray = [];
 const value = await PromiseReq.GetData();
  value.forEach((element) => {
    TempalteArray.push(temp(element));
  });
  $('#LoadingEvent').css('display', 'none');
  return TempalteArray;
}
function temp(ObjectData) {
  let heading = ObjectData.title;
  let date = ObjectData.FullDate;
  let MediaContent = checkMediaType(ObjectData);
  let Templates =
    '<div class="image-container-m"><div class="wfc">' +
    MediaContent +
    '</div><div class="wfc" ><h1 class="heading-m-image wfc">' +
    heading +
    "</div> <div class='wfc'><p class='m-image-date-p wfc' > " + date + "</p></div></h1><hr> <div class='wfc'><span><p class='shortContent'>"+
     (ObjectData.explanation).substring(0,80)+'.....'+"</p><button type='button'  class='MoreAboutImageContent'>Read more</button><span></div></div></div>";
     return Templates;
}
function CheckUrl(Obj) {
  let ObjectKeyArray = [];                            
  ObjectKeyArray = Object.keys(Obj);
  // var index;
  for (let i = 0; i < ObjectKeyArray.length; i++) {
    const element = ObjectKeyArray[i];
    let foundResult = false;
    if (element === "hdurl") {
      foundResult = true;
      // index = i;
      return element;
    }
    if (foundResult === false) {
      if (element === "url") {
        return element;
      }
    }
  }
}
function checkMediaType(obj) {
  let UrlType = CheckUrl(obj);
  let iod_image_src = obj[UrlType];
  let media_type = obj.media_type;
  if (media_type === "image") {
    return (
      '<img class="images-default wfc" src=' +
      iod_image_src +
      ' alt="Error" ></img>'
    );
  }
  if (media_type === "video") {
    return (
      '<iframe  class="images-default wfc" src=' +
      iod_image_src +
      ' alr="Error" ></iframe>'
    );
  }
}
