for(var i = 0; i < 1000; i++) {
  var Mtop = Math.floor((Math.random() * i * 10) + 1);
  var Mleft = Math.floor((Math.random() * i * 10) + 1);
  
  $('body').append('<div class="star" style="top: '+ Mtop +'px; left: '+ Mleft +'px"></div>');
}

var phrases = ['Today Maryland, Tomorrow Space',
			   'Space Hacks 5000',
			   'Launch Hack, Literally.',
			   'Bitcamp 2025. Coming soon.',
			   'Hack me to the Moon',
			   'Imagine Tomorrow',
			   'Node.js powered Rocket'];

$('h2 strong').text(phrases[Math.floor(Math.random() * phrases.length)]);