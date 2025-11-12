// Define path objects for animation
// const path_objects = {dog: '#svg_dog', 
//                       cir: '#svg_cir', 
//                       dow: '#svg_dow',
//                       l11: '#svg_l11',
//                       l12: '#svg_l12',
//                       l21: '#svg_l21',
//                       l22: '#svg_l22'}

// Loading screen variables
const loading_screen = document.getElementById('loading_screen');
const overlay = document.getElementById('blur_overlay');

var min_load_time = 500; // in ms   
var elapsed_time = false;
var loaded = false;

// Loading page
var hide_loading_screen = function() {
    if (elapsed_time && loaded) {
        // loading_screen.classList.add('fade-out');
        // Object.values(path_objects).forEach(obj => {
        //     document.querySelector(obj).classList.add('animate');
        // });
        loading_screen.style.display = 'none';
        document.querySelector('#landing_text').classList.add('animated');
    }
};

window.addEventListener('load', function() {
    loaded = true;
    hide_loading_screen();
});

setTimeout(() => {
    elapsed_time = true;
    hide_loading_screen();
}, min_load_time);

// Animation path lengths
// Object.values(path_objects).forEach(obj => {
//     var path = document.querySelector(obj);
//     var length = path.getTotalLength();
//     path.style.strokeDasharray = length + ' ' + length;
//     path.style.strokeDashoffset = length;
//     console.log(obj, ' - ', length);
// });

// Reload at top of page
window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      };

// Article popup mechanics
function open_article(artID) 
{
    document.getElementById(artID).style.display='block';
    overlay.style.display='block';
    document.querySelector('body').style.overflow='hidden';
}
function close_article(artID)
{
    document.getElementById(artID).style.display='none';
    overlay.style.display='none';
    document.querySelector('body').style.overflow='auto';
}
function close_all_popups(){
    const popups = document.querySelectorAll('.popup_container');
    popups.forEach(popup => {
        popup.style.display='none';
    })
    overlay.style.display='none';
    document.querySelector('body').style.overflow='auto';
}
overlay.addEventListener('click', close_all_popups);