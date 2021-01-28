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
  const h1Text = $('h1').text();
  console.log('h1Text is ', h1Text);

  let louderText = h1Text.toUpperCase() + '!!!!!';
  $('h1').text(louderText);

  //grab button then write on click calls this functions
  $('#submitBtn').on('click', whenIAddAHarmonica);
  //can pass in one function on click event
}

//click event
function whenIAddAHarmonica() {
  //Stuff todo when we add a harmonica
  console.log('clicked the button');

  //grab data from input field
  let brand = $('#brand').val();
  console.log(brand);
}

//DOM - document object model - your HTML
//Jquery is all about DOM manipulation
