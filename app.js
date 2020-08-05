const body= document.querySelector('body');

const section1 = document.getElementById('s1');
const section2 = document.getElementById('s2');
const section3 = document.getElementById('s3');
const section4 = document.getElementById('s4');

const sElement1 = document.querySelector('#s1>div.s1');
const sElement2 = document.querySelector('#s2>div.s2');
const sElement3 = document.querySelector('#s3>div.s3');
const sElement4 = document.querySelector('#s4>div.s2');
const menuText = document.querySelectorAll('div.s2>h1.menu');
const menuTable = document.querySelectorAll('.menuTable>tbody');

var menusItemsArray = [['asdf',15],['zxcv',10],['wwww',5],
                       ['fgfg',25],['vbnvn',20],['xxaass',35],
                       ['asdf',15],['zxcv',10],['wwww',5],
                       ['fgfg',25],['vbnvn',20],['xxaass',35]];
console.log(menusItemsArray);

function menuAnimation(number) {
    // https://www.youtube.com/watch?v=GUEB9FogoP8
    const strText = menuText[number].textContent;
    const splitText = strText.split("");
    var tmpText = menuText[number].textContent;
    menuText[number].textContent = "";

    for (let i = 0; i < splitText.length; i++) {
        menuText[number].innerHTML += "<span>" + splitText[i] + "</span>";
    }

    let char = 0;
    let timer = setInterval(()=>{
        const span = menuText[number].querySelectorAll("span")[char];
        span.classList.add("fade");
        char++;
        if (char === splitText.length) {
            clearInterval(timer);
            timer = null;
            setTimeout(()=>{    
                menuText[number].textContent = tmpText;
                menuItems(number);
            },500);
        }
    },60);
    
}

function menuItems(number){
    for (let i = 0; i < menusItemsArray.length; i++) {
        menuTable[number].innerHTML+='<tr>'
                                +'<td class="float-right">'+ menusItemsArray[i][0]+'</td>'
                                +'<td class="float-left">'+ menusItemsArray[i][1]+' TL</td>'
                            +'</tr>';   
    }

    let char = 0;
    let timer = setInterval(()=>{
        const span = menuTable[number].querySelectorAll("td")[char];
        span.classList.add("slide");
        char++;
        if (char === menusItemsArray.length) {
            clearInterval(timer);
            timer = null;
            //if(menusItemsArray.length == 12){}else{
                setTimeout(()=>{
                    menuTable[number].innerHTML='';
                },2000);
            //}
        }
    },60);
}

var sectionNumber=2;
var interval = setInterval(()=>{
    //https://www.w3schools.com/Jsref/met_element_scrollintoview.asp
    switch (sectionNumber) {
        case 1:
            section1.scrollIntoView(true);
            break;
        case 2:
            section2.scrollIntoView(true);
            menuAnimation(0);
            break;
        case 3:
            section3.scrollIntoView(true);
            break;
        case 4:
            section4.scrollIntoView(true);
            menuAnimation(1);
            break;
        default: break;
    }

    /*if (i == 2) section2.scrollIntoView(true);
    else if (i == 3) section3.scrollIntoView(true);
    else if (i == 4) section4.scrollIntoView(true);
    else if (i == 1) section1.scrollIntoView(true);*/
    sectionNumber++;
    if(sectionNumber>4) sectionNumber=1;
},2000);

addEventListener("click",()=>{
    clearInterval(interval);
});