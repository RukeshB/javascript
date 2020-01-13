
function main()
{
    this.boxarr= new Array();
    var bx = [];
    var by = [];
    var xv = [];
    var yv = [];
    var that = this;
    this.initBox = function()
    {
        var xpos = 50;
        for(var i=1;i<=2;i++)
        {
            // var ypos = 50;
            var id = "box"+1;
            this.obj = new Box(75,75,xpos,275, "", "",id,"81037363_471262607106707_3098841298023481344_n.jpg");
            this.boxarr.push(this.obj);
            //document.getElementById(id).innerHTML("<img src='81037363_471262607106707_3098841298023481344_n.jpg'>");
             xpos +=(750-50);
        }
        
    }      

    this.drawBox = function()
    {
        for(var i=1; i<=this.boxarr.length; i++)
        this.boxarr[i-1].draw();
    }
     
    this.setvalue =function()
    {
        
        for(var i=0 ;i<that.boxarr.length; i++)
            {
                bx[i] = this.boxarr[i].x;
                by[i] = this.boxarr[i].y;

                xv[0] = 10;//Math.floor(Math.random() * 76 + 25) / 50;
                xv[1] = -10;//Math.floor(Math.random() * 76 + 25) / 50;
                yv[i] = 10;//Math.floor(Math.random() * 76 + 25) / 50;

                if (Math.floor(Math.random() * 2) == 0) {
                    xv[i] = -xv[i];
                }
                if (Math.floor(Math.random() * 2) == 0) {
                    yv[i] = -yv[i];
                }
            }
        
        
        
    }
    //var x=0;
    this.gameloop= setInterval(function(){


             for(var i=0; i<that.boxarr.length; i++)
             {
                 // move the object
                bx[i] += xv[i];
                //by[i] += yv[i];
                that.boxarr[i].x = bx[i];
                //that.boxarr[i].y = by[i];
                that.boxarr[i].draw();

                //detect colision between boder and object
                if (bx[i] - 75 < i && xv[i] < 0) // check if box going left
                {
                    xv[i] = -xv[i];
                }
                if (bx[i] > 725 && xv[i] > 0) // check if box going right
                {
                    xv[i] = -xv[i];
                }
                if (by[i] - 75 < i && yv[i] < 0) //check if box going up
                {
                    yv[i] = -yv[i];
                }
                if (by[i] > 525 && yv[i] > 0) //check if box going down
                {
                    yv[i] = -yv[i];
                }


                //detect colision between object
                for(var j=(i+1); j<=that.boxarr.length; j++)
                {
                    if((bx[i] + 75) > bx[j] && bx[i] < (bx[j] + 75) && (by[i] + 75) > by[j] && by[i] < (by[j] + 75))
                    {
                        xv[i] = -xv[i];
                        yv[i] = -yv[i];
                        xv[j] = -xv[j];
                        yv[j] = -yv[j];
                    }
                }
            }
           
        },1000/50);
}

var objContiner = new Box(750,550,50,50,"5px solid black", "","continer", '');
objContiner.draw();
var w = document.getElementById('continer').offsetWidth;

var mainobj = new main();
mainobj.initBox();
mainobj.drawBox();
mainobj.setvalue();
mainobj.gameloop;
