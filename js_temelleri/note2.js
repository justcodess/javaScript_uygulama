// //--arrays

// let students=["zeynep","zey","random"];
// let f;

// f=students.toString();
// f=students.join("\n");

// //eleman silme
// f=students.pop(); //son eleman silinir ve o bastırılır
// f=students.shift(); // ilk elemna silinir

// //eleman ekleme
// f=students.push("aksu");
// f=students.unshift("lala");

// console.log(students);
// console.log(f);


// //array birleştirme
// let array1=["a","b"];
// let array2=["c","d"];
// let array3=["e","f"];

// f=array1.concat(array2,array3);
// console.log(f);
// //ekle-çıkar
// f=array1.splice(0,1,"u","y"); //index ,silinmesi istenen,eklenenler

// console.log(array1.sort().reverse());

// example 1

let fruits=["elma","armut","muz","çilek"];

f=fruits.length;  //1

console.log(fruits[0]+" "+fruits[3]);  //2

console.log(fruits.indexOf("çilek") ? "true":"false");  //3

console.log(fruits.push("kiraz"));  //4
console.log("kiraz eklendi:  "+fruits);

console.log("çıkan elemnalar:  "+fruits.splice(3,2));  //5
console.log("yeni hali:  "+fruits);


//example 2
let students=[
    ["yağız bilgi",2010,[70,60,80]],
    ["ada bilgi",2012,[80,80,90]],
    ["ahmet turan",2009,[60,60,70]]
    ]

// find students ages
for(i=0;i<3;i++){
   let yasHesap=2023-students[i][1]; 
    console.log(yasHesap);
}

// find students grade average
for(i=0;i<3;i++){
    let average=students[0][2][i];
    
     average+=students[0][2][i];
     console.log(average);
 }