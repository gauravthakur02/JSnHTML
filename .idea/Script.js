var name=prompt("Welcome User!");
alert(+name);
var headline=document.getElementById("mainheading");
headline.onclick=function()
{
    headline.innerHTML="You clicked the heading";
};
function startTime()
{
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    m=checkTime(m);
    s=checkTime(s);
    document.getElementById('txt').innerHTML=h+":"+m+":"+s;
    var t=setTimeout(startTime,500);
}

function checkTime(i)
{
    if(i<10)
    {
        i="0"+i
    };
    return i;
}