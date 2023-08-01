
//tanımlamalar
const container=document.querySelector(".container");
const img=document.querySelector(".imgBox");
const title=document.querySelector(".title");
const singer=document.querySelector(".singer");
const next=document.querySelector("#next");
const play=document.querySelector("#play");
const prev=document.querySelector("#prev");
this.duration=document.querySelector(".duration");
this.timeLine=document.querySelector("#timeLine");
this.currentTime=document.querySelector(".currentTime");
this.volume=document.querySelector("#volume");
this.setvolume=document.querySelector(".setvolume");
this.volumeBar=document.querySelector("#volumeBar");
this.songList=document.querySelector(".songList");
this.ul=document.querySelector(".ul");




const player=new MusicPlayer(musicList);

//ekran yüklendiğinde şarkı görünür
window.addEventListener("load",()=>{
  let music =player.getMusic();  
  displayMusic(music);
  displayMusicList(player.musicList);
  
});
//görüntü oluşur
function displayMusic(music){
    title.innerHTML=music.getName();
    singer.innerHTML=music.singer;
    img.src="img/" +music.img;
    audio.src="mp3/"+music.file;
}

//başlatma-durdurma işlemi
play.addEventListener("click", () =>{
    const isMusicplay=container.classList.contains("playing");
    isMusicplay ? pauseMusic() : playMusic();
});

prev.addEventListener("click",() =>{prevPlay();});

next.addEventListener("click",() =>{nextPlay();});

const prevPlay= () =>{
    player.prev();
    let music=player.getMusic();
    displayMusic(music);
    playMusic();
}

const nextPlay = () =>{
    player.next();
    let music=player.getMusic();
    displayMusic(music);
    playMusic();
}

const pauseMusic= () => {
    container.classList.remove("playing");
    play.classList="fa-solid fa-play fa-3x";
    audio.pause();
}

const playMusic= () => {
    container.classList.add("playing");
    play.classList="fa-solid fa-pause fa-3x";
    audio.play();
}

//zamanının düzgün görünümü
const calculateTime= (time)=> {
    const min= Math.floor(time / 60);
    const sec= Math.floor(time % 60);
    const newSec= sec < 10 ? `0${sec}` : `${sec}`;
    const show=`${min} : ${newSec}`;
    return show;
}
//mp3 uzunluğun agöre zamanın farklı görünümü
audio.addEventListener("loadedmetadata",() =>{
    duration.textContent=calculateTime(audio.duration);
    timeLine.max=Math.floor(audio.duration);
});
//geçen zamnı belirtme
audio.addEventListener("timeupdate",() =>{
    timeLine.value=Math.floor(audio.currentTime);
    currentTime.textContent= calculateTime (timeLine.value);
});
//manuel zaman ayarı
timeLine.addEventListener("input",() =>{
    currentTime.textContent=calculateTime(timeLine.value);
    audio.currentTime=timeLine.value;
});



//ses döngüsü
setvolume.addEventListener("click",() =>{
    const isOff =setvolume.classList.contains("off");
    isOff ? volumeoff() : volumeon();

});
//ses kapalı
const volumeoff =() =>{
    setvolume.classList.remove("off");
    volume.classList="fa-solid fa-volume-xmark";
    audio.muted= true;
}
//ses açık
const volumeon =(e) =>{
    setvolume.classList.add("off");
    volume.classList="fa-solid fa-volume-high ";
    audio.muted= false;
    volumeBar.value=100;
    //sıkıntı var bar 100 ama volume değil !!!
}

volumeBar.addEventListener("input",(e) =>{
    //o anki value değeri konsola yansır
    //console.log(e.target.value);
    const value= e.target.value;
    audio.volume=value/100;
    if(value==0){
        setvolume.classList.remove("off");
        volume.classList="fa-solid fa-volume-xmark";
        audio.muted= true;
    }
    else{
        setvolume.classList.add("off");
        volume.classList="fa-solid fa-volume-high ";
        audio.muted= false;
    }

    
});


//her bir ses dosyasını kapsaması için audioelements tanımlandı
const audioElements = document.querySelectorAll("audio");

//nextPlayle beraber sürekli bittikçe sıradakine geçiyor
audioElements.forEach((audio) => {
  audio.addEventListener("ended", function() {
    nextPlay();
  });
});

//extra alta tekrar butonu eklenebilir böylece çalmakta olanı
//tekrarlar diğerine geçmez


// .
// .
// .
// .
// .


//bar ikonundan liste çıkarma ve dinamikl şekilde listeyi doldurma
const displayMusicList= (list) =>{
    for(i=0;i<list.length;i++){
        let liTag= `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${list[i].getName()}</span>
            <span id="music-${i}" class="badge bg-primary rounded-pill">${audio.duration}</span>
            <audio class="music-${i}" src="mp3/${list[i].file}"></audio>
            </li>`;

    ul.insertAdjacentHTML("beforeend",liTag);
    }
}