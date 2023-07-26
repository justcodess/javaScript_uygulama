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
        this.userCorrect=0;
    }

Quiz.prototype.takeQues=function(){
    return this.questions[this.soruIndex];
}
// quiz object
   const quiz=new Quiz(questions);
   const ui=new UI();

//    for(i=0;i<questions.length;i++){}

ui.btn_start.addEventListener("click",function(){
    
        startTimer(10);    
        timer_line();    
        document.querySelector(".quiz-box").classList.add("active");
        ui.btn_start.classList.add("inactive");
        showQuestions(quiz.takeQues());
        quesTable(quiz.soruIndex+1,quiz.questions.length);
        skorTable(quiz.userCorrect,quiz.questions.length);
        alert("You have only one chance to answer.".toUpperCase()+" \n "+"Solve carefully good luck!!");
    
});
ui.nextbtn.addEventListener("click",function(){
    clearInterval(counter);
    clearInterval(counterLine);

    startTimer(10);
    timer_line();
    if(quiz.questions.length!=quiz.soruIndex+1){
        quiz.soruIndex+=1;
        showQuestions(quiz.takeQues());
        quesTable(quiz.soruIndex+1,quiz.questions.length);

        ui.nextbtn.classList.remove("show");
        if(quiz.soruIndex+1==quiz.questions.length){
            ui.nextbtn.textContent="FINISH"; 
        }

    }
    else{
        ui.btn_start.classList.add("inactive");
        document.querySelector(".quiz-box").classList.remove("active");
        
        ui.skor_box.classList.add("active");
       skorInfo(quiz.userCorrect,quiz.questions.length);



    }
})
ui.btn_replay.addEventListener("click",function(){
    quiz.soruIndex=0;
    quiz.userCorrect=0;
    ui.btn_start.click();
    ui.skor_box.classList.remove("active");
})
ui.btn_quit.addEventListener("click",function(){
    window.location.reload();
    
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
      ui.ques_text.innerHTML=showing;
      option_list.innerHTML=options; 

      const option=option_list.querySelectorAll(".option");

      for(let opt of option){
        opt.setAttribute("onclick","optionSelected(this)")   
       }
} 
       function optionSelected(option){
        // ı dont want pause so didnt add
        // clearInterval(counter);
        let cevap=option.querySelector("span b").textContent;
        let soru=quiz.takeQues();

        if(soru.control(cevap)){
            quiz.userCorrect+=1;
            skorTable(quiz.userCorrect,quiz.questions.length);

            option.classList.add("correct");
            option.insertAdjacentHTML("beforeend",correctIcon);
        }else{option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend",incorrectIcon);
    }

        for(let i=0;i < option_list.children.length; i++){
            option_list.children[i].classList.add("disabled");
            
        }

        ui.nextbtn.classList.add("show");

    }

    function quesTable(soruSayisi,toplamSoru){
        let tag=`<span class="table badge bg-warning">${soruSayisi}/${toplamSoru}</span>`;
        document.querySelector(".quesTable").innerHTML=tag;
    }
    function skorTable(userCorrect,toplamSoru){
        let table=`<span class="badge bg-success">${userCorrect}/${toplamSoru}</span>`;
        document.querySelector(".skorTable").innerHTML=table;

    }
    function skorInfo(userCorrect,toplamSoru){
        let info=`You success ${userCorrect} out of ${toplamSoru} questions`;
        document.querySelector(".skor").innerHTML=info;
    }


    //timer function
    let counter;

    function startTimer(time){
        
        counter=setInterval(timer,1000);

        function timer(){
            ui.lastTime_sec.textContent=time;
            time--;
            if(time<3){
                document.getElementById("lasttime").style.color="red";
                document.getElementById("lasttime").style.fontSize="25px";
            
            if(time<0){
            clearInterval(counter);
            ui.lastTime_text.textContent="time's up";
            
            // let ans=quiz.takeQues().correctAns;

            // for(let option of option_list.children){
            //     if(option.querySelector("span b").textContent==ans){

            //     option.classList.add("correct");
            //     option.insertAdjacentHTML("beforeend",correctIcon);
            //     }
            //     option.classList.add("disabled");
            // }
            quiz.userCorrect+=0;
            ui.nextbtn.click();
            
            }}
        }
    }
    let counterLine;
    function timer_line(){
        let lineWidth=599;

        counterLine=setInterval(timer,100);
        function timer(){
            lineWidth -= 6;
            ui.timeLine.style.width=lineWidth+"px";

            if(lineWidth<0){
                clearInterval(counterLine);
            }
        }
    }


