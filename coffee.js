function SalesImage(image) {
  this.timesClicked = 0;
  this.timesShown = 0;
  this.image = image;

  SalesImage.allImages.push(this);
}


SalesImage.allImages = [];


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
new SalesImage('images/wine-glass.jpg');

var imageContainer = document.getElementById('image-container');
var leftItem = document.getElementById('left-item');
var middleItem = document.getElementById('middle-item');
var rightItem = document.getElementById('right-item');
var usedImagesArray = [];

function generateRandomItems() {
  var leftIndex = Math.floor(Math.random() * SalesImage.allImages.length);
  var middleIndex = Math.floor(Math.random() * SalesImage.allImages.length);
  var rightIndex = Math.floor(Math.random() * SalesImage.allImages.length);

  usedImagesArray.push(leftIndex, middleIndex, rightIndex);


  while (leftIndex === rightIndex || leftIndex === middleIndex || middleIndex === rightIndex) {
    Math.floor(Math.random() * SalesImage.allImages.length); }
    // while (leftIndex === middleIndex) {
    // Math.floor(Math.random() * SalesImage.allImages.length);
    // while (middleIndex === rightIndex) {
    // Math.floor(Math.random() * SalesImage.allImages.length);
    // while (middleIndex === leftIndex) {
    // Math.floor(Math.random() * SalesImage.allImages.length);
    // while (rightIndex === middleIndex) {
    // Math.floor(Math.random() * SalesImage.allImages.length);
    // while (rightIndex === leftIndex) {
    // Math.floor(Math.random() * SalesImage.allImages.length);

  var leftChoice = SalesImage.allImages[leftIndex];
  var middleChoice = SalesImage.allImages[middleIndex];
  var rightChoice = SalesImage.allImages[rightIndex];

  return [leftChoice, middleChoice, rightChoice];


}
function renderImages(leftChoice, middleChoice, rightChoice) {
  leftItem.src = leftChoice.image;
  leftItem.timesShown++;

  middleItem.src = middleChoice.image;
  middleItem.timesShown++;

  rightItem.src = rightChoice.image;
  rightItem.timesShown++;
}
var randomImages = generateRandomItems();
renderImages(randomImages[0], randomImages[1], randomImages[2]);

