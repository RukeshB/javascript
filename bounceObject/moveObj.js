

var toppos = ball.offsetTop;
var gravity = 10;

setInterval(function()
{
    //gravity +=1;
    toppos += gravity;
    ball.style.top = toppos +"px";
    info.innerText = "Top: "+ toppos +"  Gravity: "+gravity; //display top and gravity value
    if(toppos >= 550 && gravity>0) //check if ball reach at floor
    { 
        gravity = -gravity; // reset gravity value
        //console.log(gravity);
        //toppos += gravity;
    }
    if(toppos <= 0 && gravity<0)
    {
        gravity = -gravity;
    }

    
    //console.log(ball.offsetTop);
     //console.log(toppos);
     //console.log(gravity);
}
, 10);