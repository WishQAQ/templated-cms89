
var winWidth = 0; 
var winHeight = 0; 
//============================================================================
//获取窗口宽度 
if (window.innerWidth) {
winHeight = window.innerHeight; 
winWidth = window.innerWidth; 
}
else{
winHeight = document.documentElement.clientHeight; 
winWidth = document.documentElement.clientWidth; 
}
//============================================================================


$(function() { 
 $(".web-somdh").click(function(){
   $('.web-tright').toggle();
});



});








$(window).load(function() { 

});
$(window).resize(function(){

});


