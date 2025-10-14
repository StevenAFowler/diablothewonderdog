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

// Reload at top of page
window.addEventListener('load', function() {
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 0);
});