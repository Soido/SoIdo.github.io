var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/my-image-one.jpg') {
      myImage.setAttribute ('src','images/my-image-two.jpg');
    } else {
      myImage.setAttribute ('src','images/my-image-one.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Пожалуйста введите свое имя.');
    localStorage.setItem('имя', myName);
    myHeading.textContent = 'Artem is the best metrologist, ' + myName;
}
    if(!localStorage.getItem('имя')) {
        setUserName();
      } else {
        var storedName = localStorage.getItem('имя');
        myHeading.textContent = 'Artem is the best metrologist, ' + storedName;
 }
      myButton.onclick = function() {
        setUserName();
 }