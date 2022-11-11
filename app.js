const upBtn = document.querySelector('.up');
const downBtn = document.querySelector('.down');
const textDivs = document.querySelectorAll('.left_side .text_div');
// let translateValueup=0;
// let translateValueDown = 
let count = 1;

function intialPosition(value)
{
    for(let i=0;i<textDivs.length;i++)
    {
        if(textDivs[i].classList.contains('active_div'))
        {
            // return;
        }
        else{
            textDivs[i].style.transform=`translateY(${value}%)`;
        }
    }
}

upBtn.addEventListener('click',()=>
{
    count++;
    const active=document.querySelector('.left_side .active_div');
    let nextActive;
    // translateValueup=translateValueup-100;
    if(count==5)
    {
        // translateValueup=0;
        count=1;
        nextActive=document.querySelector('.left_side .text_div');
        active.classList.remove('active_div');
        nextActive.classList.add('active_div');
        intialPosition(-100);
    }
    else
    {
        nextActive = active.nextElementSibling;
        nextActive.classList.add('active_div');
        active.classList.remove('active_div');
        active.style.transform=`translateY(${100}%)`;
    }
    // active.style.nextActive=`translateY(-${translateValue}%)`;
    nextActive.style.transform=`translateY(${0}%)`;
})

downBtn.addEventListener('click',() =>
{
    count--;
    const active=document.querySelector('.left_side .active_div');
    let nextActive;
    if(count==0)
    {
        count=4;
        nextActive=document.querySelector('.left_side .text_div:last-of-type');
        nextActive.classList.add('active_div');
        active.classList.remove('active_div');
        intialPosition(100);
    }
    else
    {
        nextActive= active.previousElementSibling;
        nextActive.classList.add('active_div');
        active.classList.remove('active_div');
        active.style.transform=`translateY(${-100}%)`;
    }
    // active.style.nextActive=`translateY(-${translateValue}%)`;
    nextActive.style.transform=`translateY(${0}%)`;


})