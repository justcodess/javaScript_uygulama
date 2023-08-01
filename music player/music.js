class Music{
    constructor(title,singer,img,file){
        this.title=title;
        this.singer=singer;
        this.img=img;
        this.file=file;
    }

    getName(){
        return this.title;
    }
}

const musicList=[
    new Music("güzel bir gün","teoman","10.jpg","1.mp3"),
    new Music("madem","dolu kadehi ters tut","20.jpg","2.mp3"),
    new Music("istanbul","sertab erener","30.jpg","3.mp3")
];
