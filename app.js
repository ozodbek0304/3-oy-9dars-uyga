let input = document.querySelector("#pomidor"),
  input1 = document.querySelector("#kolbasa"),
  input2 = document.querySelector("#bodring"),
  input3 = document.querySelector("#qoziqorin");

let pomidor = document.querySelector(".pomidor"),
  kolbasa = document.querySelector(".kolbasa"),
  bodring = document.querySelector(".bodring"),
  qoziqorin = document.querySelector(".qoziqorin"),
  summa = document.querySelector(".summa");
  total =0;  

pomidor.style.display = "none";

input.addEventListener("click", function (e) {
  if (e.target.checked) {
    pomidor.style.display = "block";
    total +=15000;
    summa.textContent = `${total}`;
  } else {
    pomidor.style.display = "none";
    total -= 15000;
    summa.textContent = `${total}`;
    
  }
  
});

kolbasa.style.display= "none";
  
input1.addEventListener("click", function (e) {
  if (e.target.checked){
    kolbasa.style.display = "block";
    total +=22000;
    summa.textContent = `${total}`;
  }
 else {
    kolbasa.style.display = "none";
     total -=22000;
     summa.textContent = `${total}`;
  }
  
  
})

bodring.style.display = "none";

input2.addEventListener("click", function (e) {
  if (e.target.checked) {
    bodring.style.display = "block";
    total +=10000;
    summa.textContent = `${total}`;
  } else {
    bodring.style.display = "none";
    total -=10000;
    summa.textContent = `${total}`;
  
  }

});
qoziqorin.style.display = "none";

input3.addEventListener("click", function (e) {
  if (e.target.checked) {
    qoziqorin.style.display = "block";
    total +=23000;
    summa.textContent = `${total}`;
   
  } else {
    qoziqorin.style.display = "none";
    total -= 23000;
    summa.textContent = `${total}`;
   
  }


});






// let paragraph = document.createElement("p");
// let div = document.querySelector("#maxsus");
// //console.log(div.parentElement.parentElement);

// let counter = 0;
// setInterval(() => {
    
//     counter++;
//     let paragraph = document.createElement("p");
//     paragraph.classList.add("text");
//     paragraph.textContent = `${counter} Lorem ipsum dolor sit amet.`;
//     paragraph.setAttribute("title", "Jsdan salom")
//     // body.appendChild(paragraph);
//     // body.prepend(paragraph);
//     body.insertBefore(paragraph, div);
//     body.insertBefore(paragraph, div.nextElementSibling);

// }, 2000);

// let img = document.querySelector("img");
// img.addEventListener('mouseenter', function () {
//   text.textContent = "salom";
// })

// let text = document.querySelector("h1"),
//   button = document.querySelector("button");
// text.addEventListener('mousedown', function () {
//   text.textContent="Hammaga salom"
// })
// button.addEventListener('mouseenter', function () {
//   button.textContent=`text`
// })