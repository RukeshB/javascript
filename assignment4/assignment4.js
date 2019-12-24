var k=0;
//search data by name using for loop
function searchByName(fruits, fname)
{
    for(var i=0;i<fruits.length;i++)
    {
        if(fruits[i].name == fname)
        {
            return fruits[i];
        }
    }
}

//search data by key using recursive function
function searchByKey(fruits, key, value)
{
   switch(key)
   {
       case "id":
        if(fruits[k].id == value)
        {
            return fruits[k];
        }
        break;

        case "name":
        if(fruits[k].name == value)
        {
            return fruits[k];
        }
        break;

        case "color":
        if(fruits[k].color == value)
        {
            return fruits[k];
        }
        break;

        default:
            
            if(k == (fruits.length-1))
            {
                return null;
            }
            k++;
            return searchByKey(fruits, key, value);
   }
}

function main()
{
    var  fruits = [
        {
            id: 1,
            name: "Banana",
            color: "yellow"
        },
        {
            id: 2,
            name: "Apple",
            color: "Red"
        }
    ];

   
    console.log(searchByName(fruits, "Apple"));
    console.log(searchByKey(fruits, "id", "1"));
    
}

main();