// Object new prototype
export class ObjectClass extends Object{
  SetCopywriterName(Obj){
    if (Obj.copyright===undefined) {
      Obj['copyright']='NASA';
    }
  }
  GetShortDate(date){
    date= date.replace(/\s/g,'');  ;
    date=date.split('');
    let i=0;
  date.forEach(element => {
      if (element===' ') {
      date.splice(i,1);
      }
      i++;
    });
    date=date.join('');
    let DateArr2=date.split('');
    let DayNum=DateArr2[0]+DateArr2[1];
    let year=date.substr(-4);
    let month=date.substr(2,date.length-6).toLocaleLowerCase();
    let fullmonth = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    for (let i = 0; i < fullmonth.length; i++) {
      const element = fullmonth[i].toLocaleLowerCase();
      if(element===month){
        i=i+1;
        if(i<=9){
          i=String().concat('0'+i);
        }
        month=i;
      }
    }
    let ShortDate=String().concat(year+'-'+month+'-'+DayNum);
    return ShortDate;
  }
  GetFullDate(Obj) {
    let date = Obj.date.slice(4, 8);
    let month = date.slice(1, 3);
    let fullmonth = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    month = Number(month);
    Obj["FullDate"] =
      Obj.date.slice(8, 12) +
      " " +
      fullmonth[month - 1] +
      " " +
      Obj.date.slice(0, 4);
    return (
      Obj.date.slice(8, 12) +
      " " +
      fullmonth[month - 1] +
      " " +
      Obj.date.slice(0, 4)
    );
  }
}

Date.prototype.short = () => {
  return new Date().toISOString().slice(0, 10);
};
Date.prototype.shortD = (DateObject) => {
  return new Date(DateObject).toISOString().slice(0, 10);
};
Date.prototype.MinusAddDays = (days) => {
  if (days <= 0) {
    days = Math.round(days) * -1;
    let NowDate = new Date() - days * 24 * 60 * 60 * 1000;
    return new Date(NowDate);
  } else {
    days = -Math.abs(days);
    let NowDate = new Date() - days * 24 * 60 * 60 * 1000;
    return new Date(NowDate);
  }
};
Date.prototype.MinusAddDays2 = (DateObject, days) => {
  let NewDate = new Date(DateObject);
  if (days <= 0) {
    days = Math.round(days) * -1;
    let NowDate = NewDate - days * 24 * 60 * 60 * 1000;
    return NowDate;
  } else {
    days = -Math.abs(days);
    let NowDate = NewDate - days * 24 * 60 * 60 * 1000;
    return new Date(NowDate);
  }
};
//
export default class GetDateClass {
  constructor(StartDate, EndDate) {
    this.StartDate = StartDate.toString();
    this.EndDate = EndDate.toString();
  }
  CheckDate() {
    if (this.StartDate.length === 10 && this.EndDate.length === 10) {
      if (
        new Date(this.StartDate) - new Date(this.EndDate) != null &&
        new Date(this.StartDate) - new Date(this.EndDate) >= 0
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  GetData() {
    // let API_KEY = "ZJzSx852zoXoC6aqnVKn0DJriJBOGQ7YG3JENssK&";
    let request =
      "https://api.nasa.gov/planetary/apod?api_key=ZJzSx852zoXoC6aqnVKn0DJriJBOGQ7YG3JENssK&" +
      "start_date=" +
      this.StartDate +
      "&end_date=" +
      this.EndDate;
    let respond = fetch(request)
      .then((value) => {
        return value.json();
      })
      .then((value2) => {
        value2.forEach((element) => {
          let classNew=new ObjectClass();
          (classNew.GetFullDate(element));
          classNew.SetCopywriterName(element);
          // console.log(element);
        });
        return value2;
      })
      .catch((Error) => {
        console.log(Error);
      });
    return respond;
  }
}
