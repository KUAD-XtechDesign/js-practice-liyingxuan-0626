$(function(){
    
    let txt1 ="form:liyingxuan";
    let txt2 ="to:kua";
    let num1 =55;
    let num2= 60;
 
 
     $("#button01").on("click",function(){
       $("#content").text("HELLO!");
 
     })
 
     $("#button02").on("click",function(){
       $("#content").text(txt1);
 
     })
 
    
     $("#button03").on("click",function(){
        $("#content").text(txt1+txt2);
 
     })
 
     $("#button04").on("click",function(){
         $("#content").text("answer"+num1+num2);
     })
 
     
     $("#button05").on("click",function(){
        $("#content").append(num1+"+"+num2+"="+(num1+num2)+".");
 
 
     })
    
 
 
 });