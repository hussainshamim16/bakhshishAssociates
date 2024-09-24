// document.addEventListener("DOMContentLoaded", function () {

//     var introDuration = 3000; // 3 seconds


//     var mainWebsiteURL = "https://hussainshamim16.github.io/sasta-biryani/";


//     setTimeout(function () {
//         window.location.href = mainWebsiteURL;
//     }, introDuration);
// });
// document.addEventListener("DOMContentLoaded", function () {

//     var introDuration = 3000; // 3 seconds


//     var mainWebsiteURL = "https://hussainshamim16.github.io/sasta-biryani/";


//     setTimeout(function () {
//         window.location.href = mainWebsiteURL;
//     }, introDuration);
// });
// document.addEventListener("DOMContentLoaded", function () {

//     var introDuration = 3000; // 3 seconds


//     var mainWebsiteURL = "https://hussainshamim16.github.io/sasta-biryani/";


//     setTimeout(function () {
//         window.location.href = mainWebsiteURL;
//     }, introDuration);
// });

console.log("hello world")


AOS.init({
    offset: 140, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 800, // values from 0 to 3000, with step 50ms
    easing: 'ease'
  })

let firstNm = 420;
let secondNm = 0;
let thirdNm = 220;



secondNm++
thirdNm++
const counter = setInterval(()=>{
  if(firstNm < 482){
    let firstReder = document.getElementById('firstReder').innerHTML = '+' + firstNm++
    let secondReder = document.getElementById('secondReder').innerHTML = '+' + secondNm++
    let thirdReder = document.getElementById('thirdReder').innerHTML = '+' + thirdNm++
  }
  else{
    clearInterval(counter)
  }
  
  console.log(firstNm)
  },100)
