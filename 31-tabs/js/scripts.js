const homeBtn= document.querySelector("#home-btn");
const visionBtn= document.querySelector("#vision-btn");
const goalBtn= document.querySelector("#goal-btn");

var home = document.querySelector("#home");
var vision = document.querySelector("#vision");
var goal = document.querySelector("#goal");

homeBtn.addEventListener("click", function()
{
    home.style.display="block";
    vision.style.display="none";
    goal.style.display="none";
})

visionBtn.addEventListener("click", function()
{
    vision.style.display="block";
    home.style.display="none";
    goal.style.display="none";
})

goalBtn.addEventListener("click",function()
{
    goal.style.display="block";
    home.style.display="none";
    vision.style.display="none";
})


