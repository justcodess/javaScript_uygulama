//sıralama
//küçükten büyüğe
class SmallestIntegerFinder {
    findSmallestInt(args) {
      args.sort(function(a, b){return a - b});
      return args[0];
    }
  }

  //büyükten küçüğe
  class SmallestIntegerFinder {
    findSmallestInt(args) {
      args.sort(function(a, b){return b - a});
      return args[0];
    }
  }

  //"Hello, <name> how are you doing today?".
  function greet(name){
  let selam=`Hello, ${name} how are you doing today?`
  
  return selam;
}

//removes the first and last characters of a string
function removeChar(str){
    str=str.slice(1,-1);
  
    return str;
};

// the input string to uppercase
function makeUpperCase(str) {
    str=str.toUpperCase();
    return str;
  }

//   Write a function that accepts an integer n and a 
//   string s as parameters, and returns a string of s 
//   repeated exactly n times.
  function repeatStr (n, s) {
    let write='';
    for(i=0;i<n;i++){
      write+=`${s}`;
    }
    
    return write;
  }

  //calculates body mass index (bmi = weight / height2).
  function bmi(w, h) {
    let bmi=w/(h*h);
    
    if( bmi <= 18.5){
      return "Underweight";
    }
    else if(bmi <= 25.0 ){
      return "Normal";
    }
    else if( bmi <= 30.0){
      return "Overweight";
    }
    else{
      return "Obese";
    }
   
  }

  // Sum Numbers
    function sum (numbers) {
    let toplam=0;
    
      for(i=0;i<numbers.length;i++){
        toplam+=numbers[i];    }
      
      return toplam;
  };

  //double char
  function doubleChar(str) {
    let yaz='';
    for(i=0;i<str.length;i++){
      yaz+=`${str[i]}${str[i]}`
    }
    return yaz;
  }
//super idea for double char
  const doubleChar = (str) => str.split("").map(c => c + c).join("");

  function doubleChar(str) {
    return str.split("").map(function (c) {
      return c + c;
    }).join("");
  }

  //find its opposite.
  function opposite(number) {
    let trans=number*-1;
    return trans;
  }