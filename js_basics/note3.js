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

  //find volume
  class Kata {
    static getVolumeOfCuboid(length, width, height) {
      let v=length*width*height;
      return v;
    }
  }

  //tas kagit makas
  const rps = (p1, p2) => {
    if(p1 === p2) {
      return 'Draw!'
    }; 
    return `Player ${/rockscissors|scissorspaper|paperrock/.test(p1+p2)? 1 : 2} won!`;
  
  };

  //replace function
  function removeExclamationMarks(s) {

    return s.replace(/!/gi,"");
  }
--------------------------------------------
  function removeExclamationMarks(s){
    return s.split("!").join('');
  }
  
  //traffic lambs
  function updateLight(current) {
    const states = ['green', 'yellow', 'red'];
    let nextIndex = (states.indexOf(current) + 1) % states.length;
    return states[nextIndex];
  }

  //reverse
  function solution(str){
  
    return str.split('').reverse().join('');  
   }

   //çift elemanları remove
   function removeEveryOther(arr){
  
    arr = arr?.filter((item, i)=>i%2==0)
    return arr
-------------------------------------------
    function removeEveryOther(arr){
        return arr.filter(function( item, index) {
          return index % 2 === 0;
        });
      }


}