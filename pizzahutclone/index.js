const const1 = document.querySelector(".collect");

const1.addEventListener("click" , func1);

function func1(){
    document.querySelector(".inputyourlocation").setAttribute("placeholder", "  Enter your collection location");
    document.querySelectorAll(".buttoninside")[1].classList.add("change");
    document.querySelectorAll(".buttoninside")[0].classList.remove("change");

}

const const2 =document.querySelector(".delivery");

const2.addEventListener("click" , func2);

function func2(){
    document.querySelector(".inputyourlocation").setAttribute("placeholder", "  Enter your location for delivery");
    document.querySelectorAll(".buttoninside")[0].classList.add("change");
    document.querySelectorAll(".buttoninside")[1].classList.remove("change");

}
