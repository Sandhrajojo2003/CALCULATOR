function bclick(val)
{
    
    document.getElementById("screen").value+=val;
}
function sclr()
{
    document.getElementById("screen").value=""
}
function eqclick()
{
    var text=document.getElementById("screen").value
    var res=eval(text)
    document.getElementById("screen").value=res
}