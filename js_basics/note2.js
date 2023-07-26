//--arrays

let students=["zeynep","zey","random"];
let f;

f=students.toString();
f=students.join("\n");

//eleman silme
f=students.pop(); //son eleman silinir ve o bastırılır
f=students.shift(); // ilk elemna silinir

//eleman ekleme
f=students.push("aksu");
f=students.unshift("lala");

console.log(students);
console.log(f);


//array birleştirme
let array1=["a","b"];
let array2=["c","d"];
let array3=["e","f"];

f=array1.concat(array2,array3);
console.log(f);
//ekle-çıkar
f=array1.splice(0,1,"u","y"); //index ,silinmesi istenen,eklenenler

console.log(array1.sort().reverse());

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
let average=0;
// find students grade average
//buna çözüm bul
for(i=0;i<3;i++){
    for(j=0;j<3;i++){
        let not=students[i][2][j];
        average+=not;
    }
  console.log(average/3);    
}    
     

     
 

object
let user={
    "name":"zeynep",
    "surname":"deler",
    "age":"20",
    "adress":{
        "sehir":"sakarya",
        "ilce":"serdivan"
}}
let sonuc;

sonuc=user.name;
sonuc=user.age;
sonuc=user["age"];
sonuc=user.adress.ilce;

obje uygulama


    const siparis1={
    "siparisId":"101",
    "siparisTarih":"31.12.2022",
    "odemesekil":"kredi kart",
    "kargo adres":"serdivan sakarya ",
    "urunler":[
        "urun1"={
         "urunId":"1", 
         "urunbaslık":"iphone11",
         "urunUrl":"https://www.udemy.com/course",
         "urunFiyat":"22000"
        },
        "urun2"={
            "urunId":"2", 
            "urunbaslık":"iphone12",
            "urunUrl":"https://www.udemy.com",
            "urunFiyat":"25000"
           }
    ],
    "musteri":{
    "musteriId":"12"},
    "satici":{
        "firmaId":"34",
        "firmaAdi":"appleTurkey"
    }}

    const siparis2={
        "siparisId":"102",
        "siparisTarih":"30.12.2022",
        "odemesekil":"kredi kart",
        "kargo adres":"adapazarı sakarya ",
        "urunler":[
            "urun3"={
             "urunId":"7", 
             "urunbaslık":"iphone13",
             "urunUrl":"https://www.udemy.com/course",
             "urunFiyat":"32000"
            },
            "urun4"={
                "urunId":"8", 
                "urunbaslık":"iphone12",
                "urunUrl":"https://www.udemy.com",
                "urunFiyat":"35000"
               }
        ],
        "musteri":{
        "musteriId":"13"},
        "satici":{
            "firmaId":"35",
            "firmaAdi":"appleTurkey"
        }}

   let tamUcret=((siparis1.urunler[0].urunFiyat)*1.18)+((siparis1.urunler[1].urunFiyat)*1.18);
   console.log(tamUcret); 

   let sayilar=[12,2,4,7,1,8];
   let toplam;

   for (let index in sayilar){
    toplam+=sayilar[index];
   }

   for (let sayi of sayilar){
    toplam+=sayi;
   }

   let user={
    "name":"zey",
    "pass":"123"
   }

   for(let key in user){
    console.log(key);
    console.log(user[key]);
   }

döngü uygulama
 let sayilar=[1,5,7,15,3,25,30];
 for(i=0;i<sayilar.length;i++){
    console.log(sayilar[i]*sayilar[i]);
 }

 for(i=0;1<sayilar.length;i++){
   if (sayilar[i]%5==0){
    console.log(sayilar[i]);
   }
 }
let toplam=0;
 for(i=0;i<sayilar.length;i++){
    if (sayilar[i]%2==0){
        toplam+=sayilar[i];
     
    }
  }console.log(toplam);

example 2
  
 let urunler=["iphone 11","samsung s22","iphone 12","samsung s23"];

 for(i=0;i<urunler.length;i++){
    console.log(urunler[i].toUpperCase());
 }
let toplam=0;
 for(i=0;i<urunler.length;i++){
    if(urunler[i].includes("samsung")=="1"){
        
        toplam+=1;
        
    }
 }console.log("samsung telefonlar:"+toplam);

let ogrenciler=[
    {"ad":"zey","soy":"deler","not":[60,70,80]},
    {"ad":"abc","soy":"rrty","not":[50,70,40]},
    {"ad":"asd","soy":"qwe","not":[90,90,80]}
];
for(let ogrenci of ogrenciler){
let ort=0;
let toplamNot=0;
adet=0;

for(let i of ogrenci.not){
    toplamNot+=i;
    adet++;
}
ort=toplamNot/adet;
console.log(ort);
}

function selam (msg){
    console.log(msg);
}

selam("hiii");
selam("whats up");

function findAge(birthdayYear){
    return new Date().getFullYear()-birthdayYear;
}

function emeklilik(birthdayYear){
    let yas= findAge(birthdayYear);
    let kalanYil=65-yas;

    if(yas<65){
        console.log("emekli olmadınız "+kalanYil +" yılınız kaldı");
    }
    else{
        console.log("emeklisiniz");
    }
}

emeklilik(2003);

function kelimeYaz(kelime,kackez){
    for(i=0;i<kackez;i++){
        console.log(kelime);
    }
}

kelimeYaz("hi",3);


function alancevrehesap(kenar,kose){
    let alan=kenar*kose;
    let cevre=(kenar+kose)*2;
    console.log("alan:"+alan + " çevre:"+cevre);
}

alancevrehesap(7,8);

function yaziTura(){
    let sonuc=Math.round(Math.random()+1);
    if(sonuc==1){
        console.log("yazı");
    }
    else{
        console.log("tura");
    }
}

yaziTura();

let sayilar=[];
function tamBolen(sayi){
    for(i=0;i<sayi;i++){
       if( sayi%i==0){
        sayilar.push(i);}
    }
    return sayilar;
}

console.log(tamBolen(39));
let sonuc=0;
function toplam(){
    for(i=0;i<arguments.length;i++){
        sonuc+=arguments[i];
    }
    return sonuc;
}

console.log(toplam(4,6,7));