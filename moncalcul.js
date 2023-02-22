var output=document.querySelector('.ecran');
var boutons=document.querySelectorAll('.numbers >button');
var clear=document.querySelectorAll('.first >button');
var somme=document.querySelector('.long >button');
var soustracter=document.querySelector('.regular >#regular-button');
var egale=document.querySelector('.regular >button');


output.textContent = '0';

for(let i=0; i< boutons.length ; i++){
    boutons[i].addEventListener('click', () => {
        
        output.textContent == '0' ?
        output.textContent = output.textContent.substring(1) +boutons[i].innerText:
    
        output.textContent = output.textContent + boutons[i].innerText
        enabled(
            
        )
        
    })
}

    clear[0].addEventListener('click', () => {
        
        output.textContent = output.textContent.substring(0,output.textContent.length-1)
    })
clear[1].addEventListener("click",()=>{
    output.textContent=output.textContent.substring(output.textContent.length)+'0'
})
somme.addEventListener('click',()=>{
 
 if(output.textContent.length<18)  {
    disabled();
     
}})
soustracter.addEventListener('click',()=>{
    if(output.textContent.length<18){
output.textContent=output.textContent+'-';

}

})       



egale.addEventListener('click',()=>{
    
    const tab=output.textContent.split('+');
    var sous=0;
    var res=0;
    for(let i=0;i<tab.length;i++){
 /*{res =res + Number(tab[i]);
 }*/
 const tab2= tab[i].split('-');
 sous=Number(tab2[0]); 
  for(let j=1;j<tab2.length;j++)
 {
  sous=sous-Number(tab2[j]);
}
res=res+sous;
    }
output.textContent=res;
})
function disabled(){
var secoperator=output.textContent[output.textContent.length - 1];
if ((secoperator=='+')||(secoperator=='-')||(secoperator=='*')||(secoperator=='/'))
{
    somme.disabled = true;
    soustracter.disabled = true;

}
else{     output.textContent=output.textContent +'+';
}}
function enabled(){
    var secoperator=output.textContent[output.textContent.length - 1];
    if ((secoperator!='+')||(secoperator!='-'))
    {
      somme.disabled=false;
    
    }}



