/* Declare variables below to save the different sections (divs) of your story
 *Declare variables and use document.querySelector() 4xs*
 */
let storyOpening = document.querySelector(".story-opening");
let Option1screen = document.querySelector(".option-one-screen");
let Option2screen = document.querySelector(".option-two-screen");

let Option1end = document.querySelector(".option-one-end");

let Option2end = document.querySelector(".option-two-end");
/* Declare variables below to save other html elements you might want to show or hide later*/
let button1 = document.querySelector(".option-one");

let button2 = document.querySelector(".option-two");


/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!

INSERT_VARIABLE.onclick=function(){

};
*/

button1.onclick = function() {
    Option1screen.style.display = "block";
    storyOpening.style.display = "none";
};

button2.onclick = function() {
    Option2screen.style.display = "block";
    storyOpening.style.display = "none";
};




