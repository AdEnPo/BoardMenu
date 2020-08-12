const body= document.querySelector('body');

const section1 = document.getElementById('s1');
const section2 = document.getElementById('s2');
const section3 = document.getElementById('s3');
const section4 = document.getElementById('s4');

const sElement1 = document.querySelector('div.s1');
const sElement24 = document.querySelectorAll('div.s2');
const sElement3 = document.querySelector('div.s3');
const menuText = document.querySelectorAll('div.s2>h1.menu');
const menuTable = document.querySelectorAll('.menuTable>tbody');
const foodNameText = document.querySelectorAll('h1>.food');
const foodImage = document.querySelectorAll('img.images');
const foodName = document.querySelectorAll('h1.food');
const price = document.querySelectorAll('h2.price');
const fooddesc = document.querySelectorAll('p.theFoodIs');

const TIMEforSCREEN = 5000;

var menusItemsArray = [['Product1',15],['Product2',10],['Product3',5],
                       ['Product4',25],['Product5',20],['Product6',35],
                       ['Product7',15],['Product8',10],['Product9',5],
                       ['Product10',25]/*,['Product11',20],['Product12',35],
                       ['Product13',15],['Product14',10],['Product15',5],
                       ['Product16',25],['Product17',20],['Product18',35],
                       ['Product19',15],['Product20',10],*/];

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
                                +'<td class="float-left">'+ menusItemsArray[i][0]+'</td>'
                                +'<td class="float-right">'+ menusItemsArray[i][1]+' TL</td>'
                            +'</tr>';
    }

    let item = 0;
    let timer = setInterval(()=>{
        const td = menuTable[number].querySelectorAll("td")[item];
        td.classList.add("slide");
        item++;

        if (item === menusItemsArray.length*2) {
            clearInterval(timer);
            timer = null;
            //if(menusItemsArray.length == 12){}else{
                setTimeout(()=>{
                    menuTable[number].innerHTML='';
                },TIMEforSCREEN);
            //}
        }
    },60);
}

function foodNameInAnimation(number) {
    foodName[number].animate([
        { opacity: 0, top: '11%' },
        { opacity: 1, top: '13%'},
        { opacity: 1, top: '15%'}
    ],500);
    foodName[number].style.opacity = 1;
    foodInAnimation(number);
    setTimeout(()=>{priceAnimation(number);},500);
    foodDesc(number);
    price[number].style.opacity = 0;
}

function priceAnimation(number) {
    price[number].animate([
        { opacity: 0, transform: 'rotate(30deg)' },
        { transform: 'rotate(120deg)'},
        { transform: 'rotate(210deg)'},
        { transform: 'rotate(300deg)'},
        { opacity: 1, transform: 'rotate(390deg)'}
    ],500);
    price[number].style.opacity = 1;   
}

function foodDesc(number) {
    fooddesc[number].animate([
        { opacity: 0, left: '11%' },
        { opacity: 1, left: '13%'},
        { opacity: 1, left: '15%'}
    ],500);
    fooddesc[number].style.opacity = 1;
}

function foodInAnimation(number) {
    height = foodImage[number].offsetHeight;
    //https://developers.google.com/web/fundamentals/design-and-ux/animations/css-vs-javascript
    foodImage[number].animate([
        { height: '0%', left: '110%' },
        { height: height+'px', left: '100%' },
        { height: height+'px', left: '90%' },
        { height: height+'px', left: '80%' },
        { height: height+'px', left: '70%' },
        { height: height+'px', left: '50%', top: '40vh' }, 
        { height: height+55+'px', top: '35vh' },
        { height: height+'px', top: '40vh' }, 
        { height: height-55+'px', top: '45vh' }, 
        { height: height+'px',  top: '40vh' }, 
        { height: height+'px', left: '50%', top: '40vh'}
        //15 steps
    ],1000);
    foodImage[number].style.left = '50%';
}

foodNameInAnimation(0);

var sectionNumber=2;
var interval = setInterval(()=>{
    //https://www.w3schools.com/Jsref/met_element_scrollintoview.asp
    switch (sectionNumber) {
        case 1:
            section1.scrollIntoView(true);
            foodNameInAnimation(0);
            break;
        case 2:
            section2.scrollIntoView(true);
            menuAnimation(0);
            break;
        case 3:
            section3.scrollIntoView(true);
            foodNameInAnimation(1);
            break;
        case 4:
            section4.scrollIntoView(true);
            menuAnimation(1);
            break;
        default: break;
    }

    sectionNumber++;
    if(sectionNumber>4) sectionNumber=1;
},TIMEforSCREEN);

addEventListener("click",()=>{
    clearInterval(interval);
});