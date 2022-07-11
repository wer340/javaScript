$($("button")[3]).click(function(){
    console.log("s")
    $(".photo").append('<img src="asset/1.jpg" height="200px" alt="">');
    //<div class=photo> bella bella  <img></div>


})
$($("button")[2]).click(function(){
    console.log("s")
    $(".photo").prepend('<img src="asset/2.jpg" height="200px" alt="">');
    //<div class=photo><img> bella bella  </div>


})
$($("button")[4]).click(function(){
    console.log("s")
    $(".photo img").remove(); //remove all img tag inside photo class
    

})

$($("button")[1]).click(function(){   //<img><div class=photo>  </div>
    console.log("s")
    $(".photo").before('<img src="asset/3.jpg" height="200px" alt="">');


})
$($("button")[0]).click(function(){   //<div class=photo></div><img>
    console.log("s")
    $(".photo").after('<img src="asset/3.jpg" height="200px" alt="">');


})
