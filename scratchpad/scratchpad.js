function searchElement(arr,ele){
  for(var i = 0; i < arr.length ; i++){
    if(arr[i] == ele){
      return true;
    }
  }
  return false;
}

function searchElements(arr,e1, e2, e3){
  if(searchElements(arr,e1) && searchElements(arr,e2) && searchElements(arr,e3)){
    return true;
  }
  return false;
}
var arr = [43, 12, 41,23,33, 56, 29];
console.log(searchElement(arr,12));
console.log(searchElements(arr,41,23,33));
