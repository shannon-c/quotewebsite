/*
This is your site JavaScript code - you can add interactivity and carry out processing
- Initially the JS writes a message to the console, and moves a button you can add from the README
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");

function motivation(){
  
  const btn = document.querySelector("button"); // Get the button from the page
  btn.classList.toggle("dipped");
  
  
  var mtvs = [
    "success is not final. failure is not fatal. it is the courage to continue that counts!",
    "you is kind. you is smart. you is important",
    "i 🐝lieve in you",
    "today may be a bad day, but it is not a bad life",
    "i am proud of you!",
    "do something today that your future self will thank you for",
    "enjoy the little things",
    "your only limit is your mind",
    "better an oops than a what if",
    "you can do anything, but not everything",
    "do what a clock does. keep going",
    "you a warrior, not a worrier",
    "if you don't go after your goals, they are just wishes",
    "no one is perfect - that is why pencils have erasers",
    "be your own hype person",
    "i'll be there for you~, when the rain starts to pour~"
  ]
  
  var randomizer = Math.floor(Math.random()*mtvs.length);
  var msg = mtvs[randomizer]
  
  document.getElementById("message").innerHTML = msg;
}

/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the "Next steps" in the README
*/
// const btn = document.querySelector("button"); // Get the button from the page
// // Detect clicks on the button
// if (btn) {
//   btn.onclick = function() {
//     // The JS works in conjunction with the 'dipped' code in style.css
//     btn.classList.toggle("dipped");
//   };
// }


// This is a single line JS comment
/*
This is a comment that can span multiple lines 
- use comments to make your own notes!
*/
