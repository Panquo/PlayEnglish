"use strict";

window.onload = function () {

  // let wordObj = "";
  let jsonStr = `[{"id":0,"word":"abruptly"},{"id":1,"word":"absurd"},{"id":2,"word":"abyss"},{"id":3,"word":"affix"},{"id":4,"word":"askew"},{"id":5,"word":"avenue"},{"id":6,"word":"awkward"},{"id":7,"word":"axiom"},{"id":8,"word":"azure"},{"id":9,"word":"bagpipes"},{"id":10,"word":"bandwagon"},{"id":11,"word":"banjo"},{"id":12,"word":"bayou"},{"id":13,"word":"beekeeper"},{"id":14,"word":"bikini"},{"id":15,"word":"blitz"},{"id":16,"word":"blizzard"},{"id":17,"word":"boggle"},{"id":18,"word":"bookworm"},{"id":19,"word":"boxcar"},{"id":20,"word":"boxful"},{"id":21,"word":"buckaroo"},{"id":22,"word":"buffalo"},{"id":23,"word":"buffoon"},{"id":24,"word":"buxom"},{"id":25,"word":"buzzard"},{"id":26,"word":"buzzing"},{"id":27,"word":"buzzwords"},{"id":28,"word":"caliph"},{"id":29,"word":"cobweb"},{"id":30,"word":"cockiness"},{"id":31,"word":"croquet"},{"id":32,"word":"crypt"},{"id":33,"word":"curacao"},{"id":34,"word":"cycle"},{"id":35,"word":"daiquiri"},{"id":36,"word":"dirndl"},{"id":37,"word":"disavow"},{"id":38,"word":"dizzying"},{"id":39,"word":"duplex"},{"id":40,"word":"dwarves"},{"id":41,"word":"embezzle"},{"id":42,"word":"equip"},{"id":43,"word":"espionage"},{"id":44,"word":"euouae"},{"id":45,"word":"exodus"},{"id":46,"word":"faking"},{"id":47,"word":"fishhook"},{"id":48,"word":"fixable"},{"id":49,"word":"fjord"},{"id":50,"word":"flapjack"},{"id":51,"word":"flopping"},{"id":52,"word":"fluffiness"},{"id":53,"word":"flyby"},{"id":54,"word":"foxglove"},{"id":55,"word":"frazzled"},{"id":56,"word":"frizzled"},{"id":57,"word":"fuchsia"},{"id":58,"word":"funny"},{"id":59,"word":"gabby"},{"id":60,"word":"galaxy"},{"id":61,"word":"galvanize"},{"id":62,"word":"gazebo"},{"id":63,"word":"giaour"},{"id":64,"word":"gizmo"},{"id":65,"word":"glowworm"},{"id":66,"word":"glyph"},{"id":67,"word":"gnarly"},{"id":68,"word":"gnostic"},{"id":69,"word":"gossip"},{"id":70,"word":"grogginess"},{"id":71,"word":"haiku"},{"id":72,"word":"haphazard"},{"id":73,"word":"hyphen"},{"id":74,"word":"iatrogenic"},{"id":75,"word":"icebox"},{"id":76,"word":"injury"},{"id":77,"word":"ivory"},{"id":78,"word":"ivy"},{"id":79,"word":"jackpot"},{"id":80,"word":"jaundice"},{"id":81,"word":"jawbreaker"},{"id":82,"word":"jaywalk"},{"id":83,"word":"jazziest"},{"id":84,"word":"jazzy"},{"id":85,"word":"jelly"},{"id":86,"word":"jigsaw"},{"id":87,"word":"jinx"},{"id":88,"word":"jiujitsujockey"},{"id":89,"word":"jogging"},{"id":90,"word":"joking"},{"id":91,"word":"jovial"},{"id":92,"word":"joyful"},{"id":93,"word":"juicy"},{"id":94,"word":"jukebox"},{"id":95,"word":"jumbo"},{"id":96,"word":"kayak"},{"id":97,"word":"kazoo"},{"id":98,"word":"keyhole"},{"id":99,"word":"khaki"},{"id":100,"word":"kilobyte"},{"id":101,"word":"kiosk"},{"id":102,"word":"kitsch"},{"id":103,"word":"kiwifruit"},{"id":104,"word":"klutz"},{"id":105,"word":"knapsack"},{"id":106,"word":"larynx"},{"id":107,"word":"lengths"},{"id":108,"word":"luckyluxury"},{"id":109,"word":"lymph"},{"id":110,"word":"marquis"},{"id":111,"word":"matrix"},{"id":112,"word":"megahertz"},{"id":113,"word":"microwave"},{"id":114,"word":"mnemonic"},{"id":115,"word":"mystify"},{"id":116,"word":"naphtha"},{"id":117,"word":"nightclub"},{"id":118,"word":"nowadays"},{"id":119,"word":"numbskull"},{"id":120,"word":"nymph"},{"id":121,"word":"onyx"},{"id":122,"word":"ovary"},{"id":123,"word":"oxidize"},{"id":124,"word":"oxygen"},{"id":125,"word":"pajama"},{"id":126,"word":"peekaboo"},{"id":127,"word":"phlegm"},{"id":128,"word":"pixel"},{"id":129,"word":"pizazz"},{"id":130,"word":"pneumonia"},{"id":131,"word":"polka"},{"id":132,"word":"pshaw"},{"id":133,"word":"psyche"},{"id":134,"word":"puppy"},{"id":135,"word":"puzzling"},{"id":136,"word":"quartz"},{"id":137,"word":"queue"},{"id":138,"word":"quips"},{"id":139,"word":"quixotic"},{"id":140,"word":"quiz"},{"id":141,"word":"quizzes"},{"id":142,"word":"quorum"},{"id":143,"word":"razzmatazz"},{"id":144,"word":"rhubarb"},{"id":145,"word":"rhythm"},{"id":146,"word":"rickshaw"},{"id":147,"word":"schnapps"},{"id":148,"word":"scratch"},{"id":149,"word":"shiv"},{"id":150,"word":"snazzy"},{"id":151,"word":"sphinx"},{"id":152,"word":"spritz"},{"id":153,"word":"squawkstaff"},{"id":154,"word":"strength"},{"id":155,"word":"strengths"},{"id":156,"word":"stretch"},{"id":157,"word":"stronghold"},{"id":158,"word":"stymied"},{"id":159,"word":"subway"},{"id":160,"word":"swivel"},{"id":161,"word":"syndrome"},{"id":162,"word":"thriftless"},{"id":163,"word":"thumbscrew"},{"id":164,"word":"topaz"},{"id":165,"word":"transcript"},{"id":166,"word":"transgress"},{"id":167,"word":"transplant"},{"id":168,"word":"triphthong"},{"id":169,"word":"twelfth"},{"id":170,"word":"twelfths"},{"id":171,"word":"unknown"},{"id":172,"word":"unworthy"},{"id":173,"word":"unzip"},{"id":174,"word":"uptown"},{"id":175,"word":"vaporize"},{"id":176,"word":"vixen"},{"id":177,"word":"vodka"},{"id":178,"word":"voodoo"},{"id":179,"word":"vortex"},{"id":180,"word":"voyeurism"},{"id":181,"word":"walkway"},{"id":182,"word":"waltz"},{"id":183,"word":"wave"},{"id":184,"word":"wavy"},{"id":185,"word":"waxy"},{"id":186,"word":"wellspring"},{"id":187,"word":"wheezy"},{"id":188,"word":"whiskey"},{"id":189,"word":"whizzing"},{"id":190,"word":"whomever"},{"id":191,"word":"wimpy"},{"id":192,"word":"witchcraft"},{"id":193,"word":"wizard"},{"id":194,"word":"woozy"},{"id":195,"word":"wristwatch"},{"id":196,"word":"wyvern"},{"id":197,"word":"xylophone"},{"id":198,"word":"yachtsman"},{"id":199,"word":"yippee"},{"id":200,"word":"yoked"},{"id":201,"word":"youthful"},{"id":202,"word":"yummy"},{"id":203,"word":"zephyr"},{"id":204,"word":"zigzag"},{"id":205,"word":"zigzagging"},{"id":206,"word":"zilch"},{"id":207,"word":"zipper"},{"id":208,"word":"zodiac"},{"id":209,"word":"zombie"}]`
  let words = JSON.parse(jsonStr);
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  let list;
  let word;               // Selected word
  let guess;              // Guess
  var guesses = [];       // Stored guesses
  var counter = 0;        // Count correct geusses
  let lives;              // Lives
  let space;              // Number of spaces in word '-'
  let context;
  let myStickman;         // Stickmen
  let myButtons
  let letters;
  let correct;
  let wordHolder;

  let showLives = document.getElementById("mylives");;          // Display lives


  function randomRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  //Create alphabet diplay
  let buttons = function () {
    myButtons = document.getElementById('hanged-buttons');
    letters = document.createElement('ul', {is : 'handler-ul'});
    letters.id = 'alphabet';

    for (var i = 0; i < alphabet.length; i++) {
      list = document.createElement('li');
      list.id = 'letter ' + (i+1);
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }


  //Create guess ul
  let result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (let i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');

      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      guesses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }


  //Show lives
  let comments = function () {
    showLives.innerHTML = "You have " + lives + " lives left";

    if (lives < 1) {
      showLives.innerHTML = "Game Over";
    }

    for (let i = 0; i < guesses.length; i++) {
        if (counter + space === guesses.length) {
        showLives.innerHTML = "You Win!";
        }
    }
  }


  //Animate man
  let animate = function () {
    let drawMe = lives;
    drawArray[drawMe]();
  }

  //Hangman
  let canvas =  function(){

    myStickman = document.getElementById("stickman");
    context = myStickman.getContext('2d');
    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 2;
  };

    let head = function(){
      myStickman = document.getElementById("stickman");
      context = myStickman.getContext('2d');
      context.beginPath();
      context.arc(60, 25, 10, 0, Math.PI*2, true);
      context.stroke();
    }

  let draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke();
}

   let frame1 = function() {
     draw (0, 150, 150, 150);
   };

   let frame2 = function() {
     draw (10, 0, 10, 600);
   };

   let frame3 = function() {
     draw (0, 5, 70, 5);
   };

   let frame4 = function() {
     draw (60, 5, 60, 15);
   };

   let torso = function() {
     draw (60, 36, 60, 70);
   };

   let rightArm = function() {
     draw (60, 46, 100, 50);
   };

   let leftArm = function() {
     draw (60, 46, 20, 50);
   };

   let rightLeg = function() {
     draw (60, 70, 100, 100);
   };

   let leftLeg = function() {
     draw (60, 70, 20, 100);
   };

  let drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1];

  //OnClick function (letters)
  let check = function () {
    list.onclick = function () {
      var guess = this.innerHTML;
      this.setAttribute("class", "active");
      this.onclick = null;

      for (let i = 0; i < word.length; i++) {
        if (word[i] === guess) {
            guesses[i].innerHTML = guess;
            counter++;
        }
      }

      if (word.indexOf(guess) === -1) {
        lives--;
        comments();
        animate();
      } else {
        comments();
        canvas();
      }
    }
  }


  //Play
  let play = function () {
    word = words[randomRange(0, words.length)];
    word = word.word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    guesses = [ ];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();
    canvas();
  }

  play();


  // Reset
  document.getElementById('reset').onclick = function() {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    context.clearRect(0, 0, 400, 400);
    play();
  }


//   jsonStr = JSON.parse(jsonStr);
//   wordObj = jsonStr[randomRange(0, jsonStr.length)]
//   console.log(wordObj);

//   document.getElementById("hanged").innerHTML = wordObj.id;
//   document.getElementById("hanged").innerHTML += "<br>";
//   document.getElementById("hanged").innerHTML += wordObj.word;
//   document.getElementById("hanged").innerHTML += "<br>";

//   let guessingArray = [];
//   for (var i = 0; i < wordObj.word.length; i++) {
//       guessingArray.push('_');
//   }
//   document.querySelector("div").innerHTML += guessingArray;

}
