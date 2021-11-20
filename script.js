var narr = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (var i = 0; i <narr.length; i++) 
{
	if(narr[i].charAt(0)==='J'|| narr[i].charAt(0)==='j')
    {
        console.log("Good Bye "+ narr[i])
	}
	else
    {
		console.log("Hello "+ narr[i])
	}
}