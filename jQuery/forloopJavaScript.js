for(let i=0;i<5;i++){

document.querySelectorAll("button")[i].addEventListener("click",function(){
    document.querySelector("h1").style.color="red"
})

}

//with jquery
$("button").click(function(){// jquery find all buttom then add listener click for each button
    $("h1").css("color","red");
})