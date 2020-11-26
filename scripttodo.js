// Viết function tạo thời gian
function setTime()
{
    var date=new Date();
    var h=date.getHours();
    var m=date.getMinutes();
    var s=date.getSeconds();
    document.getElementById("clock").innerHTML=h+":"+m+":"+s;
    setInterval("setTime()",1000);
}
setTime();
// tạo function để change Status
function changeStatus(status,e)
{
    document.getElementsByClassName('active')[0].classList.remove('active');
    e.classList.add("active");
    document.getElementById("btn-content").innerHTML=status;
}
// tạo mảng dsach để chứa
dsach=[];
// tạo localstorage
function localStoragedata()
{
    localStorage.setItem("danhsach",JSON.stringify(dsach));
}
// get đữ liệu từ Localstorage ra nếu như dữ liệu chưa được tồn tại và thực hiện nối mãng bằng dấu 3 chấm
var checkls=localStorage.getItem("danhsach");
if(checkls!=null)
{
    dsach=[...JSON.parse(checkls)];
}
// tạo
function create()
{
    var input=document.getElementById("input-user").value.trim();
    if(input=="")
    {
        document.getElementById("text").style.display="block";
    }
    else
    {
        document.getElementById("text").style.display="none";
        dsach.push(make());
        localStoragedata();
        doc();
    }
    
}
// make
function make()
{
    var input=document.getElementById('input-user').value;
    var time=document.getElementById("clock").innerText;
    var status=document.getElementById("btn-content").innerText;
    var cv={
        ten:input,
        tgian:time,
        trthai:status
    }
    return cv;
}
//đọc
function doc()
{
    var local=JSON.parse(localStorage.getItem("danhsach"));
    var trData="";
    if(local!=null)
    {
        for(var i=0;i<local.length;i++)
        {
            trData+="<tr onclick='getIndex("+i+")'>"+
            "<td>"+local[i].ten+"</td>"+
            "<td>"+local[i].tgian+"</td>"+
            "<td>"+local[i].trthai+"</td>"+
            "</tr>"
            
        }
    }
    document.getElementById("tasks").innerText="Tasks ("+i+")";
    document.getElementById("table").innerHTML=trData;
}
doc();
//get Index
function getIndex(currentIndex)
{
    localStorageIndex=currentIndex;
    document.getElementById("input-user").value=dsach[currentIndex].ten;
}
// update
var localStorageIndex;
function update()
{
    dsach[localStorageIndex]=make();
    localStoragedata();
    doc();
}
// delete
function xoa()
{
    var check=confirm("Do you want Delete ?");
    if(check==true)
    {
        dsach.splice(localStorageIndex,1);
        localStoragedata();
        doc();
    }
    
}