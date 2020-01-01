
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
            this.obj = new Box(50,50,xpos,275, "", "",id,"81037363_471262607106707_3098841298023481344_n.jpg");
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

                xv[i] = Math.floor(Math.random() * 76 + 25) / 50;
                yv[i] = Math.floor(Math.random() * 76 + 25) / 50;

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
                by[i] += yv[i];
                that.boxarr[i].x = bx[i];
                that.boxarr[i].y = by[i];
                that.boxarr[i].draw();

                //detect colision between boder and object
                if (bx[i] - 50 < i && xv[i] < 0) // check if box going left
                {
                    xv[i] = -xv[i];
                }
                if (bx[i] > 750 && xv[i] > 0) // check if box going right
                {
                    xv[i] = -xv[i];
                }
                if (by[i] - 50 < i && yv[i] < 0) //check if box going up
                {
                    yv[i] = -yv[i];
                }
                if (by[i] > 550 && yv[i] > 0) //check if box going down
                {
                    yv[i] = -yv[i];
                }


                //detect colision between object
                if(i==0)
                {
                    if((bx[i] + 50) > bx[i+1] && bx[i] < (bx[i+1] + 50) && (by[i] + 50) > by[i+1] && by[i] < (by[i+1] + 50))
                    {
                        xv[i] = -xv[i];
                        yv[i] = -yv[i];
                    }
                }
                if(i==1)
                {
                    if((bx[i-1] + 50) > bx[i] && bx[i-1] < (bx[i] + 50) && (by[i-1] + 50) > by[i] && by[i-1] < (by[i] + 50))
                    {
                        xv[i] = -xv[i];
                        yv[i] = -yv[i];
                    }
                }
                
            }

            
            //     x +=1;
            //    // if((that.boxarr[0].x + 50)<that.boxarr[1].x)
            //     {
            //         that.boxarr[0].x +=x;
            //         that.boxarr[1].x -=x;
            //     }
                
            //     if((that.boxarr[0].x + 50)>=that.boxarr[1].x)
            //     {
            //         x = -x;
            //         that.boxarr[0].x -=x;
            //         that.boxarr[1].x +=x;
            //     }
            //     //console.log(parseInt(that.boxarr[i].x +=10) );
            //     for(var i=0 ;i<that.boxarr.length; i++)
            //     {
            //         that.boxarr[i].draw();
            //     }
            // //console.log(that.boxarr[0].x + 10);
           
        },100/50);
}

var objContiner = new Box(750,550,50,50,"5px solid black", "","continer", '');
objContiner.draw();
var w = document.getElementById('continer').offsetWidth;

var mainobj = new main();
mainobj.initBox();
mainobj.drawBox();
mainobj.setvalue();
mainobj.gameloop;





// var boxs = new Array();
// var xpos = 50;
// var w = document.getElementById('continer').offsetWidth;
// for(var i=0;i<2;i++)
// {
    
//     var id = "box"+(i+1);
//     var boxarr = new Box(50,50,xpos,250,"1px solid black","red",id);
//     boxs.push(boxarr);
//     xpos +=(w-50);
//     boxs[i].draw();
// }
// console.log(w);

// setInterval(function(){
//     for(var i=0;i<2;i++)
//         {
//             xpos +=(w-50);
//             boxarr.draw();
//         }
// },100)
// boxs[0].draw();
// boxs[1].draw();