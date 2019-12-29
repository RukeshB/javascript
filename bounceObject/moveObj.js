

var toppos = 1;
var gravity = 1;

setInterval(function()
{
    gravity +=1;
    toppos += gravity;

    if(toppos >= 550) //check if ball reach at floor
    { 
        gravity = -gravity; // reset gravity value
        toppos += gravity;
    }

    ball.style.top = toppos +"px";
    info.innerText = "Top: "+ toppos +"  Gravity: "+gravity; //display top and gravity value
     //console.log(toppos);
     //console.log(gravity);
}
, 100);