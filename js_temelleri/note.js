console.log(5000+(5000*0.3)); //maaş ali
console.log(6000+(6000*0.3)); //maaş veli

//---değişken tanımlama
var zam=0.3;
var maasAli=5000;
var maasVeli=6000;
console.log(maasAli+(maasAli*zam)); //maaş ali
console.log(maasVeli+(maasVeli*zam)); //maaş veli


//---değişken veri türü
var name="apple"; //string
let price=20; //number

console.log(typeof name); //string
console.log(typeof price); //number

let num1="10";
let num2="20";
console.log(num1+" "+num2); //10 20
console.log(Number(num1)+Number(num2));//30

let num3=10;
let num4=20;
console.log(num3+num4); //30
console.log(num3.toString()+" "+num4.toString());//10 20

let final=90;
let success=(50<=final) // final>=50 "true" not "false"
console.log(success); // typeof boolean

// let age=""; // string
let age=45; //number
console.log(age);
console.log(typeof age);


//---değişken uygulama

// const bd=[2003,2006];
// function yasHesapla(){
//     console.log(2023-[bd]);
// }


let stu1name="zeynep deler";
let stu1bd=2003;

let stu2name="ali veli";
let stu2bd=1998;

console.log("zey name:"+stu1name+"\n"+"ali name:"+stu2name);

let currentYear= new Date().getFullYear();
console.log("zey age:"+(currentYear-(stu1bd))+"\n"+"ali age:"+(currentYear-(stu2bd)));

 
    const stu1math=[50,79,80];
    const stu2math=[20,60,34];
    let final1=((stu1math[0]+stu1math[1]+stu1math[1])/3);
    let final2=((stu2math[0]+stu2math[1]+stu2math[1])/3);

    console.log("zeynep ortalama:"+parseInt(final1));
    let basari=(final1>=50)
    console.log(basari);

    console.log("ali ortalama:"+parseInt(final2));
    let basari2=(final2>=50)
    console.log(basari2);
    console.log("uygulama bitti");
 
//operator

let a=2,b=4,c="2";
let ans=(a==c)
console.log("sonuc:"+" "+ans);// type dont necessary

ans=(a===c)
console.log("sonuc:"+" "+ans);// type is necessary

// if else functions

// example1
let edu="uni";
let agee=48;

if(agee>=18 && edu=="uni"||"lise"){
    console.log("ehliyet alabilir");
}
else{
    console.log("ehliyet alamaz");
}

// example2
let username="justcodess";
let pass=1233;
if(username=="justcodess" && pass==123){
    console.log("giriş yapıldı");
}
else if(username=="justcodess" && pass!=123){
    console.log("password hatalı");
}
else if(username!="justcodess" && pass==123){
    console.log("user name hatalı");
}
else{
    console.log("hatalı giriş");
}

// example3.1
let myNum=0;

if(myNum>10 && myNum<50){
    console.log("sayı 10 ile 50 ararsında bir değerdir");

}
else{
    console.log("sayı 10 ile 50 ararsında bir değer değildir");
}
//example 3.2
if(myNum>0 ){
    if(myNum%2!=0){
       console.log("sayı pozitif ve tektir"); 
    }
    else{
        console.log("sayı pozitif ve çifttir"); 
    }}
else if(myNum<0){
    if(myNum % 2==0){
        console.log("sayı negatif ve çifttir");
    }
    else{
        console.log("sayı neagtif ve tektir");
    }}
    
else{
    console.log("sayı sıfırdır");
}

//example 3.3

let  x=10,y=2,z=3;
if(x>y &&x>z ){
    if(y>z){
        console.log("x>y>z");
    }
    else{
        console.log("x>z>y");
    }
}
else if(y>x && y>z){
    if(x>z){
        console.log("y>x>y");
    }
    else{
        console.log("y<z>x");
    }
}
else if(z>x && z>y){
    if(x>z){
        console.log("y>x>y");
    }
    else{
        console.log("y<z>x");
    }
}
else{
    console.log("x=y=z");
}

//example 3.4

let v1=100,v2=100,f=80;
let ort=(v1+v2+f)/3;
console.log("ortalama:"+parseInt(ort));

if(ort>=50){
    if(f>=50){
        console.log("dersten geçti");
    }
    else{
        console.log(" final notundan dolayı geçemedi");
    }
}
else{
    if(f>=70){
        console.log("final notu sayesinde dersten geçti");
    }
    else{
        console.log("dersten kaldı");
    }
}

//--- use string

let myName="zeynep",mySname="deler",myBd="2003";
findAge=currentYear-myBd;
// let currentYear= new Date().getFullYear();

let myMessage=("Hi"+" "+myName.toUpperCase()+" "+mySname.toUpperCase()+" "+"happy birtday now you are"
+" "+findAge); //option 1
console.log(myMessage);
myMessage=`hi ${myName}`; //option2



myAge=10;
let reşit= myAge>=18 ? "reşitim":"reşit değilim"
//bu şeşit değişkenini aşağıda direkt tanımlayacağız

myMessage=(`ben ${myAge} yaşındayım ve ${reşit}`);// yaşa göre reşitim/değilim çıktısı değişti

console.log(myMessage);

//----string method
console.log(myMessage.length);
console.log(myMessage.slice(0,6));
console.log(myMessage.substring(4));
console.log(myMessage.replace("ben","sen"));//replace
console.log(myMessage.trim());//delete space
console.log(myMessage.trimEnd());// delete space to end
console.log(myMessage.indexOf("ben"));
console.log(myMessage.split(" ")[0]);// change to array then take index[0]


//---string uygulama

let url="https://www.udemy.com/";
let coursename="Komple Web Geliştirme";

console.log(url.length);   //1
                            
console.log(coursename.split(" ").length);

console.log(url.includes("https",0));   //3
console.log(url.startsWith("https"));   //3

console.log(coursename.match("Web"));   //4
console.log(coursename.indexOf("web") ? "true":"false");  //4

console.log(url+coursename.toLowerCase().replaceAll(" ","-").replaceAll("ş","s")); //5

//---numbers

let sayi=15.3456890;
let sonuc;

sonuc=sayi.toPrecision(5); //toplam 5 rakam 
console.log(sonuc);

sonuc=sayi.toFixed(5); //virgülden sonra 5 rakam
console.log(sonuc);

sonuc=isNaN("234"); // sayı mı değil mi sorgusu
console.log(sonuc);

sonuc=Math.round(7.8);// sayı yuvarlama (8)
console.log(sonuc);

sonuc=Math.round(7.2);// sayı yuvarlama (7)
console.log(sonuc);

sonuc=Math.ceil(7.8);// bir üste yuvarlar
console.log(sonuc);

sonuc=Math.floor(7.8);// bir alta yuvarlar
console.log(sonuc);


//Math.max  Math.min  Math.pow  Math.sqrt   Math.abs  

sonuc=Math.floor(Math.random*10)+1; // 0 10 arası sayı üretme
                                                        
let now=new Date;
f=now;

//get method
f=now.getDate(); // ayın kaçı
console.log(f);

f=now.getDay(); // gün 0(pazar)  6(cumartesi)
console.log(f);

f=now.getHours(); // saat
console.log(f);

f=now.getFullYear(); // yıl
console.log(f);

f=now.getTime(); // saat milisecond
console.log(f);

//set method

now.setFullYear(2035); // yıl bilgisi değiştirme
f=now;
console.log(f);

let bd=new Date(2003,1,10);











