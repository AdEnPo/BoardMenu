const body= document.querySelector('body');

const section1 = document.getElementById('s1');
const section2 = document.getElementById('s2');
const section3 = document.getElementById('s3');

const sectiond1 = document.querySelector('#s1>div.s1');
const sectiond2 = document.querySelector('#s2>div.s2');
const sectiond3 = document.querySelector('#s3>div.s3');


var i=2;
var interval = setInterval(()=>{
    //https://www.w3schools.com/Jsref/met_element_scrollintoview.asp
    if (i == 2) section2.scrollIntoView(true);
    else if (i == 3) section3.scrollIntoView(true);
    else if (i == 1) section1.scrollIntoView(true);
    i++;
    if(i>3) i=1;
},2000);

addEventListener("click",()=>{
    clearInterval(interval);
});