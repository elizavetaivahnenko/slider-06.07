
let offset = 0;
let offsetWol = 0;
const sliderLine = document.querySelector('.image_line');
let wolls = document.querySelector('.wol');

document.querySelector('.buttons_down').addEventListener('click', function(){
    offset = offset + 1070;
    if (offset > 4200) {
        offset = 0;
    }
    sliderLine.style.top = -offset + 'px';
    changeBackgroundColor();
});

 function changeBackgroundColor(){
    offsetWol = offsetWol - 1070;
    if (offsetWol < 0) {
        offsetWol = 3210;
    }
    wolls.style.top = -offsetWol + 'px';
};

 function changeBackgroundColor2(){
    offsetWol = offsetWol + 1070;
    if (offsetWol > 3210) {
        offsetWol = 0;
    }
    wolls.style.top = -offsetWol + 'px';
};


document.querySelector('.buttons_up').addEventListener('click', function(){
    offset = offset - 1070;
    if (offset < 0) {
        offset = 3210;
    }
    sliderLine.style.top = -offset + 'px';
    changeBackgroundColor2();
});





