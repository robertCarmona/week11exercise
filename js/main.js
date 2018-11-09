$(document).ready(function(){
console.log("connected");
})
$("#show").click(function(){
  $("img").show();
});
$("#hide").click(function(){
  $("img").hide();
});
$("#toggle").click(function(){
  $("img").toggle();
});
$("#opacity").click(function(){
  $("img").toggleClass("fade");
});

$("img").hover(function(){
  $("img").attr("src","https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/242ce817-97a3-48fe-9acd-b1bf97930b01/09-posterization-opt.jpg");
});

$("#add").click(function(){
  $("ul").append("<li>Some added Text</li>");
});

$("#backgroundRed").click(function(){
  $("body").css("background-color","red");
});
