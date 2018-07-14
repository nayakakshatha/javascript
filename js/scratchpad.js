salary=600000;
var tax_amount=0;
var net_salary=0;
if(salary>=0 && salary<300000){
  tax_amount=0;
}else if (salary>=300000 && salary<800000){
  tax_amount=(salary*10)/100;
}else if(salary>=800000 && salary<1200000){
  tax_amount=(salary*20)/100;
}else{
  tax_amount=(salary*30)/100;
}
 net_salary=salary-tax_amount;
 console.log("netsalary is:"+net_salary ); 

  


/*
Exception: SyntaxError: missing ) after argument list
@Scratchpad/1:14
*/