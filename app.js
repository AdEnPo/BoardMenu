const body= document.querySelector('body');

const section1 = document.getElementById('s1');
const section2 = document.getElementById('s2');
const section3 = document.getElementById('s3');
const section4 = document.getElementById('s4');

const menuText = document.querySelectorAll('div.s2>h1.menu');
const menuTable = document.querySelectorAll('.menuTable>tbody');
const foodImage = document.querySelectorAll('img.images');
const foodName = document.querySelectorAll('h1.food');
const price = document.querySelectorAll('h2.price');
const fooddesc = document.querySelectorAll('p.theFoodIs');
const carouselSlide = document.querySelector('.carouselSlide');
const carouselImages = document.querySelectorAll('.carouselSlide img');
const colParts = document.querySelectorAll('.column');
const adviceText = document.querySelector('.advice');

const TIMEforSCREEN = 8000;
let sectionNumber=2;

//s2's animations
var menusItemsArray = [['Product1',15],['Product2',10],['Product3',5],
                       ['Product4',25],['Product5',20],['Product6',35],
                       ['Product7',15],['Product8',10],['Product9',5],
                       ['Product10',25]];

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
                setTimeout(()=>{
                    menuTable[number].innerHTML='';
                },TIMEforSCREEN);
        }
    },60);
}

function foodCarousel() {
    //https://www.youtube.com/watch?v=KcdBOoK3Pfw
    let carouselCounter = 1;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    const size = carouselImages[0].clientWidth;
    var food = setInterval(()=>{
        carouselSlide.style.transform = 'translateX('+(-size * carouselCounter)+ 'px)';
        if (carouselImages[carouselCounter].id === 'last') {
            carouselSlide.style.transform = 'translateX(0px)';
            clearInterval(food);
        }
        carouselCounter++;
    },1500);
}

//s1 and s3's animations
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

//s4's animations
function AdviceSec() {
    let colIndex = 0; 
    for (let i = 0; i < colParts.length; i++) {
        colParts[i].style.transform = 'translateY('+((-1)**i*800)+ 'px)';
    }
    var advice = setInterval(()=>{
        colParts[colIndex].style.transition = "all 0.5s ease-in-out";
        colParts[colIndex].style.transform = 'translateY('+((-1)**colIndex)+ 'px)';
        colParts[colIndex].style.opacity = '1';

        if (colIndex+1 == colParts.length) {
            clearInterval(advice);
        }
        colIndex++;
    },1500);
    setTimeout(()=>{
        for (let i = 0; i < colParts.length; i++) {
            colParts[i].style.transform = 'translateY('+((-1)**i*800)+ 'px)';
            colParts[i].style.opacity = '0';            
        }
    },TIMEforSCREEN);
}


foodNameInAnimation(0);
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
            foodCarousel();
            break;
        case 3:
            section3.scrollIntoView(true);
            foodNameInAnimation(1);
            break;
        case 4:
            section4.scrollIntoView(true);
            AdviceSec();
            break;
        default: break;
    }

    sectionNumber++;
    if(sectionNumber > 4) sectionNumber=1;
},TIMEforSCREEN);

//If you want to stop
addEventListener("click",()=>{
    clearInterval(interval);
});