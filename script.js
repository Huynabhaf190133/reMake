function check()
{
    var user=document.getElementById("user").value;
    var pass=document.getElementById("password").value;
    if(user.trim()=="")
    {
        document.getElementById('err1').style.display="block";
    }
    else
    {
        document.getElementById('err1').style.display="none"; 
    }
    if(pass=="")
    {
        document.getElementById('err2').style.display="block";
    }
    else
    {
        document.getElementById('err2').style.display="none"; 
    }
    if(user&&pass)
    {
        window.location.href="./todo.html";
    }
}
function setTime()
{
    var date=new Date();
    var h= date.getHours();
    var m=date.getMinutes();
    var s=date.getSeconds();
    document.getElementById("clock").innerHTML=h+":"+m+":"+s;
    setInterval("setTime()",1000);
}
setTime();
document.getElementById('submit').addEventListener('click',check);