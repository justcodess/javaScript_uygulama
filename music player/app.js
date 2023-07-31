const container=document.querySelector(".container");
const img=document.querySelector(".imgBox");
const title=document.querySelector(".song");
const singer=document.querySelector(".singer");
const next=document.querySelector(".next");
const play=document.querySelector(".play");
const previous=document.querySelector(".previous");


const player=new MusicPlayer(musicList);





window.addEventListener("load",()=>{
  let music =player.getMusic();  
  displayMusic(music);
  console.log("resim geldi");
});

function displayMusic(music){
    title.innerHTML=music.title;
    singer.innerHTML=music.singer;
    image.src="img/10.jpg";
    audio.src="mp3/"+music.file;
}
play.addEventListener("click",()=>{
    const musicplay=container.classList.add("playing");
    musicplay ? pauseMusic() : playMusic();
});

function playMusic() {
    container.classList.add("playing");
    audio.play();
}
function pauseMusic() {
    container.classList.remove("playing");
    audio.pause();
}
