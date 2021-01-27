
var products = ['images/bag.jpg', 'images/banana.jpg', 'images/bathroom.jpg', 'images/bathroom.jpg', 'images/boots.jpg', 'images/breakfast.jpg', 'images/bubblegum.jpg', 'images/chair.jpg', 'images/cthulhu.jpg', 'images/dog-duck', 'images/dragon.jpg', 'images/pen.jpg', 'images/pets-sweep.jpg', 'images/scissors.jpg', 'images/shark.jpg', 'images/sweep.png', 'images/tauntaun.jpg', 'images/unicorn.jpg', 'images/usb.gif', 'images/water-can.jpg', 'images/wine-glass.jpg'];

var imageContainer = document.getElementById('image-container');
var leftImageElement = document.getElementById('left-item');
var middleImageElement = document.getElementById('middle-item');
var rightImageElement = document.getElementById('right-item');
var roundsOfVoting = 5;


function SalesImage(name) {

  this.name = name.substring(0, name.length - 4);


  this.timesClicked = 0;
  this.timesShown = 0;
  this.image = `images/${name}`;

  SalesImage.allImages.push(this);
  SalesImage.imageMap[this.name] = this;
}
SalesImage.allImages = [];
SalesImage.imageMap = {};

for (var i = 0; i < products.length; i++) {
  new SalesImage(products[i]);
}
console.log(SalesImage.allImages);


/* SalesImage.allImages = [];


new SalesImage('images/bag.jpg');
new SalesImage('images/banana.jpg');
new SalesImage('images/bathroom.jpg');
new SalesImage('images/boots.jpg');
new SalesImage('images/breakfast.jpg');
new SalesImage('images/bubblegum.jpg');
new SalesImage('images/chair.jpg');
new SalesImage('images/chair.jpg');
new SalesImage('images/cthulhu.jpg');
new SalesImage('images/dog-duck.jpg');
new SalesImage('images/dragon.jpg');
new SalesImage('images/pen.jpg');
new SalesImage('images/pet-sweep.jpg');
new SalesImage('images/scissors.jpg');
new SalesImage('images/shark.jpg');
new SalesImage('images/sweep.png');
new SalesImage('images/tauntaun.jpg');
new SalesImage('images/unicorn.jpg');
new SalesImage('images/usb.gif');
new SalesImage('images/water-can.jpg');
new SalesImage('images/wine-glass.jpg'); */

// var imageContainer = document.getElementById('image-container');
/* var leftItem = document.getElementById('left-item');
var middleItem = document.getElementById('middle-item');
var rightItem = document.getElementById('right-item'); */


function generateRandomItems() {
  var leftIndex = Math.floor(Math.random() * SalesImage.allImages.length);
  var middleIndex = Math.floor(Math.random() * SalesImage.allImages.length);
  var rightIndex = Math.floor(Math.random() * SalesImage.allImages.length);




  while (leftIndex === rightIndex || leftIndex === middleIndex || middleIndex === rightIndex) {
    if (leftIndex === rightIndex); {
      rightIndex = Math.floor(Math.random() * SalesImage.allimages.length);
    }
    if (leftIndex === middleIndex); {
      middleIndex = Math.floor(Math.random() * SalesImage.allimages.length);
    }

    if (middleIndex === rightIndex); {
      rightIndex = Math.floor(Math.random() * SalesImage.allimages.length);
    }
  }


  var leftChoice = SalesImage.allImages[leftIndex];
  var middleChoice = SalesImage.allImages[middleIndex];
  var rightChoice = SalesImage.allImages[rightIndex];

  return [leftChoice, middleChoice, rightChoice];
}

function renderImages() {
  var currentlyRenderedImages = [leftImageElement.name, rightImageElement.name, middleImageElement.name];
  var newImages = generateRandomItems();

  while (
    currentlyRenderedImages[0] === newImages[0].name ||
  currentlyRenderedImages[1] === newImages[0].name ||
  currentlyRenderedImages[2] === newImages[0].name ||
  currentlyRenderedImages[0] === newImages[1].name ||
  currentlyRenderedImages[1] === newImages[1].name ||
  currentlyRenderedImages[2] === newImages[1].name ||
  currentlyRenderedImages[0] === newImages[2].name ||
  currentlyRenderedImages[1] === newImages[2].name ||
  currentlyRenderedImages[2] === newImages[2].name
  ) {
    newImages = generateRandomItems();
  }

  leftImageElement.src = newImages[0].image;
  leftImageElement.name = newImages[0].name;
  newImages[0].timesShown++;

  middleImageElement.src = newImages[1].image;
  middleImageElement.name = newImages[1].name;
  newImages[1].timesShown++;

  rightImageElement.src = newImages[2].image;
  rightImageElement.name = newImages[2].name;
  newImages[2].timesShown++;
}
renderImages();


/* function handleImageClick(event) {
  roundsOfVoting--;

  for (var i = 0; i < SalesImage.allImages.length; i++) {
    if (event.target.name === SalesImage[i].timesClicked++) {

      SalesImage.allImages[i].timesClicked++; */
/* 
    }
  }
}
 */
