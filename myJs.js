var deviceWidth = document.body.clientWidth;
var deviceHeight = document.body.clientHeight;
var fontBase = parseInt(deviceWidth / 50);

console.log('AppWidth:' + deviceWidth);
console.log('Appheight:' + deviceHeight);
console.log('fontBase' + fontBase + 'px')
document.body.style.fontSize = fontBase + 'px';

var lessonNameDom = document.getElementById("lessonName");
var footerInfoDom= document.getElementById("footerInfo")