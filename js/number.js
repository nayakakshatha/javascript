function checkprime(){
 var num=getUserInput();
    flag=true;
    if(num<2){
        flag=false;
    }
    for(var i = 2; i <= Math.sqrt(num);i++){
        if(num % i == 0){
            flag = false;
            break;
        }
    }
    if(flag){
        showResult("Given number:" +num+ "is prime");
    }else{
        showResult("Given number:" +num+ "is not prime"); 
    }
}
function factorial(){
 var num=getUserInput();
    var res=1;
    for(var i = 2; i <= num; i++){
        res *= i;
    }
   showResult("factorial number:"+res);
}
function factors(){
   var num=getUserInput();
    var output="";
    for(var i = 1;i <= num; i++){
        if(num % i == 0){
            output += i+" ";
        }
    }
    showResult("factors of number:"+output);
    
}
function fibonaci(){
   var  num=getUserInput();
 var output = "";
    if(num==2){
        output+= "0";
    }else if(num == 2){
        output+= "0 1";
    }else{
        var a=0,b=1;
        output+= "0 1";
        for(var i =3; i<= num; i++){
            c= a + b;
            output+= " "+c;
            a = b;
            b = c;
    }
    }

    showResult("fibonaci series of:"+num +"is:"+output); 
    
}
function reverse(){
   var num=getUserInput();
    var rev=0;
    while(num > 0){
        r=num % 10;
       num=Math.floor(num / 10);
        rev=rev * 10 +r;
    }
   showResult("reverse:"+rev);

}
function ispalindrome(){
  var num=getUserInput();
    rev=0;
   num1=num;
    while(num > 0){
      r=num % 10;
       num=Math.floor(num / 10);
        rev=rev * 10 +r;
    }if(num==rev)  {
        
   showResult("palindrome:"+rev); 
}else{
    showResult("not palindrome:"+rev);  
}
}
function sumofdegits(){
   var num=getUserInput();
    sum=0;
    while(num != 0){
       
        sum+=num % 10;
        num=Math.floor(num / 10);
    }
   showResult("sumofdegits:"+sum);  
 
}
function summinguptosingledegit(){
   var num=getUserInput();
    sum=num;
    while(num>9){
        sum=Math.floor(num/10) + num%10;
        num=sum;
    }
   showResult("summing single digit:"+sum);
}

function getUserInput(){
    num=document.getElementById("num").value;
    return num;
}
function showResult(message){
    document.getElementById("Result").innerHTML="<h4>"+message+"</h4>";
}