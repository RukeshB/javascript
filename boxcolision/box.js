
function Box(width, height, x, y, border, backgroundcolor,id,image)
{
    this.height= height + "px";
    this.width = width + "px";
    // this.borderradius= "50%";
    this.x = x;
    this.y =y;
    this.position ="absolute";
    this.border = border;
    this.backroundcolor = backgroundcolor;
    this.id = id
    this.image = image;
    var pdiv= document.createElement('div');
    this.draw = function()
    {
        pdiv.style.width= this.width;
        pdiv.style.height= this.height;
        // pdiv.style.borderRadius = this.borderradius;
        pdiv.style.border= this.border;
        pdiv.style.left= this.x + "px";
        pdiv.style.top= this.y + "px";
        pdiv.style.position= this.position;
        pdiv.style.backgroundColor= this.backroundcolor;
        pdiv.style.backgroundImage= "url("+this.image +")";
        pdiv.style.backgroundSize="50px 50px"
        document.body.appendChild(pdiv);
        pdiv.setAttribute('id',this.id);
    }
    

}
