// Constructor function for soru objects
function Soru(question,choise,correctAns){
    this.question=question;
    this.choices =choise;
    this.correctAns=correctAns;
    
}

Soru.prototype.control=function(answer){
        return answer===this.correctAns
    }

// Create a soru object
 
let questions=[

new Soru("1. Grand Central Terminal, Park Avenue, New York is the world's?",{A:"largest railway station",B :"highest railway station",C: "longest railway station",D: "None of the above"},"A"),
new Soru("2. Entomology is the science that studies?",{A:"Behavior of human beings",B :"Insects",C: "The formation of rocks",D: "The history of technical terms"},"B"),
new Soru("3. Eritrea, which became the 182nd member of the UN in 1993, is in the continent of?",{A:"Asia",B :"Africa",C: "Europe",D: "Australia"},"B"),
new Soru("4. Garampani sanctuary is located at?",{A:"Junagarh, Gujarat",B :"Diphu, Assam",C: "Gangtok, Sikkim",D :"Kohima, Nagaland"},"B"),
new Soru("5. For which of the following disciplines is Nobel Prize awarded?",{A:"Physics and Chemistry",B :"Physiology or Medicine",C: "Literature, Peace and Economics",D: "All of the above"},"D"),
];
//quiz constructor
    function Quiz(questions) {
        this.questions=questions;
        this.soruIndex=0;
    }

Quiz.prototype.takeQues=function(){
    return this.questions[this.soruIndex];
}
// quiz object
   const quiz=new Quiz(questions);

//    for(i=0;i<questions.length;i++){}

document.querySelector(".btn-start").addEventListener("click",function(){
    
        
        document.querySelector(".quiz-box").classList.add("active");
        showQuestions(quiz.takeQues());
        alert("You have only one chance to answer.".toUpperCase()+" \n "+"Solve carefully good luck!!");
    
});
document.querySelector(".nextbtn").addEventListener("click",function(){

    if(quiz.questions.length!=quiz.soruIndex+1){
        quiz.soruIndex+=1;
        showQuestions(quiz.takeQues());
        document.querySelector(".nextbtn").classList.remove("show");

    }
    else{
        document.querySelector(".nextbtn").textContent="FINISH";
        
    }
})

const option_list=document.querySelector(".option_list");
const correctIcon='<div class="icon"><i class="fas fa-check"></i></div>';
const incorrectIcon=' <div class="icon"><i class="fas fa-times"></i></div>';


function showQuestions(soru){
    let showing=`<span>${soru.question}</span>`;
    let options="";

    for(let answer in soru.choices){
        options+=
        `
        <div class="option">
        <span><b>${answer}</b>: ${soru.choices[answer]}</span>
        </div>

        `;
    }
      const option_list=document.querySelector(".option_list");
      document.querySelector(".ques-text").innerHTML=showing;
      option_list.innerHTML=options; 

      const option=option_list.querySelectorAll(".option");

      for(let opt of option){
        opt.setAttribute("onclick","optionSelected(this)")   
       }
} 
       function optionSelected(option){
        let cevap=option.querySelector("span b").textContent;
        let soru=quiz.takeQues();

        if(soru.control(cevap)){
            option.classList.add("correct");
            option.insertAdjacentHTML("beforeend",correctIcon);
        }else{option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend",incorrectIcon);
    }

        for(let i=0;i < option_list.children.length; i++){
            option_list.children[i].classList.add("disabled");
            
        }

        document.querySelector(".nextbtn").classList.add("show");

    }

    function quesTable(soruIndex){
        let showing=`<span>${soruIndex}</span>`;
    }
