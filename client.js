console.log('js loaded!');

$(document).ready(onReady); //first thing to do on Jquery

function onReady() {
  console.log('on ready');

  const h1 = $('h1');
  console.log(h1);

  const h2 = $('h2');
  console.log(h2);
  //make it blue
  //h2.css('background-color', 'blue');
  $('h2').addClass('froggy');
  //toggleClass

  //changing the text
  const h1Text = $('h1').text('hello cullen');
  console.log('h1Text is ' + h1Text);

  const louderText = h1Text.toUpperCase() + '!!!!!';
  $('h1').text(louderText);
}
//DOM - document object model - your HTML
//Jquery is all about DOM manipulation
