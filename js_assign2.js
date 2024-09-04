let odd = (a) =>{
  if(a%2 == 0){
    document.getElementById("check").innerText= (`${a} is even number`)
  }
  else{
    document.getElementById("check").innerText= (`${a} is odd number`)
  }
}