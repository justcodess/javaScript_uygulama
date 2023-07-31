// //ES5 version
// function selam_es5(){
//     console.log("hi");
// }

// var selamm_es5=function (){
//     console.log("hii");
//         return

// }

// //ES6 version-arrow function
// const selam_es6= (name) => { console.log("hiii "+ name); }


// //ES5
// var toplam=function(a,b){
//     return a+b;
// }
// //ES6
// const toplamES6=(a,b) => a+b;

// const toplam_ES6=(a,b) => { return a+b } ;


// var esit=toplamES6(2,4);
// console.log(esit);

// const sayilar=[1,2,3,4,54,98,37,33];

// //uzun yol
// for(let sayi of sayilar){
//     if(sayi%2==0){
//         console.log(sayi);    }
// }
// //filter
// const tekSayiKont=sayilar.filter((sayi)=> sayi%2==1) ;

// //map
// const teksayibul=sayilar.map((sayi)=>sayi%2==1);

// const uruns=[
//     {urunAd:"iph11", fiyat:10},
//     {urunAd:"iph12", fiyat:20},
//     {urunAd:"iph13", fiyat:30}
// ];


// const show1=uruns.map((urun)=>urun.urunAd);
// const show2=uruns.filter((urun)=>urun.fiyat>10).map((urun)=>urun.urunAd);
// const show3=uruns.find((urun)=>urun.fiyat>10);
// const show4=uruns.findIndex((urun)=>urun.fiyat>10);
// const show=uruns.

// console.log(show);

// //spread operatoru
// const msj=["my","name","is","zd"];

// let sonuc="";
// for(let x of msj){
// sonuc+= x +" ";
// }
// //uzun yol
// console.log(sonuc);
// //sonuc olusturmak yerine spread operatoru kullan
// console.log(...msj);

// const dizi=["one","two"];
// const dizi2=["three","four"];
// const dizi3=[...dizi,...dizi2];



// const sayi1=[1,2,3,4];
// const sayi2=sayi1;//referans kopyalama
// const sayi2=...sayi1;//value kopyalama bu sekilde sayi2deki değişiklik sadece sayi2de
// sayi2[0]=10;
// console.log(sayi2,sayi1);

// const user={
//     userName: "zd",
//     usermail: "zd@gmail.com"
// }
// const addres={
//     userName:"ns",//son bilgi üsttekini ezdi
//     city:"sakarya"
// }
// console.log({...user,...addres});

// //rest parameters
// function toplam(...args){
//     let sonuc=0;
//     for(let sayi of args){
//         sonuc+=sayi;
//     }
//     return sonuc;
// }

// function bilgi(ad,soyad,...adres){
//    console.log(ad,soyad,adres);
// }
// bilgi("zey","deler","sakarya","serdivan");


// //array destructuring
// let name=["zeynep","deler"];

// let firstName=name[0];
// let lastName=name[1];

// [firstName, lastName]= name;

// console.log(firstName, lastName);

// //object destructuring
// let urun={
//     marka:"apple",
//     model:"iph11",
//     fiyat:20
   
// }

// function urunBul(obj){
//         let {marka,model,fiyat,satis=false} = obj;
//         console.log(marka,model,fiyat,satis);
// }
//     urunBul(urun);

// // JS maps 
// const people=new Map();
// people.set(1,"zeynep deler");
// people.set(234,"zeyzey");
// people.set(true,"helo");

// console.log(people.get(1));
// console.log(people.delete(1));
// console.log(people.has(1));
// people.clear;
// console.log(people.size);

// for(let x of people.keys()){
//     console.log(x);
// }
// for(let x of people.values()){
//     console.log(x);
// }
// for(let x of people.entries()){
//     console.log(x);
// }
// for(let [key,value] of people.entries()){
//     console.log(key,value);
// }


// //JS sets yapısı
// const sayilar=new Set([3,5,4,6]);
// sayilar.add(7);
// sayilar.add("7");
// sayilar.delete(5);

// console.log(sayilar.has(5));
// // sayilar.clear();
// console.log(sayilar);


// //JS ES6 class
// function KisiES5(ad,meslek,bd){
//     this.ad= ad;
//     this.meslek= meslek;
//     this.bd= bd;
// }
// KisiES5.prototype.yasHesapla=function(){
//     let tarih=new Date().getFullYear();
//     return tarih-this.bd;
// }

// let zey=new KisiES5("zeynep deler","ogrenci","2003");
// let p1=new KisiES5("person1","ogretmen","1999");

// console.log(zey.yasHesapla());
// console.log(zey);


// class KisiES6 {
//     constructor(ad,meslek,bd){
//         this.ad= ad;
//         this.meslek= meslek;
//         this.bd= bd;
//     }
//     yasHesapla(){
//         let tarih= new Date().getFullYear();
//         return tarih-this.bd;
//     }
// }

// let p2=new KisiES6("zeynep deler","ogrenci","2003");
// let p3=new KisiES6("person1","ogretmen","1999");

// console.log(p3.yasHesapla());
// console.log(p3);


// //Getter & Setter
// class Kisi {
//     constructor(ad,meslek,bd){
//         this.ad= ad;
//         this.meslek= meslek;
//         this.bd= bd;
//     }
//     yasHesapla(){
//         let tarih= new Date().getFullYear();
//         return tarih-this.bd;
//     }

//     get ad(){
//         return this._ad;
//     }
//     set ad(value){
//         if(value.length<3){
//             console.log("çok az karakter");
//             return ;
//         }
//         this._ad=value;
        
//     }
//     get meslek(){
//         return this._meslek;
//     }
//     set meslek(value){
//         this._meslek=value;
        
//     }
//     get bd(){
//         return this._bd;
//     }
//     set bd(value){
//         if(value<1900 || value> new Date().getFullYear()){
//             console.log("hatalı giriş");
//             return ;
//         }
//         this._bd=value;
        
//     }
// }
// let enes=new Kisi("enes","ogrenci","2002");

// console.log(enes); //get
// console.log(enes.meslek); //set


//Inheritance(kalıtım)

//parent
class Kisi{
    constructor(ad,bd,){
        this.ad=ad;
        this.bd=bd;
    }
    yasHesapla(){
        let tarih=new Date().getFullYear();
        return tarih-this.bd;
    }
    tanıt(){
        return `benim adım${this.ad}`;
    }
    
}

//child
class Ogrenci extends Kisi{
    constructor(ad,bd,okulNo){
        super(ad,bd);
        this.okulNo=okulNo;
    }
    tanıt(){
        return `benim adım ${this.ad} numaram ${this.okulNo}`;
    }
}
let ogrenci=new Ogrenci("enes",2003,45678);
console.log(ogrenci.tanıt());