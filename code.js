function resetbg(){
    document.querySelectorAll(".rep").forEach(e=>{e.style.backgroundColor="rgb(93, 186, 248)"})
}
var rep="";
function clickRadio() {
    resetbg();
    rep=document.querySelector('input[name="quiz'+comp+'"]:checked').value;
    document.getElementById(rep).style.backgroundColor="rgb(64, 144, 197)";
}
var comp=1;
function hide(){
    [...document.getElementsByClassName("quest")].forEach(e=>{e.style.display="none"});
}
var tab=[];
function save(elt)
{
    tab.push(elt);
}
function next(){
    if(document.querySelector('input[name="quiz'+comp+'"]:checked')!=null)
    {
        hide();
        comp++;
        save(document.getElementById(rep).innerHTML);
        console.log(document.getElementById(rep).innerHTML);
        if(comp<5) 
        document.getElementById("sec"+comp).style.display="block";
        if(comp==4)
        {
            document.getElementById("next").style.display="none";
            document.getElementById("submit").style.display="block";
        }
    }
    else
    {
        alert("il faut choisir!");
    }
}
change=()=>{
    for(let i=0;i<4;i++)
    {
        document.querySelectorAll('[id="r'+i+'"]').forEach(e=>{
         e.innerHTML=tab[i];
        });
    }
}
submit=()=>{
    save(document.getElementById(rep).innerHTML);
    hide();
    change();
    document.getElementById("submit").style.display="none";
    document.querySelector('[class="script"]').style.display="block";
}