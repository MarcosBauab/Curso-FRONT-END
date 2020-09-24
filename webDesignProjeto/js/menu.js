var script = document.createElement('script');
script.src = 'js/all.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

var jquery = document.createElement('script');
jquery.src = 'https://code.jquery.com/jquery-3.5.1.min.js';
jquery.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(jquery);

var menu = document.querySelector("nav.menu-mobile h2")
menu.addEventListener('click', function(){
    $('nav.menu-mobile ul').slideToggle();
})

/*SMOOTH SCROLLBAR MOMENTUM
import Scrollbar from 'smooth-scrollbar';
Scrollbar.init(document.querySelector('#scrollbar_'))*/