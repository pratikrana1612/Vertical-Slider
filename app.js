const upBtn = document.querySelector('.up');
const downBtn = document.querySelector('.down');
// const textDivs = document.querySelectorAll('.text_div');
let translateValue=0;

upBtn.addEventListener('click',()=>
{
    const active=document.querySelector('.left_side .active_div');
    let nextActive;
    translateValue=translateValue-100;
    if(translateValue==-400)
    {
        translateValue=0;
        nextActive=document.querySelector('.left_side .text_div');

    }
    else
    {
        nextActive = active.nextElementSibling;
    }
    // active.style.nextActive=`translateY(-${translateValue}%)`;
    nextActive.style.transform=`translateY(${translateValue}%)`;
    active.style.transform=`translateY(${100}%)`;
    nextActive.classList.add('active_div');
    active.classList.remove('active_div');
})

downBtn.addEventListener('click',() =>
{
    const active=document.querySelector('.left_side .active_div');
    let prevActive;
    translateValue=translateValue+100;
    // if(translateValue==-400)
    // {
    //     translateValue=0;
    //     prevActive=document.querySelector('.left_side .text_div');
    // }
    // else
    prevActive = active.previousElementSibling;
    // active.style.nextActive=`translateY(-${translateValue}%)`;
    prevActive.style.transform=`translateY(${translateValue}%)`;
    active.style.transform=`translateY(${-100}%)`;
    prevActive.classList.add('active_div');
    active.classList.remove('active_div');

})