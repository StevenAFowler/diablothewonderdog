// Article popup mechanics
function open_article(artID) 
{
    document.getElementById(artID).style.display='block';
    document.querySelector('.blur_overlay').style.display='block';
}
function close_article(artID)
{
    document.getElementById(artID).style.display='none';
    document.querySelector('.blur_overlay').style.display='none';
}

// Animation path lengths
const path_objects = {dog: '.svg_dog', 
                      cir: '.svg_cir', 
                      dow: '.svg_dow',
                      l11: '.svg_l11',
                      l12: '.svg_l12',
                      l21: '.svg_l21',
                      l22: '.svg_l22'}
Object.values(path_objects).forEach(obj => {
    var path = document.querySelector(obj);
    var length = path.getTotalLength();
    path.style.strokeDasharray = length + ' ' + length;
    path.style.strokeDashoffset = length;
    console.log(obj, ' - ', length);
});

// Reload at top of page
window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      };

// window.addEventListener('load', function() {
//     setTimeout(() => {
//         window.scrollTo(0, 0);
//     }, 0);
// });