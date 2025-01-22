let obj=
{
    name:"saikumar",
    age:21,
    greet()
    {
        console.log('hello'+name);
    }
}
obj.greet();
obj.isadult=function()
{
    if(age>=18)
        console.log("Adult");
    else
    console.log("Not an Adult");
}
obj.isadult();
