const upBtn = document.querySelector('.up');
const downBtn = document.querySelector('.down');
const textDivs = document.querySelectorAll('.left_side .text_div');
const imgDivs = document.querySelectorAll('.right_side .img_div');
// let translateValueup=0;
// let translateValueDown = 
let count = 1;
let flag=true;
function intialPosition(value,divs)
{
    for(let i=0;i<divs.length;i++)
    {
        if(divs[i].classList.contains('active_div'))
        {
            // return;
        }
        else{
            divs[i].style.transform=`translateY(${value}%)`;
        }
    }
}

// const upHandler = (side,value) =>
// {
//     count++;
//     const active=document.querySelector(side + ' .active_div');
//     let nextActive;
//     // translateValueup=translateValueup-100;
//     if(count==5)
//     {
//         // translateValueup=0;
//         count=1;
//         nextActive=document.querySelector(`${side} .text_div`);
//         active.classList.remove('active_div');
//         nextActive.classList.add('active_div');
//         intialPosition(-100,textDivs);
//     }
//     else
//     {
//         nextActive = active.nextElementSibling;
//         nextActive.classList.add('active_div');
//         active.classList.remove('active_div');
//         active.style.transform=`translateY(${value}%)`;
//     }
//     // active.style.nextActive=`translateY(-${translateValue}%)`;
//     nextActive.style.transform=`translateY(${0}%)`;
// }
const upHandler = function (side,type,value,divs) 
{
    count++;
    const active=document.querySelector(side + ' .active_div');
    let nextActive;
    // translateValueup=translateValueup-100;
    if(count==8)
    {
        // translateValueup=0;
        flag=!flag;
        count=flag?1:7;
        nextActive=document.querySelector(`${side} ${type}`);
        active.classList.remove('active_div');
        nextActive.classList.add('active_div');
        intialPosition(-value,divs);
    }
    else
    {
        nextActive = active.nextElementSibling;
        nextActive.classList.add('active_div');
        active.classList.remove('active_div');
        active.style.transform=`translateY(${value}%)`;
    }
    // active.style.nextActive=`translateY(-${translateValue}%)`;
    nextActive.style.transform=`translateY(${0}%)`;
}

const downHandler = (side,type,value,divs) =>
{
    count--;
    const active=document.querySelector( side + ' .active_div');
    let nextActive;
    if(count==0)
    {
        flag=!flag
        count=flag?7:1;
        nextActive=document.querySelector(`${side} ${type}:last-of-type`);
        nextActive.classList.add('active_div');
        active.classList.remove('active_div');
        intialPosition(-value,divs);
    }
    else
    {
        nextActive= active.previousElementSibling;
        nextActive.classList.add('active_div');
        active.classList.remove('active_div');
        active.style.transform=`translateY(${value}%)`;
    }
    // active.style.nextActive=`translateY(-${translateValue}%)`;
    nextActive.style.transform=`translateY(${0}%)`;
}



upBtn.addEventListener('click',upHandler.bind(this,'.left_side','.text_div',100,textDivs));
upBtn.addEventListener('click',upHandler.bind(this,'.right_side','.img_div',-100,imgDivs));
downBtn.addEventListener('click',downHandler.bind(this,'.left_side','.text_div',-100,textDivs));
downBtn.addEventListener('click',downHandler.bind(this,'.right_side','.img_div',100,imgDivs));