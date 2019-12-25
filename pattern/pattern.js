
function pattern(row)
{
    if(row == 0)
    {
        return 0;
    }
    //console.log("*".repeat(row));
    var star= "" ;
    for(var i=0; i<row; i++)
    {
        //document.write("*");
        star= star + "*";
    }
    //document.write("<br>");
    console.log(star);
    return pattern(row - 1);
}

pattern(5);