function checknumber(){
    var num=document.getElementById("num").value;
    var message;
    if(num % 2 == 0){
        message="number:"+num+"is Even";
    }else{
        message="number:"+num+"is Odd";
       }
    
    document.getElementById("res").innerHTML=message;
    
}