
    $("h1").css("color","red")
    $("h1").addClass("title-js color") // seprate behavior css js html  

console.log($("h1").css("fontSize")) // expect value of property
console.log($("h1").hasClass("color")) // expect value of property
$("button").text("Click Scarlett") // select all button change all text thats selected
$(".photo").html('<img src="asset/3.jpg" alt="">'); //add photo 
$($("button")[1]).html("<em>scarlett Johansson</em>") // select single element of them 
console.log($("img").attr("src")); //property show  ~  getAttribute 
$("img").attr("height","200px")  // set attribute this way wrong  because seprate behavior css js html
$($("button")[3]).click(function(){  // addEventListener   ~
    $(".photo").toggle(
        (e)=>{$(".photo").append('<img src="asset/2.jpg" height="200px" alt="">');
        console.log(e)
    }
    ); 
});
var char=""
$("input").keypress(function(e){
   char +=(e.key);
   
    console.log(e.key)
  
   
    $(".banner").html(
        
        '<h1>'+char+'</h1>'
    );
})