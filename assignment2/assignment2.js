
function pattern(row)
{
    if(row == 0)
    {
        return 0;
    }
    console.log("*".repeat(row));

    return pattern(row - 1);
}

pattern(5);