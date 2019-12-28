var player = document.getElementById("player");
var container = document.getElementById("container");

var playerpos={ leftpos: 0, toppos: 0};

//function to move player
function move(e)
{
    if(e.keyCode == 97 || e.keyCode == 65) // to move left
    {
        playerpos.leftpos -=2;
        player.style.left = playerpos.leftpos + "px";
        if(playerpos.leftpos <= 0) // to detect if player is at boder or corss boder
        {
            playerpos.leftpos +=2;
        }
    }

    if(e.keyCode == 119 || e.keyCode == 87) // to move up
    {
        playerpos.toppos -=2;
        player.style.top = playerpos.toppos + "px";

        if(playerpos.toppos <= 0) // to detect if player is at boder or corss boder
        {
            playerpos.toppos +=2;
        }
    }

    if(e.keyCode == 100 || e.keyCode == 68) // to move right
    {
        playerpos.leftpos +=2;
        player.style.left = playerpos.leftpos + "px";
        
        if(playerpos.leftpos >= 700) // to detect if player is at boder or corss boder
        {
            playerpos.leftpos -=2;
        }
    }

    if(e.keyCode == 115 || e.keyCode == 83) // to move dowm
    {
        playerpos.toppos +=2;
        player.style.top = playerpos.toppos + "px";

        if(playerpos.toppos >= 550) // to detect if player is at boder or corss boder
        {
            playerpos.toppos -=2;
        }
    }
}

document.onkeydown = move;