// Display even numbers

let num = ""


for( let i=0; i<=10; i++){
  if(i % 2 == 0){
    num +=i + " "
    }
}

document.getElementById("even").innerHTML = num