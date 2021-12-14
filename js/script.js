const btn=document.getElementsByClassName("btn");
const div=document.getElementsByClassName("closed");
btn.onclick=function(){
    if(div.style.display=="none"){
        div.style.display="block";
    }
    else{
        div.style.display="none";
    }
}