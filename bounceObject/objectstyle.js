var ball = document.getElementById("ball");
var container = document.getElementById("container");
var info = document.getElementById('info');
var body = document.querySelector('body');

    body.style.backgroundColor = "darkslategrey";

    //css for main container
    container.style.margin="auto"; 
    container.style.width= "750px";
    container.style.height= "580px"; 
    container.style.border= "5px solid whitesmoke";
    container.style.position= "relative";

    //css for ball
    ball.style.margin= "auto";
    ball.style.position= "relative";
    ball.style.width= "50px"; 
    ball.style.height= "50px"; 
    ball.style.backgroundColor= "whitesmoke";
    ball.style.borderRadius= "50%";

    //css for ball position info
    info.style.width= "150px";
    info.style.margin="auto";
    info.style.color= "whitesmoke";

    
    // function Initobj(width, height, backgroundColor, borderRadius, border)
    // {
    //     this.border = border;
    //     this.borderRadius = borderRadius;
    //     this.width = width;
    //     this.height = height;
    //     this.backgroundColor = backgroundColor;
    //     this.top = 0;
    //     this.draw = function()
    //     {
    //         this.div = document.createElement('div');
    //         this.div.style.top= this.top;
    //         this.div.style.margin= "auto";
    //         this.div.style.position= "absolute";
    //         this.div.style.width= this.width+"px"; 
    //         this.div.style.height= this.height+"px"; 
    //         this.div.style.backgroundColor= this.backgroundColor;
    //         this.div.style.borderRadius= this.borderRadius;
    //         this.div.style.border= this.border;
            
    //         document.body.appendChild(this.div);
    //     }
    // }

    // var container = new Initobj(750,580,"","0%","5px solid whitesmoke");
    // container.draw();

    // var ball = new Initobj(50,50,"whitesmoke","50%","0");
    // ball.draw();