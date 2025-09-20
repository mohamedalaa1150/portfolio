window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  const player = GetPlayer();

let count = 30;

function countDown() {
	count -= 1;
	player.SetVar("countNum", count);
	if(count == 0) {
		clearInterval(countDownDone);
	}
}

countDownDone = setInterval(countDown, 1000);
}

};
