const btn = document.querySelector("form button");
  let p=document.querySelector("#pra");
btn.addEventListener("click",(evt)=>{
  evt.preventDefault();
  let amount = document.querySelector(".value input");
  let amtVal = amount.value;
  let s=1;
  for(let i=1;i<=amtVal;i++){
    s*=i;
  }
  p.innerText=Math.floor(s);
 
})