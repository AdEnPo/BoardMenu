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
const descText = document.querySelectorAll('h1>.description');
const foodImage = document.querySelectorAll('img.images');
const desc = document.querySelectorAll('h1.description');
const price = document.querySelectorAll('h2.price');

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
                setTimeout(()=>{linesOfMenu(number)},2000);
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

function linesOfMenu(number) {
    
    sElement24[number].innerHTML += "<div class='lines'></div>"+
                                    "<div class='lines'></div>";

    lines = document.querySelectorAll('div.lines');
    leftLine = lines[0];
    rightLine = lines[1];
    leftLine.classList.add('leftline');
    rightLine.classList.add('rightline');
    
    const time = 1500; 
   /* const styles = {
        position: 'absolute', bottom: '15px',
        height: '10px', width: '0px',
        left: '50%', background: '#ffffff'
    }
    //https://attacomsian.com/blog/javascript-add-multiple-css-styles
    Object.assign(leftLine.style, styles);
    Object.assign(rightLine.style, styles);*/

    leftLine.animate([
        { width: '0px', left: '50%'},
        { width: '900px', left: '75px'},
        { width: '10px', left: '75px',height: '10px'},
        { height: '900px', left: '75px', bottom: '15px'},
        { left: '75px', bottom: '15px'},
        { height: '10px', left:'75px', width:'10px', bottom: '925px'},
        { left:'75px', width:'800px', top: '145px'},
        { left:'825px', width:'50px', top: '145px'},
        { left:'825px', width:'50px', top: '145px'},
        {left:'825px', width:'50px', top: '145px'}
    ],time);
    rightLine.animate([
        { width: '0px', right: '50%'},
        { width: '900px', left: '960px'},
        { width: '10px', left: '1845px',height: '10px'},
        { height: '900px', left: '1845px', bottom: '15px'},
        { left: '1845px', bottom: '15px'},
        { height: '10px', left:'1845px', width:'10px', bottom: '925px'},
        { left:'1040px', width:'815px', top: '145px'},
        { left:'1040px', width:'50px', top: '145px'},
        { left:'1040px', width:'50px', top: '145px'},
        { left:'1040px', width:'50px', top: '145px'} 
    ],time);
    
    setTimeout(()=>{
        for (let i = 0; i < lines.length; i++) {
            lines[i].style.width = '50px';
            lines[i].style.height='10px';
            lines[i].style.top='145px';
        }
        leftLine.style.left='825px';
        rightLine.style.left='1040px';
    },time-10);
    setTimeout(()=>{
        sElement24[number].removeChild(lines[0]);
        sElement24[number].removeChild(lines[1]);
    },time+1000);
}

function descInAnimation(number) {
    desc[number].animate([
        { opacity: 0, top: '6%' },
        { opacity: 1, top: '8%'},
        { opacity: 1, top: '10%'}
    ],500);
    desc[number].style.opacity = 1;
    foodInAnimation(number);
    priceAnimation(number);
    price[number].style.opacity = 0;

}

function priceAnimation(number) {
    setTimeout(()=>{
        price[number].animate([
            { opacity: 0, top: '19%' },
            { opacity: 1, top: '21%'},
            { opacity: 1, top: '23%'}
        ],500);
        price[number].style.opacity = 1;
    },500);
    
}


function foodInAnimation(number) {
    //https://developers.google.com/web/fundamentals/design-and-ux/animations/css-vs-javascript
    foodImage[number].animate([
        { height: '0%', left: '110%' },
        { height: '10%', left: '100%' },
        { height: '20%', left: '90%' },
        { height: '30%', left: '80%' },
        { height: '40%', left: '70%' },
        { height: '50%', left: '50%', top: '40vh' }, 
        { height: '55%', top: '35vh' },
        { height: '50%', top: '40vh' }, 
        { height: '45%', top: '45vh' }, 
        { height: '50%',  top: '40vh' }, 
        { height: '50%', left: '50%', top: '40vh'}
        //15 steps
    ],1000);
    foodImage[number].style.left = '50%';
}


descInAnimation(0);

var sectionNumber=2;
var interval = setInterval(()=>{
    //https://www.w3schools.com/Jsref/met_element_scrollintoview.asp
    switch (sectionNumber) {
        case 1:
            section1.scrollIntoView(true);
            descInAnimation(0);
            break;
        case 2:
            section2.scrollIntoView(true);
            menuAnimation(0);
            break;
        case 3:
            section3.scrollIntoView(true);
            descInAnimation(1);
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