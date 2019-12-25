
function pattern(row)
{
    if(row == 0)
    {
        return 0;
    }
    //console.log("*".repeat(row));
    for(var i=0; i<row; i++)
    {
        document.write("*");
    }
    document.write("<br>");
    return pattern(row - 1);
}

pattern(5);