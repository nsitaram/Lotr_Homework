// ==============================
//       Characters and places
// ==============================

var hobbits = [
  'Frodo Baggins',
  'Samwise "Sam" Gamgee',
  'Meriadoc "Merry" Brandybuck',
  'Peregrin "Pippin" Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var baddies = [
  'Sauron',
  'Saruman',
  'The Uruk-hai',
  'Orcs'
];

var lands = [
  'the-shire',
  'rivendell',
  'mordor'
];

var $frodo = $('.hobbit').first();


// ====================================
//           Chapters
// ====================================

function makeMiddleEarth() {
  console.log('Trying to make middle earth.');
  // create a section tag with an id of middle-earth
  var $middleEarthSection = $('<section></section>');
  console.log($middleEarthSection)
  $middleEarthSection.attr('id', 'middle-earth');
  // add the section to the body
  $('body').append($middleEarthSection);

  // add each land to the section as article tags-- try using a loop
  // inside each article tag include an h1 with the name of the land

  for (let i = 0; i < lands.length; i++) {
    // create the article tag
    var $landArticle = $('<article></article>');
    console.log($landArticle);
    // assign the id of the corresponding article tag as the name of the land
    $landArticle.attr('id',lands[i]);
    // add each land to the middle earth
    $middleEarthSection.append($landArticle);

    // create an h1 for each article
    var $landH1 = $('<h1></h1>');
    console.log($landH1)
    // assign the name of the land inside the h1
    $landH1.html(lands[i])
    // add the name of the land to the corresponding land
    $landArticle.append($landH1);
  }
}

function makeHobbits() {
  console.log('Make hobbits');

  var sortedHobbits = hobbits.sort();
  console.log(sortedHobbits);

  var $hobbitList = $('<ul></ul>');
  $hobbitList.attr('id', 'myHobbits');

  console.log(sortedHobbits.length);

  for (let i = 0; i < sortedHobbits.length; i++){
    var $hobbitItem = $('<li></li>');
    console.log($hobbitItem);
    $hobbitItem.html(sortedHobbits[i]);
    $hobbitItem.attr('class', 'hobbit');
    $hobbitList.append($hobbitItem);
  }

  $('body').append($hobbitList);


  // list the hobbits alphabetically.  Maybe use the .sort() method.
  // display an unordered list of hobbits in the shire
  // give each hobbit a class of "hobbit"
}

function keepItSecretKeepItSafe() {
    console.log('Keep It Secret Safe');
    var $secretDiv = $('<div></div>');
    $secretDiv.attr('id','the-ring');
    $secretDiv.html('The ring');

    var $frodo = $('.hobbit').first();

    $frodo.append($secretDiv);

  // create an empty div with an id of 'the-ring' and innerHTML of "The ring"
  // add the ring as a child of Frodo
}

function makeBaddies() {
      console.log('Make Baddies');

      var $baddiesList = $('<ul></ul>');
      $baddiesList.attr('id', 'myBaddies');


      for (let i = 0; i < baddies.length; i++){
        var $baddiesItem = $('<li></li>');
        $baddiesItem.html(baddies[i]);
        $baddiesItem.attr('class', 'baddy');
        $baddiesList.append($baddiesItem);
     }

      $('body').append($baddiesList);

  // display an unordered list of baddies in Mordor
  // give each of the baddies a class of "baddy"
}

function makeBuddies() {
      console.log('Make Buddies');

      var $newAside = $('<aside></aside>');

      $('#mordor').append($newAside);

      var $buddiesList = $('<ul></ul>');
      $buddiesList.attr('id', 'myBuddies');


      for (let i = 0; i < buddies.length; i++){
        var $buddiesItem = $('<li></li>');
        $buddiesItem.html(buddies[i]);
        $buddiesItem.attr('class', 'buddy');
        $buddiesList.append($buddiesItem);
     }

      $($newAside).append($buddiesList);


  // create an aside tag and append it below mordor
  // display an unordered list of buddies in the aside
  // give each of the buddies a class of "buddy"
}

function leaveTheShire() {
      console.log('Leave the Shire');
      $('#rivendell').append($('#myHobbits'));


  // grab the hobbits and move them to Rivendell
}

function beautifulStranger() {
      console.log('Beautiful Stranger');

      $('#myBuddies :nth-child(4)').html('Aragorn');

  // change the buddy 'Strider' node to "Aragorn"
}

function forgeTheFellowShip() {
      console.log('Forge The Fellowship');

      $('#rivendell').append($('#myBuddies'));

      var $fellowship = $('<div>', {id: 'the-fellowship'});

      $fellowship.append($('<h1>The Fellowship</h1>'));

      $('body').append($fellowship);

      for (let i = 0; i < hobbits.length; i++){
        var $currentHobbit = $('#myHobbits li');
        $fellowship.append($currentHobbit);
        alert($currentHobbit.html() + ' has joined your party!');
      };

      for (let i = 0; i < buddies.length; i++){
        var $currentBuddy = $('#myBuddies li');
        $fellowship.append($currentBuddy);
        alert($currentBuddy.html() + ' has joined your party!');
      };

  // move the hobbits and the buddies to Rivendell
  // create a new div called 'the-fellowship'
  // add an h1 with the text 'The Fellowship' to this new div
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}

function theBalrog() {
      console.log('The Balrog');
      var $nameChanger = $('.buddy').first();
      $nameChanger.html('Gandalf the White');
      $nameChanger.attr('class', 'the-white');

  // change the inner HTML of the 'Gandalf' node to 'Gandalf the White'
  // add a class "the-white" to this element
  // in the style.css file, add a css rule for the class "the-white"
  // have a white background and a grey border
}

function hornOfGondor() {
      console.log('Horn of Gondor');

      alert('The Horn of Gondor has been blown!');
      $('.buddy').last().css("text-decoration", "line-through");

      $('#myBaddies :nth-child(3)').remove();


  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove the Uruk-Hai from the Baddies on the page
}

function itsDangerousToGoAlone(){
      console.log('Dangerous to Go Alone');
      $('#mordor').append($('.hobbit').first());
      $('#mordor').append($('.hobbit').last());

      $('#mordor').append($('<div>', {id: 'mount-doom'}));


  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}

function weWantsIt() {
      console.log('We Wants It');

      var $gollumDiv = $('<div>', {id: 'gollum'});
      $('#mordor').append($gollumDiv);

      $gollumDiv.append($('.hobbit :first-child'));

      if ($gollumDiv.children().length > 0) {
        $('#gollum :first-child').css('color', 'red');
      }

      $('#mount-doom').append($gollumDiv);


  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Create a condition (Maybe an IF statement) that changes the font-color of the ring div to Red if
  // it is a child of the div with the id 'gollum'
  // Move Gollum into Mount Doom
}

function thereAndBackAgain() {
      console.log('There and Back Again');

      $('#gollum').remove();
      $('#myBaddies').remove();

      $('#the-shire').append($('.hobbit'));



  // remove Gollum and the Ring from the DOM
  // remove all the baddies from the DOM
  // Move all the hobbits back to the shire
}

// =================================
// What to do when the page is ready
// =================================

window.onload = function() {
  document.querySelector('#b1').addEventListener('click', makeMiddleEarth);
  document.querySelector('#b2').addEventListener('click', makeHobbits);
  document.querySelector('#b3').addEventListener('click', keepItSecretKeepItSafe);
  document.querySelector('#b4').addEventListener('click', makeBaddies);
  document.querySelector('#b5').addEventListener('click', makeBuddies);
  document.querySelector('#b6').addEventListener('click', leaveTheShire);
  document.querySelector('#b7').addEventListener('click', beautifulStranger);
  document.querySelector('#b8').addEventListener('click', forgeTheFellowShip);
  document.querySelector('#b9').addEventListener('click', theBalrog);
  document.querySelector('#b10').addEventListener('click', hornOfGondor);
  document.querySelector('#b11').addEventListener('click', itsDangerousToGoAlone);
  document.querySelector('#b12').addEventListener('click', weWantsIt);
  document.querySelector('#b13').addEventListener('click', thereAndBackAgain);

};