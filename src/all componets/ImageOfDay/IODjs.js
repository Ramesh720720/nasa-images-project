import GetDateClass from "../program js/ProgramJs";
import $ from 'jquery';
import '../GetSearchResult/GetSearchResult';
async function Today(DateOfContent) {
  let Today = new Date().toISOString().slice(0, 10);
  Today=DateOfContent;
  let today = new GetDateClass(Today, Today);
  let ReturnPromise=today.GetData();
  const value = await ReturnPromise;
  if (value.length === 0) {
    let datee4 = new Date().MinusAddDays(-1).toISOString().slice(0, 10);
    Today = datee4;
    let today_1 = new GetDateClass(Today, Today);
    let ReturnPromise_1 = today_1.GetData();
    return ReturnPromise_1;
  } else {
    return ReturnPromise;
  }
}
const today_content_data = async (DateOfContent) => {
  $('#IOD-selection').css('display', 'none');
  $('#loading_template').css('display', 'unset');
  // console.log($('#loading_template').html());
  // $('#mainContainerSingleImage').html('<div id="loadindiv"><h1><center>Loading....</center></h1></div>');
  let today_content = {};
  Today(DateOfContent).then((value) => {
    let objectKeyArray = Object.keys(value[0]);
    let objectValueArray = Object.values(value[0]);
    for (let i = 0; i < Object.keys(value[0]).length; i++) {
      const Okeys = Object.keys(value[0])[i];
      const Ovalue = Object.values(value[0])[i];
      today_content[Okeys] = Ovalue;
    }
    let urlIOD = objectValueArray[ImageIndex(objectKeyArray)];
    getElementIOD(
      today_content.copyright,
      today_content.FullDate,
      today_content.title,
      today_content.explanation,
      urlIOD,
      today_content.media_type
    );
  });
};
function ImageIndex(array) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    let foundResult = false;
    if (element === "hdurl") {
      foundResult = true;
      return i;
    }
    if (foundResult === false) {
      if (element === "url") {
        return i;
      }
    }
  }
}
today_content_data(new Date().toISOString().slice(0, 10));
export {today_content_data};
function getElementIOD(
  copyrighter_name,
  date_publish_,
  heading_IOD_,
  content_IOD_,
  iod_image_src,
  media_type
) {
  $('#IOD-selection').css('display', 'grid');
  $('#loading_template').css('display', 'none');
  let copyrighter = document.getElementById("copyrighter-name-p-IOD");
  copyrighter.innerText = copyrighter_name;
  let date_publish = document.getElementById("publish-date-IOD");
  date_publish.innerText = date_publish_;
  let heading_IOD = document.getElementById("IOD-heading");
  heading_IOD.innerText = heading_IOD_;
  let content_IOD = document.getElementById("cotent-IOD");
  content_IOD.innerText = content_IOD_;
  let iod_image = document.getElementById("IOD-image-DIV");
  // document.getElementById('Download_a').setAttribute('href','#');
  // document.getElementById('Download_a').setAttribute('download',(heading_IOD.innerText).split(' ').join('').concat((iod_image_src).substr(-4,4)));
  if (media_type === "image") {
    iod_image.innerHTML =
    '<img  id="mainImageOfSearch"  class="iod-iamge" src=' + iod_image_src + ' alt="Error" ></img>';
  }
  if (media_type === "video") {
    iod_image.innerHTML =
      '<iframe id="mainImageOfSearch"  class="iod-iamge iod-video" src=' +
      iod_image_src +
      ' alr="Error" ></iframe>';
  }
}
async function getAsideImage() {
  let date = new Date();
  date.setFullYear(1996, 5, 10);
  let start_date = date.toISOString().slice(0, 10);
  let end_date = date.MinusAddDays2(date, 5).toISOString().slice(0, 10);
  let today = new GetDateClass(start_date, end_date);
  let res = today.GetData();
  res.then( async(Result)=>{
   for (let j = 0; j < Result.length; j++) {
    const element = Result[j];
    Aside_image_sent(element);
   }
  })
  return res;
}
getAsideImage();
function Aside_image_sent(givenObjcet) { 
  let element=document.getElementById('aside-image');
  element.innerHTML+='<div class="container"><div><h3 class="m0">'+givenObjcet.title +'</h3></div><div>'+ givenObjcet.FullDate+'</div><div className="aside-images-div"><img class="aside-images-img" src='+givenObjcet.url+' alt="Error"></img></div></div>';
 }