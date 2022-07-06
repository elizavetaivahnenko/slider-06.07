
let offset = 0;
const sliderLine = document.querySelector('.image_line');

document.querySelector('.buttons_down').addEventListener('click', function(){
    offset = offset + 1070;
    if (offset > 4200) {
        offset = 0;
    }
	sliderLine.style.top = -offset + 'px';
});

document.querySelector('.buttons_up').addEventListener('click', function(){
    offset = offset - 1070;
    if (offset < 0) {
        offset = 3210;
    }
	sliderLine.style.top = -offset + 'px';
});




// document.querySelector('.buttons_down').addEventListener('click', function changeBackgroundColor() {
// 	let offsetWoll = 0;
// 	offsetWoll += 1070;
// 	if (offset > 4200) {
// 		offset = 0;
// 	}
// 	let m = document.querySelector('.wol');
// 	m.style.top = -offsetWoll + 'px';
// });



